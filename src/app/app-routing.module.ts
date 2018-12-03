import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { EncomendaComponent } from './encomenda/encomenda.component';


const routes: Routes = [
  {
    path: 'encomenda', component: EncomendaComponent
  }
  
];

@NgModule({
  declarations: [
    EncomendaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }


