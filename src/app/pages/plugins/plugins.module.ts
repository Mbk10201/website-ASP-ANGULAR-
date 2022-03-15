import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginsRoutingModule } from './plugins-routing.module';
import { PluginsComponent } from './plugins.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    PluginsComponent
  ],
  imports: [
    CommonModule,
    PluginsRoutingModule,
    MatCardModule,
    TuiMoneyModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class PluginsModule { }
