import { Routes } from '@angular/router';
import { AddUser } from './users/add-user/add-user';
import { TwoWay } from './two-way/two-way';
import { AdminModule } from './admin/admin-module';
import { Signal } from './signal/signal';

export const routes: Routes = [
    {
        path: 'admin',
        // loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule),
        component: AdminModule
    },
    {
        path: 'add-user',
        loadComponent: ()=> import('./admin/add-user/add-user').then(c => c.AddUser)
        // component: AddUser
    },
    {
        path: 'two-way',
        component: TwoWay
    },
    {
        path: 'signal',
        component: Signal
    }
];
