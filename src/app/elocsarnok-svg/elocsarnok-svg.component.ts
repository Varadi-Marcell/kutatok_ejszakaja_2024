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
import { EventData } from "../model/event-data";
import { Router } from "@angular/router";

@Component({
  selector: 'app-elocsarnok-svg',
  templateUrl: './elocsarnok-svg.component.html',
  styleUrls: ['./elocsarnok-svg.component.scss']
})
export class ElocsarnokSvgComponent implements AfterViewInit, OnInit {
  modalRef!: BsModalRef;
  modalRef2!: BsModalRef;
  @Output() viewInit = new EventEmitter<void>();
  @ViewChild('svgEl', {static: true}) svgEl!: ElementRef;
  selectedFacultyDesk: string;
  selectedData: EventData[];
  data: EventData[];
  BUILDING_CONSTANS = 'elocsarnok'

  @ViewChildren('btk') btkElements: QueryList<ElementRef>;
  @ViewChildren('avk') avkElements: QueryList<ElementRef>;
  @ViewChildren('mfk') mfkElements: QueryList<ElementRef>;
  @ViewChildren('geik') geikElements: QueryList<ElementRef>;
  @ViewChildren('ajk') ajkElements: QueryList<ElementRef>;
  @ViewChildren('etk') etkElements: QueryList<ElementRef>;
  @ViewChildren('dixit') dixitElements: QueryList<ElementRef>;
  @ViewChildren('formula') formulaElements: QueryList<ElementRef>;
  @ViewChildren('anthro') anthroElements: QueryList<ElementRef>;
  @ViewChildren('polimer') polimerElements: QueryList<ElementRef>;
  @ViewChildren('asvany') asvanyElements: QueryList<ElementRef>;
  @ViewChildren('arany') aranyElements: QueryList<ElementRef>;
  @ViewChildren('madar') madarElements: QueryList<ElementRef>;
  @ViewChildren('toborzo') toborzoElements: QueryList<ElementRef>;
  @ViewChildren('erasmus') erasmusElements: QueryList<ElementRef>;
  @ViewChildren('orient') orientElements: QueryList<ElementRef>;
  @ViewChildren('festes') festesElements: QueryList<ElementRef>;
  @ViewChildren('levego') levegoElements: QueryList<ElementRef>;
  @ViewChildren('vizgep') vizgepElements: QueryList<ElementRef>;
  @ViewChildren('erme') ermeElements: QueryList<ElementRef>;
  @ViewChildren('Minoria') MinoriaElements: QueryList<ElementRef>;
  @ViewChildren('MESport') MESportElements: QueryList<ElementRef>;
  @ViewChildren('iok') iokElements: QueryList<ElementRef>;
  @ViewChildren('mol') molElements: QueryList<ElementRef>;
  @ViewChildren('bosch') boschElements: QueryList<ElementRef>;
  @ViewChildren('gtk') gtkElements: QueryList<ElementRef>;
  @ViewChildren('GasztroPlacc') GasztroPlaccElements: QueryList<ElementRef>;
  @ViewChildren('civil') civilElements: QueryList<ElementRef>;
  @ViewChildren('larina') larinaElements: QueryList<ElementRef>;
  @ViewChildren('konf') konfElements: QueryList<ElementRef>;

  constructor(private modalService: BsModalService,private modalService2: BsModalService,
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

    this.selectedData =
      this.selectedData = this.data
        .filter(item => item.faculty === this.selectedFacultyDesk)
        .sort((a, b) => (a.building === this.BUILDING_CONSTANS ? -1 : 1));
    this.modalRef = this.modalService.show(template);
  }

}

