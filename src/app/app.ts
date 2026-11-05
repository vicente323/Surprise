import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomButtonComponent } from './random-button/random-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RandomButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
