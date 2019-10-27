import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {NavbaarComponent} from './navbaar/navbaar.component';
import { PostallComponent } from './postall/postall.component';
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'dashboard',component:DashboardComponent},
{path:'navbaar',component:NavbaarComponent},
{path:'postall',component:PostallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
