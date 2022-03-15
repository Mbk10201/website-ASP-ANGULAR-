import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  declarations: [
    ForumComponent,
    HomeComponent,
    CategoryComponent,
    TopicComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class ForumModule { }
