import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { Menu } from './menu.module';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
 private httpClient = inject(HttpClient);
 private destroyRef = inject(DestroyRef);
 private burger = signal<Menu[]>([]);

  constructor() { }
  loadMenu(){
    return this.fetchMenu('http://localhost:4000/menu','something an error ...');
  }
  private fetchMenu(url:string,errorMessage:string){
    return this.httpClient.get<Menu[]>(url).pipe(
      map(data => data , catchError((error)=>
        { console.log(error);
          return throwError(()=> new Error(errorMessage))}))
     )

  }
}
