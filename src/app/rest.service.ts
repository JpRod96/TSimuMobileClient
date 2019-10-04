import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl: string = 'http://pruebatsimu.herokuapp.com';//'http://10.0.0.5:4567'
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
    let headers:HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'undefined' );
    return new Promise(resolve => {
      this.http.post(this.apiUrl + url, JSON.stringify(data))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
