import { Routes } from '@angular/router';
import { AddUser } from './users/add-user/add-user';
import { TwoWay } from './two-way/two-way';
import { AdminModule } from './admin/admin-module';
import { Signal } from './signal/signal';
import { Structural } from './structural/structural';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { CustomPipe } from './custom-pipe/custom-pipe';
import { FilterUsers } from './filter-users/filter-users';
import { Crewprofile } from './crewprofile/crewprofile';
import { CrewUserProfile } from './crew-user-profile/crew-user-profile';
import { Dashboard } from './dashboard/dashboard';
import { Overview } from './overview/overview';
import { Settings } from './settings/settings';

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
    },
    {
        path: 'structural',
        component: Structural
    },
    {
        path: 'attributes',
        component: AttributeDirectives
    },
    {
        path:'built-in-pipes',
        component: BuiltInPipes
    },
    {
        path: 'custom-pipes',
        component: CustomPipe
    },
    {
        path: 'filter-users',
        component: FilterUsers
    },
    {
        path: 'crewprofile',
        component: Crewprofile,
        outlet: 'primary'
    },
    {
        path: 'crewprofile/:id',
        component: CrewUserProfile
    },
    {
        path: 'dashboard',
        component: Dashboard,
            children:[
                {
                    path: 'overview',  //its path will be dashboard/overview
                    component: Overview
                },
                {
                    path: 'settings',
                    component: Settings
                }
            ]
    }
];
