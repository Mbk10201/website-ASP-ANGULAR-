import { TestComponent } from './test/test.component';
import { Http404Component } from './pages/http404/http404.component';
import { ShopconfigComponent } from './admin/shopconfig/shopconfig.component';
import { RoleguardService } from './services/roleguard.service';
import { ShopHomeComponent } from './pages/shop/shop-home/shop-home.component';
import { ShopDashboardComponent } from './pages/shop/shop-dashboard/shop-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfilComponent } from './user/profil/profil.component';
import { AuthGuardService } from './services/authguard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './admin/homepage/homepage.component';
import { NewsComponent } from './admin/news/news.component';
import { PatchnotesComponent } from './admin/patchnotes/patchnotes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confirm', component: HomeComponent },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'server', loadChildren: () => import('./pages/servers/servers.module').then(m => m.ServersModule) },
  { path: 'plugins', loadChildren: () => import('./pages/plugins/plugins.module').then(m => m.PluginsModule) },
  { path: 'csgo', loadChildren: () => import('./games/csgo/csgo.module').then(m => m.CsgoModule) },
  { path: 'forum', loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule) },
  { path: 'profil', component: ProfilComponent, canActivate:[AuthGuardService]},
  { path: 'admin', component: DashboardComponent, canActivate:[RoleguardService],
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full'  },
      { path: 'news', component: NewsComponent},
      { path: 'patch', component: PatchnotesComponent},
      { path: 'shop', component: ShopconfigComponent},
    ]
  },
  { path: 'shop', component: ShopDashboardComponent, canActivate:[AuthGuardService],
    children: [
      { path: '', component: ShopHomeComponent, pathMatch: 'full'  },
    ]
  },
  { path: 'test', component: TestComponent},
  { path: '**', component: Http404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }