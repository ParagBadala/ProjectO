import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  {
    path:'', 
    redirectTo:'/home', 
    pathMatch:'full'
  },
  {
    path:'home', 
    component: MainComponent
  },
  {
    path: 'services/:service',
    component: ServicesComponent
  },
  {
    path:'price', 
    component: PricesComponent
  },
  {
    path:'contact', 
    component: ContactComponent
  },
  {
    path:'review', 
    component: ReviewComponent
  },
  {
    path:'**', 
    redirectTo:'/home', 
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
