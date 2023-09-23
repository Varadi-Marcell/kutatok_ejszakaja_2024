import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit{

   event2: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event2 = this.route.snapshot.data['event'] ;
    console.log(this.event2);
  }

}
