import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from './menu.module';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ItemService } from '../burger-item/item/item.service';
import { types } from '../burger-item/burger.model';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
   constructor(private itemService : ItemService){} 
   private menuService = inject(MenuService);
   private DestroyRef = inject(DestroyRef);
   Menu : Menu[] =[];
  ngOnInit(): void {
    const subscription = this.menuService.loadMenu().subscribe({
      next: (data) =>  this.Menu = data,
      error: (error) => console.error('Error:', error)
    });
    this.DestroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }
  onClick(ingredients : types[]){
      this.itemService.onBurgerTypechange(ingredients);
  }
}
