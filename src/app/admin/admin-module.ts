import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { EditUser } from './edit-user/edit-user';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
