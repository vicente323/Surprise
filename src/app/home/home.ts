import { Component } from '@angular/core';
import { RandomButtonComponent } from '../random-button/random-button';
@Component({
  selector: 'app-home',
  imports: [RandomButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  hearts = Array.from({ length: 25 });
}
