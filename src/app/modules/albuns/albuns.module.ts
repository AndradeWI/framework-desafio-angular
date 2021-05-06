import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { AlbunsRoutingModule } from './albuns-routing.module';
import { AlbunsComponent } from './albums.component';



@NgModule({
  declarations: [AlbunsComponent],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule
  ],
  exports: [AlbunsComponent]
})
export class AlbunsModule { }
