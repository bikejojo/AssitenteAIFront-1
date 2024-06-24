import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';
import { TicketsDetailPageComponent } from './pages/tickets-detail-page/tickets-detail-page.component';
import { EmpresaPageComponent } from './pages/empresa-page/empresa-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'tickets',
    children: [
      { path: '', component: TicketsPageComponent },
      { path: ':ticket_id', component: TicketsDetailPageComponent }
    ]
  },
  { path: 'empresas', component: EmpresaPageComponent }
  /* {
    path: 'internal',
    canActivate: [],
    children: [
      { path: 'result', component: ResultComponent },
      { path: 'institution', component: InstitutionComponent },
      { path: 'admin', component: MenuAdministrationComponent },
      { path: 'admin-history', component: AdmHistoryComponent },
      { path: 'admin-profile', component: AdmProfileComponent },
      { path: 'admin-report', component: AdmEvolutionaryReportComponent },
    ]
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
