import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UsersComponent } from './users/users.component';
import { RulesComponent } from './rules/rules.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleplayRoutingModule } from './roleplay-routing.module';
import { RoleplayComponent } from './roleplay.component';
import { LottieModule } from 'ngx-lottie';
import { ObjectsComponent } from './objects/objects.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    RoleplayComponent,
    AdminComponent,
    HomeComponent,
    ProfilComponent,
    RulesComponent,
    UsersComponent,
    ObjectsComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    RoleplayRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    LottieModule,
    TuiMoneyModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,
    MatListModule,
    MatRippleModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class RoleplayModule { }
