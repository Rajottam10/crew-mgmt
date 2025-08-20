import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser {
  userName: string = "arcadmin";
  userId: number = 10
  anchorUrl: string = "http://google.com"
  disabled: boolean = true;
  className: string = "c1";

  buttonClicked(){
    console.log("the button was clicked");
    this.className = this.className == "c1" ? "c2": "c1";
    this.disabled = !this.disabled
  }

  capturedValue(event: any){
    console.log(event.key);
  }

  onMouseover(event:any){
    console.log("Mouse was hovered");
    this.className = this.className == "c1" ? "c2": "c1";
  }

  onMouseout(event:any){
    console.log("Mouse was out");
    this.className = this.className == "c2" ? "c1": "c2";
  }
}
