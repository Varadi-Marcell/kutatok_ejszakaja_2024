import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MySvgComponent } from './my-svg/my-svg.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { IndexSvgComponent } from './components/index-svg/index-svg.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { AulaSvgComponent } from './components/aula-svg/aula-svg.component';
import { AulaComponent } from './components/aula/aula.component';
import { ElocsarnokComponent } from './elocsarnok/elocsarnok.component';
import { ElocsarnokSvgComponent } from './elocsarnok-svg/elocsarnok-svg.component';
import { A4Component } from './a4/a4.component';
import { A4SvgComponent } from './a4-svg/a4-svg.component';
import { ParkoloComponent } from './parkolo/parkolo.component';
import { ParkoloSvgComponent } from './parkolo-svg/parkolo-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    MySvgComponent,
    ActivityComponent,
    IndexComponent,
    IndexSvgComponent,
    EventDetailComponent,
    EventCardComponent,
    AulaSvgComponent,
    AulaComponent,
    ElocsarnokComponent,
    ElocsarnokSvgComponent,
    A4Component,
    A4SvgComponent,
    ParkoloComponent,
    ParkoloSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageZoomModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
