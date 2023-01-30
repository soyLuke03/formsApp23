import { Component, OnInit, ViewChild } from '@angular/core';
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
export class DinamicosComponent implements OnInit{
  
  newFavorite:string = "";
  idGenerator:number = 2;

  persona: Persona = {
    nombre: 'Manuel',
    favoritos: [
      {id:1,nombre:"Star Wars"},
      {id:2,nombre:"El señor de los ajillos"}
    ]
  }
 
  ngOnInit(): void {
    
  }


  @ViewChild("myForm") myForm!: NgForm;

  notValidName(): boolean{
    return this.myForm?.controls['nombre']?.invalid &&
      this.myForm?.controls['nombre']?.touched
  }

  save() {
    console.log(this.myForm.controls)
    this.myForm.resetForm()
  }
  
  delete(id:number){
    this.persona.favoritos.splice(id,1);
  }

  add(cadena:string){
    if(cadena.trim()!=""){
      this.persona.favoritos.unshift({
        id: this.idGenerator++,
        nombre: cadena.trim()
      });
      this.newFavorite="";
    }
  }
}
