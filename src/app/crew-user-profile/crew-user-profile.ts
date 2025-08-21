import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crew-user-profile',
  standalone:true,
  imports: [],
  templateUrl: './crew-user-profile.html',
  styleUrl: './crew-user-profile.scss'
})
export class CrewUserProfile implements OnInit{

  id: string | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id = params.get("id");
    })
  }

}
