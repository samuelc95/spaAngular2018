import { ItemProdutoComponent } from './itemProduto.component';
import { ItemRoutingModule } from './itemProduto-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ItemProdutoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ItemRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [ItemProdutoComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
