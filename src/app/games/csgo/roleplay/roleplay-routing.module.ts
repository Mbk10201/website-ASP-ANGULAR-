import { RoleguardService } from './../../../services/roleguard.service';
import { ItemsComponent } from './items/items.component';
import { ObjectsComponent } from './objects/objects.component';
import { UsersComponent } from './users/users.component';
import { RulesComponent } from './rules/rules.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleplayComponent } from './roleplay.component';

const routes: Routes = [
  { 
    path: '', component: RoleplayComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'admin', component: AdminComponent, canActivate:[RoleguardService],},
      { path: 'profil', component: ProfilComponent},
      { path: 'rules', component: RulesComponent},
      { path: 'users', component: UsersComponent},
      { path: 'objects', component: ObjectsComponent},
      { path: 'items', component: ItemsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleplayRoutingModule { }
