import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EvaluationEtoilesComponent } from './evaluation-etoiles/evaluation-etoiles.component';
import { FormGestionForfaitsComponent } from './form-gestion-forfaits/form-gestion-forfaits.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { ForfaitMiniCandidatPipe } from './forfait-mini-candidat.pipe';

import { DialogFormulaireForfaitsComponent } from './dialog-formulaire-forfaits/dialog-formulaire-forfaits.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { NomDescriptionComponent } from './nom-description/nom-description.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';




@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ForfaitMiniComponent,
    ForfaitCompletComponent,
    EvaluationEtoilesComponent,
    FormGestionForfaitsComponent,
    FormRechercheComponent,
    ForfaitMiniCandidatPipe,
    ForfaitMiniCandidatPipe,
    DialogFormulaireForfaitsComponent,
    TableForfaitsComponent,
    LienDetailsComponent,
    NomDescriptionComponent,
    FormulaireForfaitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//  git push -u origin master