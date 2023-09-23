import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<any> {
  constructor(private service: DataService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // return this.service.getEvent((route.params['id']));

    let id = route.paramMap.get('id');
    return this.service.getEvent(id);
  }
}
