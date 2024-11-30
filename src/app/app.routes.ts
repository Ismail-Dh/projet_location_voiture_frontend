import { Routes } from '@angular/router';
import { AppComponent  } from './app.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import {AboutComponent} from './about/about.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalConditionsComponent } from './components/rental-conditions/rental-conditions.component';
import { ContactComponent } from './components/contact/contact.component';
export const routes: Routes = [
 // { path: '', redirectTo: '/accueil', pathMatch: 'full' }, 
  { path: '', component: AppComponent  },
  {path:"signup",component: SignupComponent},
  {path:"login",component: LoginComponent},
  {path:"accueil",component:AccueilComponent},
  {path: 'about',component: AboutComponent},
  {path:'reservation',component:CarListComponent},
  { path: 'details/:id', component: CarDetailComponent },
  { path: 'conditions', component: RentalConditionsComponent },
  { path: 'contact', component: ContactComponent },


];
