import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  private readonly API = `${environment.API}posts`;

  constructor(private http: HttpClient) { }

  public getPosts = (): Observable<any> => {
    return this.http.get(this.API);
  }
}
