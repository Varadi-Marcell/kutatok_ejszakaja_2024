import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";
import { EventData } from "../../model/event-data";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {

  constructor(private modalService: BsModalService,
              public router: Router
  ) {
  }
  @Input()
  data: EventData[];
  modalRef!: BsModalRef;
  @Output() close: EventEmitter<void> = new EventEmitter();
  showImage: any;

  onClose() {
    this.close.emit();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
