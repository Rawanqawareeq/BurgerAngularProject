import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import {  Burger } from './burger.model';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BruggerItemService {
  private httpClient = inject(HttpClient);
  constructor(){ }
  loadBurgger() {
    return this.fetchBurrger('http://localhost:4000/ingredients','something an error ...');
  }
  private fetchBurrger(url:string,errorMessage:string){
     return this.httpClient.get<Burger[]>(url).pipe(
      map(data => data , catchError((error)=>
        { console.log(error);
         return throwError(()=> new Error(errorMessage))}))
     )  
  }
}
