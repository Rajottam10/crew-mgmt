import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUser } from './add-user/add-user';



@NgModule({
  declarations: [
    AddUser
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddUser
  ]
})
export class UsersModule { }
