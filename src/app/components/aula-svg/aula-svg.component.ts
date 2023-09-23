import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter, OnInit,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-aula-svg',
  templateUrl: './aula-svg.component.html',
  styleUrls: ['./aula-svg.component.css']
})
export class AulaSvgComponent implements AfterViewInit, OnInit{
  modalRef!: BsModalRef;
  @Output() viewInit = new EventEmitter<void>();
  @ViewChild('svgEl', {static: true}) svgEl!: ElementRef;

  constructor(private modalService: BsModalService,
              public renderer: Renderer2,
              private el: ElementRef,
              private dataService: DataService
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

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  selectedBuilding: string;
  selectedData: any[];

  openModal(template: TemplateRef<any>, building: string) {
    this.selectedBuilding = building;
    this.selectedData = this.data.filter(item => item.epulet === this.selectedBuilding);
    this.modalRef = this.modalService.show(template);
  }

}
