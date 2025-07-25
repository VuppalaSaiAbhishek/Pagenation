import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutsService {

    constructor(private a:HttpClient) { }

    DBProducts:any;
    getProducts(a:any,b:any){
      return this.a.get('http://localhost:3000/getItems?skip='+a+'&limit='+b)
    }
}
