import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {NavbaarComponent} from './navbaar/navbaar.component';
import { PostallComponent } from './postall/postall.component';
import { CommentsComponent } from './comments/comments.component';
import { EarningsComponent } from './earnings/earnings.component';
import { ThemesComponent } from './themes/themes.component';
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'dashboard',component:DashboardComponent},
{path:'navbaar',component:NavbaarComponent,
	children:[
	{path:'postall',component:PostallComponent},
	{path:'comments',component:CommentsComponent },
	{path:'earnings',component:EarningsComponent },
	{path:'themes',component:ThemesComponent}
	]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
