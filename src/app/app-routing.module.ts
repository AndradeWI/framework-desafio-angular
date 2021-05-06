import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  {
    path: '',
    loadChildren: () =>
    import('./modules/todos/todos.module')
    .then((m) => m.TodosModule)
  },
  {
    path: 'todos',
    loadChildren: () =>
    import('./modules/todos/todos.module')
    .then((m) => m.TodosModule)
  },
  {
    path: 'posts',
    loadChildren: () =>
    import('./modules/posts/posts.module')
    .then((m) => m.PostsModule)
  },
  {
    path: 'albuns',
    loadChildren: () =>
    import('./modules/albuns/albuns.module')
    .then((m) => m.AlbunsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
