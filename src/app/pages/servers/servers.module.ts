import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';
import { MatDivider } from '@angular/material/divider';


@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    ServersRoutingModule,
    MatTabsModule,
    MatDivider,
  ]
})
export class ServersModule { }
