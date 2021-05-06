import { Todos } from './../../core/interfaces/todos.interface';
import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { TodosService } from './service/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todosToDo: Array<Todos> = [];
  public todosDone:  Array<Todos> = [];

  constructor( private todoService: TodosService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  public getTodos(): void {
    this.todoService.getTodos()
    .subscribe(
      (res: Array<Todos>) => {
         res.map((todo: Todos) => {
           if (todo.completed) {
             this.todosDone.push(todo);
           } else {
             this.todosToDo.push(todo);
           }
         })
      }
    );
  }

 public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
