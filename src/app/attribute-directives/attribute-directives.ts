import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.scss'
})
export class AttributeDirectives {
  isActive: boolean = true
  status: string = 'not-done';
  backgroundColor: string = 'coral';
  fontsize: number = 12;
  name:string = "";

  toggleActive(){
    this.isActive = !this.isActive;
    this.status = 'done';
  }
  
  styleUpdate(){
    this.backgroundColor= 'aqua';
    this.fontsize = 28;
  }

}
