import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-random-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './random-button.html',
  styleUrl: './random-button.scss'
})
export class RandomButtonComponent {

  @ViewChild('container') container!: ElementRef<HTMLElement>;
  @ViewChild('movingButton') movingButton!: ElementRef<HTMLElement>;
  position = { x: 0, y: 0 };
  hasMoved = false;
constructor(private router: Router) {}

redirectToPage() {
  this.router.navigate(['/Sucess']);
}
  moveElement() {
    const container = this.container.nativeElement;
    const button = this.movingButton.nativeElement;
    const maxX = Math.max(0, container.clientWidth - button.offsetWidth);
    const maxY = Math.max(0, container.clientHeight - button.offsetHeight);
    const startX = (container.clientWidth - button.offsetWidth) / 2;
    const startY = (container.clientHeight - button.offsetHeight) / 2;

    this.position = {
      x: Math.random() * maxX - startX,
      y: Math.random() * maxY - startY
    };
    this.hasMoved = true;
  }
}