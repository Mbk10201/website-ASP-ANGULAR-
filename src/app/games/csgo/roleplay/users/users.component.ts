import { LoaderService } from './../../../../loader/loader.service';
import { RoleplayService } from './../../../../services/roleplay.service';
import { UserService } from './../../../../services/user.service';
import { AuthService } from './../../../../services/auth.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users: any = [];
  objectKeys = Object.keys;

  bar_labels: string[] = [];
  bar_data: number[] = [];
  bar_bg: string[] = [];

  constructor(
    public roleplay: RoleplayService, 
    private route: ActivatedRoute, 
    private router: Router, 
    public authService: AuthService, 
    public user: UserService, 
    private dialog: MatDialog,
    public Loader: LoaderService) 
  {
    this.roleplay.GetUsers().subscribe((res) => {
      this.users = res;
      console.log(this.users[0].name);
    });

    for (let i in this.users) {
      this.bar_labels.push(this.users[i].name);
      this.bar_data.push((this.users[i].money + this.users[i].bank));
      this.bar_bg.push(this.roleplay.GenerateRGB());
    }
  }

  ngOnInit(): void {
    this.LoadCharts();
  }

  LoadCharts(): void {
    var chartbar = new Chart('ChartBar', {
      type: 'bar',
      data: {
        labels: this.bar_labels,
        datasets: [{
          label: 'Top 10 des plus riches',
          data: this.bar_data,
          backgroundColor: this.bar_bg,
          borderColor: this.bar_bg,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  GetJob(jobid: number, gradeid: number): string {
    return "ERROR";
  }
}
