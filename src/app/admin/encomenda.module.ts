import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { EncomendaComponent }           from './encomenda/encomenda.component';
import { EncomendaDashboardComponent }  from './encomenda-dashboard/encomenda-dashboard.component';
import { ManageCrisesComponent }    from './manage-crises/manage-crises.component';
import { ManageHeroesComponent }    from './manage-heroes/manage-heroes.component';

import { AdminRoutingModule }       from './encomenda-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    EncomendaComponent,
    EncomendaDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ]
})
export class EncomendaModule {}
