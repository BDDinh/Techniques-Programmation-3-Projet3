import { Component, OnInit } from '@angular/core';
import { Forfait } from '../interfaces/forfait';
import { ForfaitService } from '../services/forfait.service';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['../shared/shared-styles.css','./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  titre = 'Liste produits';
  forfaits : Forfait[] = [];

  constructor(private forfaitService:ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
}
