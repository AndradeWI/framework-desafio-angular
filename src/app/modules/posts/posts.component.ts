import { Component, OnInit } from '@angular/core';

import { take, map } from 'rxjs/operators';

import { PostsService } from './service/posts.service';
import { Posts } from './../../core/interfaces/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Array<Posts> = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  public getTodos(): void {
    this.postsService.getPosts().pipe(
      take(1),
      map((res: Array<Posts>) => {
        this.posts = res;
      })
    )
    .subscribe();
  }
}
