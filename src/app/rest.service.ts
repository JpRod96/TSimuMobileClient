import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl: string = 'http://pruebatsimu.herokuapp.com';
  constructor(private http: HttpClient) {
  }

  async get(url:string){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + url)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async post(url:string, data:any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + url, data)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
