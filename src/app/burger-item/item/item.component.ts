import { Component, inject, Input, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { subscribe } from 'diagnostics_channel';
import { Ingredients, types } from '../burger.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  @Input() price!: number;
  @Input() name!: types;
  @Input() path!: string;
  ingredients?: Ingredients;

  constructor(private itemService :ItemService){}
 
  ngOnInit(): void {
    const subscribtion = this.itemService.ingredients$.subscribe((ingredients)=>this.ingredients = ingredients);
  }

  increment(name:types){
       this.itemService.increment(name);
  }
  decrement(name:types){
    this.itemService.decrement(name)
  }
  getCount(name:types){
    return this.ingredients?.[name];

  }

}
