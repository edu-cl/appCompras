import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  mensaje:string="";
  proveedores:any;
  
  constructor(private proveedoresSerice:ProveedoresService){

  }

  ngOnInit(): void {
    this.mensaje=this.proveedoresSerice.getProveedores();
    this.proveedores=this.proveedoresSerice.getProveedores();
  }
  
  

}
