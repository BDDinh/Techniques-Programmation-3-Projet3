import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Forfait } from '../../interfaces/forfait';
import { ForfaitService } from '../../services/forfait.service';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {

  @Input() forfait: Forfait = <Forfait>{}; 
  @Output() majTableau = new EventEmitter();

  evalationNombreEtoiles:number = 0;

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.evalationNombreEtoiles = this.forfait.hotel.nombreEtoiles;
  }

  onSave(forfaitForm: NgForm) {

    
    if (forfaitForm.valid) {
      if (this.forfait.id != null && this.forfait.id != '') {
        // Si on a un id, on doit modifier le forfait
        this.forfaitService.editForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });

      } else { 
        // Sinon, on doit ajouter le forfait
        this.forfaitService.addForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });
      }
    }
  }

  onCancel() { 
    this.majTableau.emit();
  }

  updateCaracteristiques(event:any) {
    console.log("------------> updateCaracteristiques: " + event);
    this.forfait.hotel.caracteristiques = [];
    this.forfait.hotel.caracteristiques = [...event];
  }
}
