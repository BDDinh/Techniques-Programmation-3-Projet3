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
  forfaitsUrl = 'http://localhost:3000/forfait'; // Changer ici

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl);
    //return of(FORFAITS);
  }
  
  addForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitsUrl, forfait, httpOptions);
  }

  editForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.put<Forfait>(this.forfaitsUrl + "/" + forfait.id, forfait, httpOptions);
  }

  deleteForfait(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitsUrl + "/" +  id);
  } 
}
