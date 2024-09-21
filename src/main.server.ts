import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent,{providers:[provideHttpClient()]}).catch((err) => console.error(err));
