import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { LocationStrategy, Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private locationStrategy: LocationStrategy) { }



  getMessages(numOfBatches: number, numberPerBatch: number) {

  let  baseUrl = environment.baseUrl;

    let apiUrl = baseUrl + 'message';  
    return this.http.get<any>(apiUrl);
  }

}
