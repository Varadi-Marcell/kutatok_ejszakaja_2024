import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import panzoom from '@panzoom/panzoom';
import {IndexSvgComponent} from "../index-svg/index-svg.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit,AfterViewInit{

  title = 'nyiltnapAngular';
  data: any;

  @ViewChild('scene') scene!: ElementRef;
  @ViewChild(IndexSvgComponent) indexSvgEl!: IndexSvgComponent;
  private instance: any;
  constructor(private dataService: DataService) {
  }
  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      this.data = data.filter(item => item.intezmeny === 'MFK');
      console.log(this.data);
    }, err => console.log(err));
  }

  ngAfterViewInit() {

    this.instance = panzoom(this.indexSvgEl.svgEl.nativeElement, {
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
