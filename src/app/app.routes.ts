import { Routes } from '@angular/router';
import { AppComponent  } from './app.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  { path: '', component: AppComponent  },
  {path:"signup",component: SignupComponent},
  {path:"login",component: LoginComponent},
  {path:"accueil",component:AccueilComponent},
  {path: 'about',component: AboutComponent}
];
