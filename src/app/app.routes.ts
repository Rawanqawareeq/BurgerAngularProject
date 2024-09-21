import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent,

    },
    {
        path:'order',
        component:OrderComponent,

    }
];
