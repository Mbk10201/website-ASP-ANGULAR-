import { ChangeDetectionStrategy, Component, OnInit, Inject } from '@angular/core';
import { RoleplayService } from './../../../../services/roleplay.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  pie_labels: string[] = [];
  pie_data: number[] = [];
  pie_bg: string[] = [];

  constructor(public roleplay: RoleplayService) {
    for (let i in this.roleplay.jobdata) {
      this.pie_labels.push(this.roleplay.jobdata[i].jobname);
      this.pie_data.push(this.roleplay.jobdata[i].capital);
      this.pie_bg.push(this.roleplay.GenerateRGB());
    }
  }

  ngOnInit(): void {

    this.LoadCharts();
    this.LoadJobs();
  }

  LoadJobs(): void {
    this.roleplay.GetJobs().subscribe((data: any) => {
      this.roleplay.jobdata = data;
    });
  }

  LoadCharts(): void {
    var pie = new Chart('ChartPie', {
      type: 'pie',
      data: {
        labels: this.pie_labels,
        datasets: [{
          label: 'My First Dataset',
          data: this.pie_data,
          backgroundColor: this.pie_bg,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  Detection(): boolean {
    console.log('Detection');
    return true;
  }
}