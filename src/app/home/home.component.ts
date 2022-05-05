import { Component, OnInit, ViewChild } from '@angular/core';
import { Color } from 'angular-bootstrap-md';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [70, 65, 60, 65],
        label: 'Attendance',
        backgroundColor: ['transparent'],
        borderColor: '#E4042C',
        pointBackgroundColor: '#E4042C',
        pointBorderColor: '#E4042C',
        pointHoverBackgroundColor: '#E4042C',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0': {
        position: 'left',
        ticks: {
          maxTicksLimit: 100,
          precision: 0,
        },
      },
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
