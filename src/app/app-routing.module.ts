import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {EventDetailComponent} from "./components/event-detail/event-detail.component";
import {EventResolver} from "./service/event.resolver";
import {AulaComponent} from "./components/aula/aula.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'event-detail/:id',
    component: EventDetailComponent,
    resolve: {event: EventResolver}
  },
  {
    path: 'aula',
    component: AulaComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
