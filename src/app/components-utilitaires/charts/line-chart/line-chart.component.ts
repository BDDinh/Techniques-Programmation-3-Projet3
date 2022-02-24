import { Component, OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { StatsService } from 'src/app/services/stats.service';
import { StatsPrix } from '../../../interfaces/stats';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  /*
  lineChartData: ChartDataSets[] = [{ data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },];
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June']; 
  */

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = []; 
  lineChartOptions = {responsive: true,};
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  constructor(private statsService:StatsService) { }

  ngOnInit(): void {
    this.statsService.getPrixCarburant().subscribe(resultat => { 
      this.lineChartData = resultat.lineChartData;
      this.lineChartLabels = resultat.lineChartLabels;
    });
  }
  
}