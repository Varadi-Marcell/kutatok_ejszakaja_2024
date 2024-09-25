import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {EventDetailComponent} from "./components/event-detail/event-detail.component";
import {EventResolver} from "./service/event.resolver";
import {AulaComponent} from "./components/aula/aula.component";
import {ParkoloComponent} from "./parkolo/parkolo.component";
import {A4Component} from "./a4/a4.component";
import {ElocsarnokComponent} from "./elocsarnok/elocsarnok.component";

const routes: Routes = [
  {
    path: '',
    component: ElocsarnokComponent
  },
  {
    path: 'aula',
    component: AulaComponent,
  },
  {
    path: 'a4',
    component: A4Component,
  },
  {
    path: 'elocsarnok',
    component: ElocsarnokComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
