import { RoleplayService } from './../../../../services/roleplay.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesComponent implements OnInit 
{
  constructor(public roleplay:RoleplayService) { }
  
  ngOnInit(): void {
  }
}
