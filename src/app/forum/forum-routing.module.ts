import { TopicComponent } from './topic/topic.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum.component';

const routes: Routes = [
  { 
    path: '', component: ForumComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'topic', component: TopicComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
