import { ItemProdutoComponent } from './itemProduto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'encomenda', redirectTo: '/encomenda', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ItemProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class ItemRoutingModule { }


