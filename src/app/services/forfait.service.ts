import { Injectable } from '@angular/core';
import {Forfait} from '../interfaces/forfait';
import { FORFAITS } from '../mock-forfaits';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  constructor() { }

  getForfaits(): Forfait[] {
    const forfaits = FORFAITS;
    return forfaits;
  }
}
