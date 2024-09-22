import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredients, types } from '../burger.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public  ingredients:Ingredients ={
    "beef":0,
     "tomato":0,
     "lettuce": 0,
     "leaf":0,
     "cheese":0,
     "mushroom":0,
     "onion": 0,
}

public ingredients$ = new BehaviorSubject<number>(0);
constructor() { }
increment(value:types) {
    
       this.ingredients$.next(this.ingredients.beef+1);
    }
    decrement() {
      const currentValue = this.ingredients$.value;
      if(currentValue == 0){
        return this.ingredients$.next(currentValue);
      }
        return this.ingredients$.next(currentValue-1);
      }

 onBurgerTypechange(){
  this.ingredients$.next(this.ingredients$.value +10)
 }

}
