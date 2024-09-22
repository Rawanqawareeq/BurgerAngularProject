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
export class ItemComponent implements OnInit {
  @Input() price!: number;
  @Input() name!: string;
  @Input() path!: string;
  count:any;
  constructor(private itemService :ItemService){}
 
  ngOnInit(): void {
    this.count = this.itemService.ingredients;
  }
  increment(name:any){
       this.itemService.increment(name)
  }
  decrement(name:any){
    this.itemService.decrement()
  }

}
