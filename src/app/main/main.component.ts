import { Component, OnInit } from '@angular/core';
import { BruggerItemComponent } from "../burger-item/burger-item.component";
import { ItemService } from '../burger-item/item/item.service';
import { Burger, Ingredients, types } from '../burger-item/burger.model';
import { NgFor } from '@angular/common';
import { BruggerItemService } from '../burger-item/burger-item.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BruggerItemComponent,NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  constructor(private itemService : ItemService,private burger : BruggerItemService){}
  ingredients?:Ingredients;
  burgeritem:Burger[] = [];
  ingredientsBurger?:types[];
  ngOnInit(): void {
      const subscription1 = this.itemService.ingredientsBurger$.subscribe(

        {next:(ingredientsBurger) => this.ingredientsBurger = ingredientsBurger}  
      );
      const subscription2 = this.burger.loadBurgger().subscribe(
        {next:(data) => this.burgeritem =  data}     
      )
  }
  getimages(name : types){
   const item = this.burgeritem.find(burger => burger.name === name);
   return item?.path;
  }
}
