import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../interfaces/forfait';
import * as moment from 'moment';

@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.css']
})

export class ForfaitMiniComponent implements OnInit {

  @Input() forfaitCible: Forfait = {} as Forfait;
  duree: number = 0;
  evalationNombreEtoiles: number = 0;

  getDuree(iForfait: Forfait) {
    let start = moment(iForfait.dateDepart, "YYYY-MM-DD");
    let end = moment(iForfait.dateRetour, "YYYY-MM-DD");
  
    //Calcul nombre de jours entre deux dates
    return end.diff(start, 'days');
  }

  constructor() { }

  ngOnInit(): void {
    this.duree = this.getDuree( this.forfaitCible );
    this.evalationNombreEtoiles = this.forfaitCible.hotel.nombreEtoiles;
  }

}
