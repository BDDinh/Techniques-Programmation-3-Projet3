import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Forfait } from '../interfaces/forfait';
import { FORFAITS } from '../mocks/mock-forfaits';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  forfaitsUrl = 'http://localhost/exemple-api-forfaits/api/'; // Changer ici

  constructor(private http: HttpClient) { }
  //constructor() { }

  getForfaits(): Observable<Forfait[]> {
    const forfaits = FORFAITS;
    return of(FORFAITS);
  }
  
  addForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitsUrl, forfait, httpOptions);
  }

  editForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.put<Forfait>(this.forfaitsUrl + "?id=" + forfait.id, forfait, httpOptions);
  }

  deleteForfait(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitsUrl + "?id=" +  id);
  } 
}
