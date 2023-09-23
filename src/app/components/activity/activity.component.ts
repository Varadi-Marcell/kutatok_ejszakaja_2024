import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MySvgComponent } from '../../my-svg/my-svg.component';
import panzoom from '@panzoom/panzoom';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit, AfterViewInit {
  title = 'nyiltnapAngular';
  data: any;

  imageSrc = 'assets/aula2.svg';
  @ViewChild('scene') scene!: ElementRef;
  @ViewChild(MySvgComponent) mySvgComp!: MySvgComponent;

  private instance: any;

  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data.filter(item => item.intezmeny === 'MFK');
    }, err => console.log(err));
  }

  ngAfterViewInit() {

    this.instance = panzoom(this.mySvgComp.svgEl.nativeElement, {
      bounds: true,
      maxZoom: 1,
      minZoom: 0.1
    });


    this.scene.nativeElement.addEventListener('wheel', (e: WheelEvent) => {
      e.preventDefault(); // do not scroll

      const zoomSpeed = 0.2;
      const currentZoomFactor = this.instance.getScale();
      let zoomFactor;

      if (e.deltaY < 0) { // zoom in
        zoomFactor = currentZoomFactor + zoomSpeed;
      } else { // zoom out
        zoomFactor = currentZoomFactor - zoomSpeed;
        if (zoomFactor < 1) { // minZoom
          zoomFactor = 1;
        }
      }

      const point = {clientX: e.clientX, clientY: e.clientY};

      this.instance.zoomToPoint(zoomFactor, point);

    });
  }

  zoomIn() {
    const currentZoomFactor = this.instance.getScale();
    const zoomFactor = currentZoomFactor + 0.1;
    console.log(zoomFactor)

    this.instance.zoomIn(zoomFactor);
  }

  zoomOut() {
    const currentZoomFactor = this.instance.getScale();
    const zoomFactor = currentZoomFactor - 0.1;
    console.log(zoomFactor)
    if (zoomFactor >= 1) {
      this.instance.zoomOut(zoomFactor);
    }
  }

}
