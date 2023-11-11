import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthApiService } from '../api/auth-api.service';
import { RickAndMortyApiService } from '../api/rick-and-morty-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    username: "",
    password: ""
  }

  constructor(private authService: AuthService, private apiAuth: AuthApiService, private rickMorty: RickAndMortyApiService) { }

  ngOnInit() {
  }

  login(){
    //JSON.stringify(this.noticia)
    console.log(this.user);
    console.log(JSON.stringify(this.user))
    this.apiAuth.login(JSON.stringify(this.user)).subscribe((res) => {
      
      var json = JSON.stringify(res);
      var jsonparsed = JSON.parse(json);
      var id = jsonparsed.id;

      if(id != '-1'){
        console.log("Usuario autenticado");
      }else{
        console.log("Error al encontrar los datos");
      }
      
   }, (error)=>{
     console.log('Error en el inicio de sesión ', error);
   });
  } 

  obtenerPersonajes(){
    this.rickMorty.getPersonajes().subscribe((res) => {
       console.log(res)
    }, (error)=>{
      console.log('Error ', error);
    });
  }



  async signUp(){
      const userCredentials = await this.authService.signUp(this.user.username, this.user.password).then((user) => {
      console.log('Usuario registrado', userCredentials);
    }).catch((error) =>{
      console.log('Error en el registro', error);
    });
  }

  async signIn(){
        const userCredentials = await this.authService.signIn(this.user.username, this.user.password).then((user) => {
          console.log('Inicio de sesión exitoso ', userCredentials);
        }).catch((error) =>{
          console.log('Error en el inicio de sesión ', error);
          });
  }

  async signOut(){
    try{
      await this.authService.signOut();
    }catch(error) {
      console.log('Error al cerrar sesión ', error);
      }
    
  }
}
