import { LoaderService } from './../../loader/loader.service';
import { ForumService } from './../../services/forum.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent implements OnInit {

  topics: any[] = [];

  constructor(private forum: ForumService, private router: Router, private route: ActivatedRoute, public Loader: LoaderService) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => 
      {
        if(params['id'])
        {
          this.forum.GetTopicsByCategory(params['id']).subscribe((res:any) => {
            this.topics = res;
          });
        }
        else
          this.router.navigate(["/forum"]);
      }
    );
  }

}
