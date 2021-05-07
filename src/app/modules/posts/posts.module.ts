import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
