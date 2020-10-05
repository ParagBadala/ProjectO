import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';
import { FaqComponent } from './faq/faq.component';
import { ExtrasComponent } from './extras/extras.component';
import { AboutUsComponent } from './about-us/about-us.component';


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
    path:'extra', 
    component: ExtrasComponent
  },
  {
    path:'faq', 
    component: FaqComponent
  },
  {
    path:'about-us', 
    component: AboutUsComponent
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
