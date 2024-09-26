import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ME-Kutatók_Éjszakája';

  isMobile: boolean = false;

  constructor() {
    this.isMobile = window.innerWidth <= 600;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 600;
  }

}
