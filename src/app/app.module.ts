import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ForfaitService } from './services/forfait.service';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';


import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiedPageComponent } from './components-pages/pied-page/pied-page.component';
import { EnteteComponent } from './components-pages/entete/entete.component';
import { ForfaitMiniComponent } from './components-utilitaires/forfait-mini/forfait-mini.component';
import { ForfaitCompletComponent } from './components-utilitaires/forfait-complet/forfait-complet.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EvaluationEtoilesComponent } from './components-utilitaires/evaluation-etoiles/evaluation-etoiles.component';
import { ForfaitMiniCandidatPipe } from './forfait-mini-candidat.pipe';

import { DialogFormulaireForfaitsComponent } from './components-utilitaires/dialog-formulaire-forfaits/dialog-formulaire-forfaits.component';
import { TableForfaitsComponent } from './components-pages//table-forfaits/table-forfaits.component';
import { LienDetailsComponent } from './components-utilitaires/lien-details/lien-details.component';
import { FormulaireForfaitComponent } from './components-utilitaires/formulaire-forfait/formulaire-forfait.component';
import { ListeForfaitsComponent } from './components-pages/liste-forfaits/liste-forfaits.component';
import { AProposComponent } from './components-pages/a-propos/a-propos.component';
import { ListeForfaitsPaysComponent } from './components-pages//liste-forfaits-pays/liste-forfaits-pays.component';
import { LineChartComponent } from './components-utilitaires/charts/line-chart/line-chart.component';
import { RadarChartComponent } from './components-utilitaires/charts/radar-chart/radar-chart.component';
import { ChipInputComponent } from './components-utilitaires/chip-input/chip-input.component';


@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedPageComponent,
    ForfaitMiniComponent,
    ForfaitCompletComponent,
    EvaluationEtoilesComponent,
    ForfaitMiniCandidatPipe,
    ForfaitMiniCandidatPipe,
    DialogFormulaireForfaitsComponent,
    TableForfaitsComponent,
    LienDetailsComponent,
    FormulaireForfaitComponent,
    ListeForfaitsComponent,
    AProposComponent,
    ListeForfaitsPaysComponent,
    LineChartComponent,
    RadarChartComponent,
    ChipInputComponent,
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
    MatChipsModule,
    ChartsModule,
    MatIconModule,
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//  git push -u origin master