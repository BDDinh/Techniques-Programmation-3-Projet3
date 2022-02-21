import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ForfaitService } from './services/forfait.service';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { EnteteComponent } from './entete/entete.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EvaluationEtoilesComponent } from './evaluation-etoiles/evaluation-etoiles.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { ForfaitMiniCandidatPipe } from './forfait-mini-candidat.pipe';

import { DialogFormulaireForfaitsComponent } from './dialog-formulaire-forfaits/dialog-formulaire-forfaits.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { AProposComponent } from './a-propos/a-propos.component';


@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedPageComponent,
    ForfaitMiniComponent,
    ForfaitCompletComponent,
    EvaluationEtoilesComponent,
    FormRechercheComponent,
    ForfaitMiniCandidatPipe,
    ForfaitMiniCandidatPipe,
    DialogFormulaireForfaitsComponent,
    TableForfaitsComponent,
    LienDetailsComponent,
    FormulaireForfaitComponent,
    ListeForfaitsComponent,
    AProposComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//  git push -u origin master