import { Component, OnInit } from '@angular/core';

import { take, map } from 'rxjs/operators';

import { User } from './../../core/interfaces/users.interface';
import { Albuns } from './../../core/interfaces/albuns.interface';
import { UsersService } from './../../shared/service/users.service';
import { AlbunsService } from './service/albuns.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  public albuns: Array<Albuns> = [];
  public users: Array<User> = [];

  constructor(private albunsService: AlbunsService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getAlbuns();
  }

  public getAlbuns(): void {
    this.albunsService.getAlbuns().pipe(
      take(1),
      map((res: Array<Albuns>) => {
        this.albuns = res;
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
