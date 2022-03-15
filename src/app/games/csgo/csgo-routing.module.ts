import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsgoComponent } from './csgo.component';

const routes: Routes = [
  { 
    path: '', component: CsgoComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'team', component: TeamComponent},
      { path: 'roleplay', loadChildren: () => import('./roleplay/roleplay.module').then(m => m.RoleplayModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsgoRoutingModule { }
