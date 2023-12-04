// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProfile } from '../interface/profile';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private submittedDataSubject = new BehaviorSubject<any>(null);
    submittedData$ = this.submittedDataSubject.asObservable();

    constructor(private httpClient: HttpClient) {}

  setData(data: any) {
    this.submittedDataSubject.next(data);
  }

  getData() {    
    return this.submittedDataSubject.value;
  }

  getAll() {
    return this.httpClient.get<IProfile[]>('http://localhost:3000/profile');
  }

  create(data: IProfile) {
    return this.httpClient.post<any>('http://localhost:3000/profile', {...data});
  }
}
