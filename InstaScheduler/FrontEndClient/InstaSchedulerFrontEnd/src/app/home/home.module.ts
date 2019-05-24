import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './homecomponent/home.component';
import { SharedModule } from '../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
