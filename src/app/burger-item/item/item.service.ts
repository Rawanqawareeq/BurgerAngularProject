import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
private ingredients = new BehaviorSubject<number>(0);
constructor() { }
ingredients$ = this.ingredients.asObservable();
increment() {
    const currentValue = this.ingredients.value;
      return this.ingredients.next(currentValue+1);
    }
    decrement() {
      const currentValue = this.ingredients.value;
      if(currentValue == 0){
        return this.ingredients.next(currentValue);
      }
        return this.ingredients.next(currentValue-1);
      }
  getCount(){
    return this.ingredients.value;
  }
 

}
