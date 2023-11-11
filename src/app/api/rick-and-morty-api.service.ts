import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {

  apiUrl = "https://rickandmortyapi.com/api";

  constructor(private http: HttpClient) { }

  getPersonajes(){
    return this.http.get(this.apiUrl+'/character');
  }
}
