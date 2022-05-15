import { Component, OnInit, ViewChild } from '@angular/core';
import { Color } from 'angular-bootstrap-md';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  attendance!: any;
  attendanceData!: any;

  attending: boolean = false;
  notAttending: boolean = false;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.attendance,
        label: 'Attendance',
        backgroundColor: ['transparent'],
        borderColor: '#E4042C',
        pointBackgroundColor: '#E4042C',
        pointBorderColor: '#E4042C',
        pointHoverBackgroundColor: '#E4042C',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
        borderWidth: 1,
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

  markAttendance(status: string) {
    if (status) {
      this.attending = true;
    } else {
      this.notAttending = true;
    }
  }
  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    this.dbService.getAttendance().subscribe((attendance) => {
      this.attendanceData = attendance.data();
      this.lineChartData.datasets[0].data = this.attendanceData.data;
      this.chart?.ngOnChanges({});

      let percentage = this.attendanceData.data.reduce(
        (acc: number, num: number) => acc + num,
        0
      );
      this.attendance = Math.round(
        percentage / this.attendanceData.data.length
      );
    });
  }
}
