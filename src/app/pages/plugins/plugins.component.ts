import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface GameList {
  name: string;
  image: string;
}

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PluginsComponent implements OnInit {

  games: GameList[] = [
    { name: 'CS:GO', image: 'csgo.png' },
    { name: 'CS:S', image: 'css.png' },
    { name: 'GMOD', image: 'gmod.png' },
    { name: 'S&BOX', image: 'sbox.png' },
  ];

  category: any[] = [
    'Gamemode',
    'Technique',
    'Autre',
    'Fun',
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
