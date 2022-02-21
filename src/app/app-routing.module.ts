import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
//import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';

const routes: Routes = [
  { path: 'liste-forfaits', component: ListeForfaitsComponent },
  { path: 'a-propos', component: AProposComponent },
];
//{ path: 'administration', component: TableForfaitsComponent },
  
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
