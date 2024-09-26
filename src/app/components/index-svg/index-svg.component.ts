import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter, OnInit,
  Output, QueryList,
  Renderer2,
  TemplateRef,
  ViewChild, ViewChildren
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from "../../service/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-index-svg',
  templateUrl: './index-svg.component.html',
  styleUrls: ['./index-svg.component.css']
})
export class IndexSvgComponent implements AfterViewInit, OnInit {


  modalRef!: BsModalRef;
  @Output() viewInit = new EventEmitter<void>();
  @ViewChild('svgEl', {static: true}) svgEl!: ElementRef;
  @ViewChildren('a1') a1Elements: QueryList<ElementRef>;
  @ViewChildren('a2') a2Elements: QueryList<ElementRef>;
  @ViewChildren('a3') a3Elements: QueryList<ElementRef>;
  @ViewChildren('a4') a4Elements: QueryList<ElementRef>;
  @ViewChildren('a5') a5Elements: QueryList<ElementRef>;
  @ViewChildren('a6') a6Elements: QueryList<ElementRef>;
  @ViewChildren('b1') b1Elements: QueryList<ElementRef>;
  @ViewChildren('b4') b4Elements: QueryList<ElementRef>;
  @ViewChildren('c1') c1Elements: QueryList<ElementRef>;
  @ViewChildren('c2') c2Elements: QueryList<ElementRef>;
  @ViewChildren('elocsarnok') elocsarnokElements: QueryList<ElementRef>;
  @ViewChildren('aula') aulaElements: QueryList<ElementRef>;
  @ViewChildren('info') infoElements: QueryList<ElementRef>;
  @ViewChildren('parkolo') parkoloElements: QueryList<ElementRef>;
  @ViewChildren('park')parkElements: QueryList<ElementRef>;

  constructor(private modalService: BsModalService,
              public renderer: Renderer2,
              private el: ElementRef,
              private dataService: DataService,
              public router: Router
  ) {
  }

  data:any;
  ngAfterViewInit() {
    this.viewInit.emit();
  }

  ngOnInit() {
    this.dataService.getData().subscribe( data => {
      this.data = data;
    });
  }


  handleMouseOver(elements: QueryList<ElementRef>){
    elements.forEach(item => {
      this.renderer.addClass(item.nativeElement, 'building2');
    });
  }

  handleMouseLeave(elements: QueryList<ElementRef>){
    elements.forEach(item => {
      this.renderer.removeClass(item.nativeElement, 'building2');
    });
  }

  selectedBuilding: string;
  selectedData: any[];

  openModal(template: TemplateRef<any>, building: string) {
    this.selectedBuilding = building;

    if (this.selectedBuilding === 'elocsarnok') {
      const specialItems = this.data.filter(item => Number(item.id) === 101 || Number(item.id) === 102);

      this.selectedData = this.data
        .filter(item => item.building === this.selectedBuilding && Number(item.id) !== 101 && Number(item.id) !== 102);

      this.selectedData = [...specialItems, ...this.selectedData];
    } else {
      this.selectedData = this.data.filter(item => item.building === this.selectedBuilding);
    }

    console.log(this.selectedData)
    this.modalRef = this.modalService.show(template);
  }

  getFacultyDeskName(): string {
    switch (this.selectedBuilding) {
      case 'info':
        return 'Informatikai épület';
      case 'elocsarnok':
        return 'Üvegaula';
      case 'aula':
        return 'Díszaula';
      default:
        return this.selectedBuilding ? this.selectedBuilding.toUpperCase() : '';
    }
  }

}
