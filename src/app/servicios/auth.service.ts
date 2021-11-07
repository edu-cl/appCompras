import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth:AngularFireAuth) { }

  async register(email:string,password:string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email,password);
      
    } catch (error) {
      console.log("error login: " ,error);
      return null;
    }

  }
 
  async login(email:string,password:string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email,password);
      
    } catch (error) {
      console.log("error login: " ,error);
      return null;
    }

  }

  async loginWitgGoogle(email:string,password:string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      
    } catch (error) {
      console.log("error en login con Google: " ,error);
      return null;
    }

  }

  GetUserLogged(){
    return this.afauth.authState;
  }

  logout(){
    this.afauth.signOut();
  }


}
