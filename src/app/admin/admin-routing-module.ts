import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUser } from './edit-user/edit-user';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./edit-user/edit-user').then(c => c.EditUser),
    component: EditUser
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
