import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startdownload',
  templateUrl: './startdownload.component.html',
  styleUrls: ['./startdownload.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartdownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
