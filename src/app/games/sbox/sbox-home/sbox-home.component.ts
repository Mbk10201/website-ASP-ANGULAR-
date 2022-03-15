import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sbox-home',
  templateUrl: './sbox-home.component.html',
  styleUrls: ['./sbox-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SboxHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
