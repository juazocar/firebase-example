import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebpayApiService {

  apiUrl = 'https://webpay3gint.transbank.cl';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'application/json',
      'Tbk-Api-Key-Secret':'579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
      'Tbk-Api-Key-Id':'597055555532',
      'Access-Control-Allow-Origin':'*'
    }) 
   }
   
   
  constructor(private http: HttpClient) { }

  initTransaction(post:string){
    return this.http.post(this.apiUrl+'/rswebpaytransaction/api/webpay/v1.2/transactions', post, this.httpOptions);
  }

}
