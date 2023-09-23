import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {

  @Input()
  data:any;
  modalRef!: BsModalRef;
  @Output() close: EventEmitter<void> = new EventEmitter();

  onClose() {
    this.close.emit();
  }
}
