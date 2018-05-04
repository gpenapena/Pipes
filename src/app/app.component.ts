import { Component } from '@angular/core';
import { promise } from 'protractor';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre = 'gonzalo';
  public arreglo=[1,2,3,4,5,6,7,8,9,10];
  public PI = Math.PI;
  public a = 0.234;
  public salario = 1234.5;
  public persona={
    nombre: 'gonzalo',
    apellido: 'peña',
    direccion:{
      ciudad: 'chillan',
      calle: 'san cristobal'
    }
  };
  public promesa = new Promise((resolve, reject)=>{
    setTimeout(() => resolve('llego la data'), 3500 );
  }
  );
  public fecha = new Date();
  public nombre2 = "gonzalo andres peña gutierrez";  
}
