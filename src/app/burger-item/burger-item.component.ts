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
  constructor(private burrgerService:BruggerItemService ,private itemSeervice :ItemService){}
  private DestroyRef = inject(DestroyRef);
  burgers: Burger[] =[];
  ngOnInit(): void {
    const subscription = this.burrgerService.loadBurgger().subscribe({
      next: (data) =>  this.burgers = data,
      error: (error) => console.error('Error:', error)
    });
this.itemSeervice.ingredients$.subscribe((value) => {
 console.log(value);
});

    this.DestroyRef.onDestroy(()=>{
      subscription.unsubscribe();
     });
  }
 
  
}
