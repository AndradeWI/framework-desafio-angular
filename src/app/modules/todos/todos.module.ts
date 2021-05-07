import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatBadgeModule,
    DragDropModule,
    MatIconModule
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
