import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './components-pages/a-propos/a-propos.component';
import { ListeForfaitsPaysComponent } from './components-pages/liste-forfaits-pays/liste-forfaits-pays.component';
import { ListeForfaitsComponent } from './components-pages/liste-forfaits/liste-forfaits.component';
import { TableForfaitsComponent } from './components-pages/table-forfaits/table-forfaits.component';

const routes: Routes = [
  { path: 'liste-forfaits', component: ListeForfaitsComponent },
  { path: 'liste-forfaits/:pays', component: ListeForfaitsPaysComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'administration', component: TableForfaitsComponent },
];
  
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
