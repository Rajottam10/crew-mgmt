import { Component } from '@angular/core';
import { ImpureExamplePipe } from '../impure-example-pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-users',
  imports: [ImpureExamplePipe, FormsModule, CommonModule],
  templateUrl: './filter-users.html',
  styleUrl: './filter-users.scss'
})
export class FilterUsers {

  users: String[] = ["aaa", "bbb", "cccc"];
  searchTerm: string="";

}
