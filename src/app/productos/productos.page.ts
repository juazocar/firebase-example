import { Component, OnInit } from '@angular/core';
import { WebpayApiService } from '../api/webpay-api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private webpay: WebpayApiService) { }

  ngOnInit() {
  }


  crearTransaccion(){
    var payload = "{\"buy_order\": \"ordenCompra12345678\", \"session_id\": \"sesion1234557545\", \"amount\": 10000, \"return_url\": \"http://www.comercio.cl/webpay/retorno\"}";

    this.webpay.initTransaction("").subscribe((res) => {   
      console.log(res);
   }, (error)=>{
     console.log(error);
   });
  }


}
