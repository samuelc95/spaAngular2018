import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

/** Components */
import { AppComponent } from './app.component';
import { DimensaoComponent } from './dimensao/dimensao.component';
import { ProdutoComponent } from './produto/produto.component';

/** Services */
import { DimensaoService } from './dimensao/dimensao.service';
@NgModule({
   declarations: [
      AppComponent,
      routingComponents,
      DimensaoComponent,
      ProdutoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [DimensaoService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
