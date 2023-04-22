import { Component } from '@angular/core';
import { Icon } from '../../models/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  icons: Icon[] = [
    {
      id: 1,
      title: 'Material Didático',
      divisorColor: 'blue',
      iconUrl: './../../../../assets/images/material-didatico.png',
    },
    {
      id: 2,
      title: 'Quiz',
      divisorColor: 'green',
      iconUrl: './../../../../assets/images/quiz.png',
    },
    {
      id: 3,
      title: 'Desenho',
      divisorColor: 'pink',
      iconUrl: './../../../../assets/images/desenho.png',
    },
    {
      id: 4,
      title: 'Youtube',
      divisorColor: 'red',
      iconUrl: './../../../../assets/images/youtube.png',
    },
  ];
}