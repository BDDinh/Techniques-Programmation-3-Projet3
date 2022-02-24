import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  /* 
  public radarChartLabels: Label[] = ['Air France', 'Air Canada', 'Lufthansa', 'Swiss Air', 'British Airways', 'American Airlines', 'Delta Air Lines'];
  public radarChartData: ChartDataSets[] = [ { data: [0, 1, 2, 3, 4, 5, 6], label: 'Parts de marché' } ];
  */

  radarChartLabels: Label[] = [];
  radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';
  constructor(private statsService:StatsService) { }

  ngOnInit(): void {
    this.statsService.getPartsDeMarche().subscribe(resultat => { 
      this.radarChartLabels = resultat.radarChartLabels;
      this.radarChartData = resultat.radarChartData;
    });
  }
}
