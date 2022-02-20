import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Forfait} from '../interfaces/forfait';
import { FORFAITS } from '../mock-forfaits';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  // produitsUrl = 'http://localhost/exemple-api-produits/api/'; // Changer ici

  constructor() { }

/*   
  getForfaits(): Forfait[] {
    const forfaits = FORFAITS;
    //return forfaits;
  }
 */

  getForfaits(): Observable<Forfait[]> {
    const forfaits = FORFAITS;
    return of(FORFAITS);
  }
  /*
  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.produitsUrl, produit, httpOptions);
  }

  editProduit(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.produitsUrl + "?id=" + produit.id, produit, httpOptions);
  }

  deleteProduit(id: string): Observable<Produit> {
    return this.http.delete<Produit>(this.produitsUrl + "?id=" +  id);
  }
  */
}
