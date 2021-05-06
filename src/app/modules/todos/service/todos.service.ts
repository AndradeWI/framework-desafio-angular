import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private readonly API = `${environment.API}todos`;

  constructor(private http: HttpClient) { }

  public getTodos = (): Observable<any> => {
    return this.http.get(this.API);
  }
}
