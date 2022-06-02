import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DeliveryPaymentComponent } from './delivery-payment/delivery-payment.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent, data:{category: 'all'}},
  { path: 'about', component: AboutComponent },
  { path: 'delivery', component: DeliveryPaymentComponent },
  { path: 'catalog/creamy', component: CatalogComponent, data:{category: 'creamy'}},
  { path: 'catalog/fruity', component: CatalogComponent, data:{category: 'fruity'}},
  { path: 'catalog/sorbet', component: CatalogComponent, data:{category: 'sorbet'}},
  { path: 'catalog/chocolate', component: CatalogComponent, data:{category: 'chocolate'}},
  { path: 'account', component: AccountComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}