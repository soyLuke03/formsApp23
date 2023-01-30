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
    precio: 2.3,
    existencias: 98
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  notValid(campo: string): boolean{
    return this.myForm?.controls[campo]?.invalid &&
      this.myForm?.controls[campo]?.touched
  }

  notLessThan0(campo:string): boolean{
    return this.myForm?.controls[campo]?.value < 0 &&
    this.myForm?.controls[campo]?.touched
  }

  save() {
    
    this.myForm.resetForm({
      producto: "Nada",
      precio: 0,
      existencias: 0
    })
  }

}
