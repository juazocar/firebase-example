import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  apiUrl = 'http://localhost:8282';

  
  httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }) 
   }

  constructor(private http: HttpClient) { }

  login(post:string){
    return this.http.post(this.apiUrl+'/usuario-db/login', post, this.httpOptions);
  }
}
