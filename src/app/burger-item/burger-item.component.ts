import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { BruggerItemService } from './burger-item.service';
import { Burger } from './burger.model';
import { CommonModule, NgFor } from '@angular/common';
import { ItemComponent } from "./item/item.component";
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from '@angular/router';
import { ItemService } from './item/item.service';

@Component({
  selector: 'app-burger-item',
  standalone: true,
  imports: [NgFor, CommonModule, ItemComponent, MenuComponent,RouterLink],
  templateUrl: './burger-item.component.html',
  styleUrl: './burger-item.component.css'
})
export class BruggerItemComponent  implements OnInit {
  constructor(private burrgerService:BruggerItemService ,private itemService :ItemService){}
  private DestroyRef = inject(DestroyRef);
  burgers: Burger[] =[];
  price :number =0;
  ngOnInit(): void {
    const subscription = this.burrgerService.loadBurgger().subscribe({
      next: (data) =>  {this.burgers = data;
                       this.getprice() },
      error: (error) => console.error('Error:', error)
    });
 this.itemService.ingredients$.subscribe(() => {
  this.getprice();
});
    this.DestroyRef.onDestroy(()=>{
      subscription.unsubscribe();
     });
  }
  getprice(){
    this.price = 0;
    this.price = this.itemService.getprice(this.burgers);
  }
  onClear(){
    this.price = 0;
    this.itemService.onClear();
  }
}
