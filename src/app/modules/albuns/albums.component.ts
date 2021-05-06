import { Component, OnInit } from '@angular/core';

import { AlbunsService } from './service/albuns.service';
import { Albuns } from './../../core/interfaces/albuns.interface';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  public albuns: Array<Albuns> = [];

  constructor(private albunsService: AlbunsService) { }

  ngOnInit(): void {
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

}
