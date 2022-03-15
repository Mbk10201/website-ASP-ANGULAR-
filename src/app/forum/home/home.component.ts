import { LoaderService } from './../../loader/loader.service';
import { ForumService } from './../../services/forum.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { iNodes, iCategory } from "../../models/forum";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public forums = [] as Array<iNodes>;
  nodes: any[] = [];
  categories: any[] = [];

  constructor(private forum: ForumService, public Loader: LoaderService) {
    
  }

  ngOnInit(): void {
    this.forum.GetNodes().subscribe((data: any) => {
      this.nodes = data;
      this.forum.GetCategories().subscribe((data: any) => {
        this.categories = data;
        this.SetForums();
      })
    })
  }


  SetForums() {
    for (var i = 0; i < this.nodes.length; i++) {
      var categories = [] as Array<iCategory>;

      for (var j = 0; j < this.categories.length; j++) {
        if (this.categories[j].node == this.nodes[i].id) {
          categories.push({
            id: this.categories[j].id,
            node: this.categories[j].node,
            name: this.categories[j].name,
            description: this.categories[j].description
          });
        }
      }

      this.forums.push({
        id: i,
        name: this.nodes[i].name,
        role: this.nodes[i].role,
        image: this.nodes[i].image,
        categories: categories
      });
    }
  }
}
