import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbunsComponent } from './albums.component';


const routes: Routes = [
  {
    path: '',
    component: AlbunsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbunsRoutingModule { }
