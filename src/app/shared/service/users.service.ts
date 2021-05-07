import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  public getUsers = (): Observable<any> => {
    return this.http.get(this.API);
  }
}
