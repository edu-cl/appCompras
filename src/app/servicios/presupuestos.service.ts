import { Injectable } from '@angular/core';
//import 'rxjs/Rx';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  presupuestoService: any;

  constructor(private db: AngularFireDatabase) { }


  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.db
      .database.ref()
      .child("presupuesto").push(presupuesto);

  }
  getPresupuestos(){
    return this.db.database.ref().child("presupuesto").get();
  }

  getPresupuesto(id$:string){
    return this.db.database.ref().child("presupuesto").child(id$).get();
  }

  putPresupuesto( presupuesto: any, id$: string) { 
    const newpre = JSON.stringify(presupuesto);
    const headers = new Headers({
    'Content-Type': 'application/json'
    });
    return this.db
      .database.ref()
      .child("presupuesto").child(id$).push(presupuesto);
    
    }

    delPresupuesto(id$:string){
      return this.db.database.ref().child("presupuesto").child(id$).remove();
    }


}
