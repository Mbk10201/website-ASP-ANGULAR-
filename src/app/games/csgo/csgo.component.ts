import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csgo',
  templateUrl: './csgo.component.html',
  styleUrls: ['./csgo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsgoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
