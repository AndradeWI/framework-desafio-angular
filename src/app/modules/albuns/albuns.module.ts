import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbunsRoutingModule } from './albuns-routing.module';
import { AlbunsComponent } from './albums.component';



@NgModule({
  declarations: [AlbunsComponent],
  imports: [
    CommonModule,
    AlbunsRoutingModule
  ],
  exports: [AlbunsComponent]
})
export class AlbunsModule { }
