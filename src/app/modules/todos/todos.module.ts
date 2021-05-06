import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatBadgeModule } from '@angular/material/badge';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatBadgeModule,
    DragDropModule
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
