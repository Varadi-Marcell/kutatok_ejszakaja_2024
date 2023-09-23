import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-my-svg',
  templateUrl: './my-svg.component.html',
  styleUrls: ['./my-svg.component.css']
})
export class MySvgComponent implements AfterViewInit {

  modalRef!: BsModalRef;
  @Output() viewInit = new EventEmitter<void>();
  @ViewChild('svgEl', { static: true }) svgEl!: ElementRef;
  constructor(private modalService: BsModalService) { }

  ngAfterViewInit() {
    this.viewInit.emit();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
