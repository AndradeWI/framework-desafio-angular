import { Component, OnInit } from '@angular/core';

import { take, map } from 'rxjs/operators';

import { User } from './../../core/interfaces/users.interface';
import { Posts } from './../../core/interfaces/posts.interface';
import { UsersService } from './../../shared/service/users.service';
import { PostsService } from './service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Array<Posts> = [];
  public users: Array<User> = [];

  constructor(private postsService: PostsService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
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

  public getUsers(): void {
    this.usersService.getUsers().pipe(
      take(1),
      map((res: Array<User>) => {
        this.users = res;
      })
    )
    .subscribe();
  }

  public getUserName(id: number): string {
    const user: Array<User> = this.users.filter((user: User) => user.id === id);
    return user[0].name;
  }

}
