import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('assets/programok.json');
  }
  getEvent(id: string): Observable<any> {
    return this.getData().pipe(
      map(events => events.find(event => event.id == id))
    );
  }

}
