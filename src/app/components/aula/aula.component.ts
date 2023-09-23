import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import panzoom from "@panzoom/panzoom";
import {AulaSvgComponent} from "../aula-svg/aula-svg.component";

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit,AfterViewInit{
  data: any;

  @ViewChild('scene') scene!: ElementRef;
  @ViewChild(AulaSvgComponent) aulaSvgComponent!: AulaSvgComponent;
  private instance: any;
  constructor() {
  }
  ngOnInit() {

  }

  ngAfterViewInit() {

    this.instance = panzoom(this.aulaSvgComponent.svgEl.nativeElement, {
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

    this.instance.zoomIn(zoomFactor);
  }

  zoomOut() {
    const currentZoomFactor = this.instance.getScale();
    const zoomFactor = currentZoomFactor - 0.1;
    if (zoomFactor >= 1) {
      this.instance.zoomOut(zoomFactor);
    }
  }

}
