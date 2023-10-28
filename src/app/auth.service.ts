import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async signUp(email:string, password:string): Promise<firebase.auth.UserCredential>{
    try{
        const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
        return result;
    }catch(error){
      throw error;
    }
  }

  async signIn(email:string, password:string): Promise<firebase.auth.UserCredential>{
    try{
        const result = await this.afAuth.signInWithEmailAndPassword(email, password);
        return result;
    }catch(error){
      throw error;
    }
  }

  async signOut(): Promise<void>{
    await this.afAuth.signOut();
  }

  async getUser(): Promise<firebase.User | null> {
    return this.afAuth.currentUser;
  }
}
