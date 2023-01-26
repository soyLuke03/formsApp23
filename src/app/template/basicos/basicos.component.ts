import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    producto: "Tomates",
    precio: 2.50,
    existencias: 1

  }
  constructor() { }

  ngOnInit(): void {

  }

  notValid(campo: string): boolean{
    return this.myForm?.controls[campo]?.invalid &&
      this.myForm?.controls[campo]?.touched
  }

  
  save() {
    
    // this.myForm.resetForm() Vacía todos los campos del formulario
    this.myForm.resetForm({
      producto: "Patatas",
      precio: 100,
      existencias: 24
    })

  }

}
