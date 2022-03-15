import { ForumService } from './../services/forum.service';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { iPost } from '../models/forum';

declare var m_SteamAPI: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements AfterViewInit, OnInit 
{
  posts: iPost[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public dataSource = new MatTableDataSource();
  obs: Observable<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef, private forum: ForumService){};

  ngOnInit()
  {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    m_SteamAPI.Test();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  LoadPosts()
  {
    this.forum.GetPostsByTopic(7).subscribe(result => {
      console.log(result);
      this.posts = result;
      this.dataSource.data = this.posts;
    });
  }
}