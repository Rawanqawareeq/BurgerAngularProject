import { Component, OnInit } from '@angular/core';
import { ItemService } from '../burger-item/item/item.service';
import { Burger, Ingredients, types } from '../burger-item/burger.model';
import { BruggerItemService } from '../burger-item/burger-item.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NgFor],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
   ingredients?:Ingredients;
    constructor(private itemService : ItemService , private bruggerItemService : BruggerItemService){}
    burger: Burger[] = [];
    price : number =0;

    ngOnInit(): void {
      const subscribtion = this.bruggerItemService.loadBurgger().subscribe(
        {next:(burgers) => {this.burger = burgers; this.getprice()}       }
      )
      this.itemService.ingredients$.subscribe(ingredients => this.ingredients = ingredients )
    }
    getCount(name :types){
      this.itemService.ingredients?.[name];
    } 
    getprice(){
      console.log(this.burger)
      this.price = this.itemService.getprice(this.burger);
    }
   
    
}

