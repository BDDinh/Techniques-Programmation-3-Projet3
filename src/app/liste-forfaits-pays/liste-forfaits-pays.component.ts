import { Component, OnInit } from '@angular/core';
import { Forfait } from '../interfaces/forfait';
import { ForfaitService } from '../services/forfait.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-liste-forfaits-pays',
  templateUrl: './liste-forfaits-pays.component.html',
  styleUrls: ['./liste-forfaits-pays.component.css']
})
export class ListeForfaitsPaysComponent implements OnInit {
  forfaitsCiblesParPays : Forfait[] = [];
  paysCible: String = "";

  constructor(private forfaitService:ForfaitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.paysCible =String(params.get('pays'));  
      this.getForfaits(this.paysCible);
    });  
  }

  getForfaits(iPaysCible:String): void {
    this.forfaitService.getForfaits().subscribe(resultat =>  this.forfaitsCiblesParPays = resultat.filter( f => f.destination === iPaysCible));
  }
}// Fin ListeForfaitsComponent