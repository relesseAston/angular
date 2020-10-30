import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../model/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  private api_url = "http://localhost:3000/cats";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Cat[]>(this.api_url);
  }

  getById(id:number) : Promise<any> {
    return this.http.get<any>(this.api_url+'/'+id).toPromise();
  }

  create(cat:Cat) : Promise<Cat> {
    return this.http.post<Cat>(this.api_url, cat).toPromise();
  }

  delete(id:number) : Promise<any> {
    return fetch(this.api_url+'/'+id, {
      method:"DELETE"
    });
  }
  
}
