import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
