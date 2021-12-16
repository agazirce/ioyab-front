import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tab3',
  styleUrls: ['tab3.page.scss'],
  templateUrl: 'tab3.page.html',
})
export class Tab3Page {
  random: any = { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  constructor(private http:HttpClient) {
    this.http = http;
  }

/*  userAPI(data): Observable<any> {
    return this.http.get(`http://localhost:8080/api/random/${number}/${players}`, httpOptions)
      .pipe(
        tap((result) => console.log('result-->',result)),
        catchError(this.handleError('error', []))
      );
  }*/
  logForm() {
    let number = this.random.nombre ? this.random.nombre : 1
    let players = this.random.participants
    console.log(this.http.get(`http://localhost:8080/api/random/${number}/${players}`, this.httpOptions))
    console.log(this.random)
  }
}
