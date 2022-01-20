import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface IGroup {
  name: string;
  type: string;
  img: string;
  members: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  url = 'http://localhost:4100/api';

  constructor(private http: HttpClient) {}

  getAllGroups(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(this.url + '/group');
  }

  add(group: any): Observable<any> {
    return this.http.post<any>(this.url + '/group', group);
  }
}
