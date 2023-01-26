import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  @ViewChild('myForm') myForm!: NgForm;

  notValid(campo: string): boolean {
    return this.myForm?.controls[campo]?.invalid &&
           this.myForm?.controls[campo]?.touched
  }

  save() {
    console.log('formulario posteado');
  }


}
