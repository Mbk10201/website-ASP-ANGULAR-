import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsgoRoutingModule } from './csgo-routing.module';
import { CsgoComponent } from './csgo.component';


@NgModule({
  declarations: [
    CsgoComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CsgoRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CsgoModule { }
