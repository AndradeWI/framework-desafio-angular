import { Posts } from './../../core/interfaces/posts.interface';
import { Component, OnInit } from '@angular/core';

import { PostsService } from './service/posts.service';

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
    this.postsService.getPosts()
    .subscribe(
      (res: Array<Posts>) => {
             this.posts = res;
      }
    );
  }

}
