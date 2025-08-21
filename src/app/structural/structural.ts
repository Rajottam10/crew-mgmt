import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural.html',
  styleUrl: './structural.scss'
})
export class Structural {
  a: number = 10;
  b: number = 2;

  items = [10,20,30,40,50];

  userRole = 'admin';
}
