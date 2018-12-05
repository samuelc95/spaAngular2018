import { RestricaoComponent } from './restricao/restricao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { EncomendaComponent } from './encomenda/encomenda.component';
import {DimensaoComponent} from './dimensao/dimensao.component';

const routes: Routes = [
  {path: 'produto', component: ProdutoComponent},
  {path: 'encomenda', component: EncomendaComponent},
  {path: 'dimensao', component: DimensaoComponent},
  {path: 'restricao', component: RestricaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProdutoComponent, EncomendaComponent, DimensaoComponent, RestricaoComponent];
