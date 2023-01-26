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

  constructor() { }

  ngOnInit(): void {
  }

  notValidName(): boolean{
    return this.myForm?.controls['producto']?.invalid &&
      this.myForm?.controls['producto']?.touched
  }
  save(myForm: NgForm) {
    console.log(myForm);

  }

}
