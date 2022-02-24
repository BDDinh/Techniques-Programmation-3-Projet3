import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { StatsPartsDeMarche, StatsPrix } from '../interfaces/stats';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  statsUrl = 'http://localhost:3000/vol/stats'; // Changer ici

  constructor(private http: HttpClient) { }

  getPrixCarburant(): Observable<StatsPrix> {
    return this.http.get<StatsPrix>(this.statsUrl + "/prixCarburantParMois");
  }

  getPartsDeMarche(): Observable<StatsPartsDeMarche> {
    return this.http.get<StatsPartsDeMarche>(this.statsUrl + "/partsDeMarche");
  }
}
