import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MethodsEnum } from '../enums/methods.enum';

@Injectable({
  providedIn: 'root'
})
export class BaseService <T> {

  constructor(
    protected http: HttpClient,
    @Inject(String) private API_URL
  ) {}

   public getDados = (id: number): Observable<any> => {
    return this.http.get(`${this.API_URL}/${id}`);
   }

  public postPut = (record: T, method: string): Observable<any> => {
    if (MethodsEnum.PUT === method) {
        return this.http.put(`${this.API_URL}`, record);
    }
    return this.http.post(`${this.API_URL}`, record);
  }

  public get = (): Observable<any> => {
    return this.http.get(`${this.API_URL}`);
  }

  public delete = (id: number): Observable<any> => {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
