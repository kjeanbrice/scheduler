import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { RouterModule } from '@angular/router';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';

@NgModule({
  declarations: [HomeNavbarComponent, DashboardNavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ HomeNavbarComponent, DashboardNavbarComponent ]
})
export class SharedModule { }
