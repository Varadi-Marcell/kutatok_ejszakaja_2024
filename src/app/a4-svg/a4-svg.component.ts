import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output, QueryList, Renderer2, TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {DataService} from "../service/data.service";
import { Router } from "@angular/router";
import { EventData } from "../model/event-data";

@Component({
  selector: 'app-a4-svg',
  templateUrl: './a4-svg.component.html',
  styleUrls: ['./a4-svg.component.css']
})
export class A4SvgComponent implements AfterViewInit, OnInit {
  modalRef!: BsModalRef;
  @Output() viewInit = new EventEmitter<void>();
  @ViewChild('svgEl', {static: true}) svgEl!: ElementRef;
  selectedFacultyDesk: string;
  selectedData: any[];
  data: EventData[];

  @ViewChildren('GasztroPlacc') GasztroPlaccElements: QueryList<ElementRef>;
  @ViewChildren('mol') molElements: QueryList<ElementRef>;
  @ViewChildren('bosch') boschElements: QueryList<ElementRef>;
  @ViewChildren('gtk') gtkElements: QueryList<ElementRef>;
  @ViewChildren('mfk') mfkElements: QueryList<ElementRef>;
  @ViewChildren('avk') avkElements: QueryList<ElementRef>;
  BUILDING_CONSTANS = 'a4';

  constructor(private modalService: BsModalService,
              public renderer: Renderer2,
              private el: ElementRef,
              public router: Router,
              private dataService: DataService
  ) {
  }

  ngAfterViewInit() {
    this.viewInit.emit();
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

  handleMouseLeave(elements: QueryList<ElementRef>) {
    elements.forEach(item => {
      this.renderer.removeClass(item.nativeElement, 'building2');
    });
  }

  handleMouseOver(elements: QueryList<ElementRef>) {
    elements.forEach(item => {
      this.renderer.addClass(item.nativeElement, 'building2');
    });
  }

  openModal(template: TemplateRef<any>, building: string) {
    this.selectedFacultyDesk = building;
    this.selectedData = this.data
      .filter(item => item.faculty === this.selectedFacultyDesk)
      .sort((a, b) => (a.building === this.BUILDING_CONSTANS ? -1 : 1));

    this.modalRef = this.modalService.show(template);
  }


}
