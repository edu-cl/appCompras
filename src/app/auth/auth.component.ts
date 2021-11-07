import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  usuario={
    email:"",
    password:""
  }
  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
    
  }

  Ingresar(){
    console.log(this.usuario);
    const{email,password}=this.usuario;

    this.authService.login(email,password).then(res => {
      console.log("Se registro: ",res);
    })
  }

  Registrar(){
    console.log(this.usuario);
    const{email,password}=this.usuario;

    this.authService.register(email,password).then(res => {
      console.log("Se registro: ",res);
    })
  }

  IngresarConGoogle(){
    console.log(this.usuario);
    const{email,password}=this.usuario;

    this.authService.loginWitgGoogle(email,password).then(res => {
      console.log("Se registro: ",res);
    })

  }

  obtenerUsuarioLogeado(){
    this.authService.GetUserLogged().subscribe(res=>{
      console.log(res?.email);
    });

  }

  logout(){
     this.authService.logout();
  }

}
