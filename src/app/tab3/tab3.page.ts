import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tab3',
  styleUrls: ['tab3.page.scss'],
  templateUrl: 'tab3.page.html',
})
export class Tab3Page {
  random: any = { }
  number: number
  players: string
  result: any

  constructor(private http:HttpClient) {
    this.http = http;
  }

  userAPI(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/random/${this.number}/${this.players}`);
  }

  logForm() {
    this.number = this.random.nombre ? this.random.nombre : 1
    this.players = this.random.participants
    console.log(this.number)
    console.log(this.players)
    this.userAPI().subscribe(result => this.result = result)
    console.log(this.result)
  }
}
