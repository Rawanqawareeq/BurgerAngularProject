import { Component, inject, Input, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() price!: number;
  @Input() name!: string;
  @Input() path!: string;
  private itemService = inject(ItemService);
 
  increment(){
    this.itemService.increment();
  }
  decrement(){
    this.itemService.decrement();
  }
  getCount(){
    this.itemService.getCount();
  }

}
