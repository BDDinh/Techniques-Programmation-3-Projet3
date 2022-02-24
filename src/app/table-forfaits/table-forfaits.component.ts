import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormulaireForfaitsComponent } from '../components-utilitaires/dialog-formulaire-forfaits/dialog-formulaire-forfaits.component';
import { ForfaitService } from '../services/forfait.service';
import { Forfait } from '../interfaces/forfait';

@Component({
  selector: 'app-table-forfaits',
  templateUrl: './table-forfaits.component.html',
  styleUrls: ['./table-forfaits.component.css']
})
export class TableForfaitsComponent implements OnInit {
  forfaits: Forfait[] = [];
  selectedForfait?: Forfait;
  columnsToDisplay = ['destination', 'villeDepart', 'prix', 'actions'];

  constructor(private forfaitService: ForfaitService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }

  onDelete(forfait: Forfait): void {
    console.log("------------> onDelete forfait: " + forfait.destination)

    this.forfaitService.deleteForfait(forfait._id)
      .subscribe(result => this.forfaits = this.forfaits.filter(p => p !== forfait));
  }

  onSelect(forfait?: Forfait) {
    if (!forfait) {
      this.selectedForfait = <Forfait>{}; // {} as Forfait;
    } else { 
      this.selectedForfait = forfait;
    }
    const dialogRef = this.dialog.open(DialogFormulaireForfaitsComponent, {
      width: '1000px',
      data: this.selectedForfait,
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.selectedForfait = undefined;
      this.getForfaits();
    });
  }
}// Fin TableForfaitsComponent
