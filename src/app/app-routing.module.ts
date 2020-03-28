import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch : 'full'},
  {path:'home', component : HomeComponent },
  {path:'admin', component : AdminComponent },
  {path:'product-list', component : ProductListComponent},
  {path:'product-manager', component : ProductManagerComponent},
  {path: 'product-manager/:id', component: ProductDetailComponent},
  {path: 'product-list/:id', component: ProductDetailComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path:'**', component : NotFoundComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }