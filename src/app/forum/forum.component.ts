import { LoaderService } from '../loader/loader.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { iNodes } from '../models/forum';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForumComponent implements OnInit 
{
  background: string = "";
  backgrounds = ["assets/images/bg.png", "assets/images/bg-forum.jpg", "assets/images/bg-forum2.jpg", "assets/images/bg-image.jpg"];
  
  constructor(public Loader: LoaderService) { 
    this.background = this.GetRandomBG();
  }
  
  ngOnInit(): void {
  }

  GetRandomBG()
  {
    var random = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)];
    return random.toString();
  }
}
