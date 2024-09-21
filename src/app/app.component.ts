import { Component } from '@angular/core';
import { BruggerItemService } from './burger-item/burger-item.service';
import { BruggerItemComponent } from './burger-item/burger-item.component';
import { MenuComponent } from "./menu/menu.component";
import { RouterOutlet } from '@angular/router';
import { OrderComponent } from "./order/order.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BruggerItemComponent, MenuComponent, RouterOutlet, OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'burgerProject';
}
