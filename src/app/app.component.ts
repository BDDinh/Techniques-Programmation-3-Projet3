import { Component } from '@angular/core';
import { ForfaitService } from './services/forfait.service';
import {Forfait} from './interfaces/forfait';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private forfaitService: ForfaitService) { }

  titre = 'Projet final';
  //forfaits: Forfait[] = [];

  ngOnInit(){
    //this.forfaits = this.forfaitService.getForfaits();
  }
}
