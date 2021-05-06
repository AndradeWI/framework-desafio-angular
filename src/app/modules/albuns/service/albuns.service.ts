import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  private readonly API = `${environment.API}albuns`;

  constructor(private http: HttpClient) { }

  public getAlbuns= (): Observable<any> => {
    return this.http.get(this.API);
  }
}
