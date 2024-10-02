import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Burger, Ingredients, types } from '../burger.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public  ingredients:Ingredients = {
    "bread-top":1,
    "bread-bottom":1,
    "beef":0,
     "tomato":0,
     "lettuce": 0,
     "leaf":0,
     "cheese":0,
     "mushroom":0,
     "onion": 0,
  }
  public price : number =0;
public ingredients$ = new BehaviorSubject<Ingredients>(this.ingredients);
public ingredientsBurger$ = new BehaviorSubject<types[]>([]);
constructor() { }
increment(value:types) {
  this.ingredients[value]+=1;
    this.ingredients$.next({...this.ingredients})
    this.ingredientsBurger$.next([value,...this.ingredientsBurger$.getValue()]);

   }
    decrement(value:types) {
      this.ingredients[value] = Math.max(this.ingredients[value]-=1,0);
      this.ingredients$.next({...this.ingredients});

      const currentIngredients = this.ingredientsBurger$.getValue();
      const index = currentIngredients.indexOf(value);
     if(index > -1){
      currentIngredients.splice(index, 1);
      this.ingredientsBurger$.next(currentIngredients);

     }


     
      }

 onBurgerTypechange(ingredients:types[]){
  this.onClear();
  ingredients.map(ingredient => this.increment(types[ingredient]))
 }
 onClear(){
   this.ingredients={
    "bread-top":1,
    "bread-bottom":1,
    "beef":0,
     "tomato":0,
     "lettuce": 0,
     "leaf":0,
     "cheese":0,
     "mushroom":0,
     "onion": 0,
};
this.price = 0;
this.ingredients$.next({ ...this.ingredients });
this.ingredientsBurger$.next([]);

 }
 getprice(burgers:Burger[]) :number {
  this.price = 0;
  burgers.map((burger)=> this.price +=burger.price * this.ingredients[burger.name]);
  return this.price;
}

}
