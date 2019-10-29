import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbaarComponent } from './navbaar/navbaar.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PostallComponent } from './postall/postall.component';

import { AgGridModule } from 'ag-grid-angular';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommentsComponent } from './comments/comments.component';
import { EarningsComponent } from './earnings/earnings.component';
import { PagesComponent } from './pages/pages.component';
import { ThemesComponent } from './themes/themes.component';
import { SettingsComponent } from './settings/settings.component';
import { ReadinglistComponent } from './readinglist/readinglist.component';
import { HelpComponent } from './help/help.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavbaarComponent,
    HomeComponent,
    SidenavComponent,
    PostallComponent,
    DataTableComponent,
    CommentsComponent,
    EarningsComponent,
    PagesComponent,
    ThemesComponent,
    SettingsComponent,
    ReadinglistComponent,
    HelpComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    AgGridModule.withComponents([]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
   exports:[
   BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
    AppRoutingModule,
   MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  opened=true;
 }
