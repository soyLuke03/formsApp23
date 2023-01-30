import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  genero: string;
  notificaciones: boolean
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  {
  @ViewChild("miFormulario") myForm!: NgForm;

  terminosYCondiciones:boolean = false;
  persona:Persona = {
    genero: "",
    notificaciones: false
  }



  save() {
    console.log(this.myForm.controls)
    this.myForm.resetForm()
  }




}
