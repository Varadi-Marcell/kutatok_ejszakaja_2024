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

@Component({
  selector: 'app-parkolo-svg',
  templateUrl: './parkolo-svg.component.html',
  styleUrls: ['./parkolo-svg.component.css']
})
export class ParkoloSvgComponent implements AfterViewInit, OnInit {
  modalRef!: BsModalRef;
  @Output() viewInit = new EventEmitter<void>();
  @ViewChild('svgEl', {static: true}) svgEl!: ElementRef;
  selectedBuilding: string;
  selectedData: any[];
  data: any;

  @ViewChildren('GasztroPlacc') GasztroPlaccElements: QueryList<ElementRef>;

  constructor(private modalService: BsModalService,
              public renderer: Renderer2,
              private el: ElementRef,
              private dataService: DataService
  ) {
  }

  ngAfterViewInit() {
    this.viewInit.emit();
    console.log(this.svgEl);  // Ezzel ellenőrizd, hogy létezik-e a svgEl
    console.log(this.svgEl);  // Ezzel ellenőrizd, hogy létezik-e a svgEl

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
    this.selectedBuilding = building;
    this.selectedData = this.data.filter(item => item.stand === this.selectedBuilding);
    this.modalRef = this.modalService.show(template);
  }


}
