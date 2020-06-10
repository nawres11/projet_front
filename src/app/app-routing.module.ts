import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './FRONT-OFFICE/home/home.component';
import {RegisterLoginComponent} from './FRONT-OFFICE/register-Login/register-login.component';
import {ServerListComponent} from'./BACK-OFFICE/gestion-server/server-list/server-list.component';
import{CreateServerComponent} from'./BACK-OFFICE/gestion-server/create-server/create-server.component';
import{UpdateComponent} from './BACK-OFFICE/gestion-server/update/update.component';
import{ServerDetailsComponent} from'./BACK-OFFICE/gestion-server/server-details/server-details.component';
import {FluxListComponent} from './BACK-OFFICE/gestion-flux/flux-list/flux-list.component';
import {CreateOpeningRequestComponent} from './BACK-OFFICE/gestion-flux/create-opening-request/create-opening-request.component';
import {BACKOFFICEComponent} from './BACK-OFFICE/back-Nav/back-office.component';
import {DashbordComponent} from './BACK-OFFICE/dashbord/dashbord.component';


const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path : 'Login', component: RegisterLoginComponent},
  {path : 'admin', component: BACKOFFICEComponent},
  {path : 'ServerList', component: ServerListComponent},
  {path : 'addServer', component: CreateServerComponent},
  {path : 'update/:id', component: UpdateComponent},
  {path : 'details/:id', component: ServerDetailsComponent},
  {path : 'FluxList', component: FluxListComponent},
  {path : 'addFlux', component: CreateOpeningRequestComponent},
  {path : 'dashboard', component: DashbordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

