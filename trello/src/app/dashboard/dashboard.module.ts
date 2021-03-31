import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { BoardsComponent } from './boards/boards.component';
import { FormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';



@NgModule({
  declarations: [DashboardComponent, NavHeaderComponent, BoardsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgDragDropModule.forRoot()
  ]
})
export class DashboardModule { }
