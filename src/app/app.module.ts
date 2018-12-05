import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Components */
import { AppComponent } from './app.component';
import { DimensaoComponent } from './dimensao/dimensao.component';
import { ProdutoComponent } from './produto/produto.component';

/** Services */
import { DimensaoService } from './dimensao/dimensao.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { RestricaoComponent } from './restricao/restricao.component';
@NgModule({
   declarations: [
      AppComponent,
      routingComponents,
      DimensaoComponent,
      ProdutoComponent,
      CategoriaComponent,
      RestricaoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      DimensaoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
