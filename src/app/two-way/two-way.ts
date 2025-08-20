import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.scss'
})
export class TwoWay {
  name: string = '';

  isChecked: boolean = false;

  selectedOption: string= "";

  dropdownOption: string="";

  textarea: string="";
}
