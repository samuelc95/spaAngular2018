import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EncomendaComponent }           from './encomenda/encomenda.component';
import { EncomendaDashboardComponent }  from './encomenda-dashboard/encomenda-dashboard.component';
import { ManageCrisesComponent }    from './manage-crises/manage-crises.component';
import { ManageHeroesComponent }    from './manage-heroes/manage-heroes.component';

import { AuthGuard }                from '../auth/auth.guard';

const encomendaRoutes: Routes = [
  {
    path: '',
    component: EncomendaComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: EncomendaDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(encomendaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
