import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  startNumberProces(numOfBatches: number, numberPerBatch: number) {
    return this.http.post<any>('api/correspondents/groups', numberPerBatch);
  }

}
