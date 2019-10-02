import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl: string = 'http://pruebatsimu.herokuapp.com';
  private EVENTS_URL: string = "/events";
  private EVENT_URL: string = "/event";
  constructor(public http: HttpClient) {
  }

  async getEvents(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.EVENTS_URL)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
