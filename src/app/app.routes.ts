import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path:'',
        component:MainComponent,
    },
    {
        path:'order',
        component:OrderComponent,
    }
];
