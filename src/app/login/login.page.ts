import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async signUp(){
      const userCredentials = await this.authService.signUp(this.user.email, this.user.password).then((user) => {
      console.log('Usuario registrado', userCredentials);
    }).catch((error) =>{
      console.log('Error en el registro', error);
    });
  }

  async signIn(){
        const userCredentials = await this.authService.signIn(this.user.email, this.user.password).then((user) => {
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
