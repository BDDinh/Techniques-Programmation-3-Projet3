import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EvaluationEtoilesComponent } from './evaluation-etoiles/evaluation-etoiles.component';
import { FormGestionForfaitsComponent } from './form-gestion-forfaits/form-gestion-forfaits.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { ForfaitMiniCandidatPipe } from './forfait-mini-candidat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForfaitMiniComponent,
    ForfaitCompletComponent,
    EvaluationEtoilesComponent,
    FormGestionForfaitsComponent,
    FormRechercheComponent,
    ForfaitMiniCandidatPipe,
    ForfaitMiniCandidatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//  git push -u origin master