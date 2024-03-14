 import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HomeComponent } from './home/home.component';
import { ProdutsComponent } from './produts/produts.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { DetialsComponent } from './detials/detials.component';

const routes: Routes = [
  {path: '' , 
  canActivate:[ authGuard ],
  component:BlankLayoutComponent ,
   children:[
    {path:'home', component:HomeComponent},
    {path:'products', component:ProdutsComponent},
    {path:'cart', component:CartComponent},
    {path:'details/:id', component:DetialsComponent},
    {path:'brands',component:BrandsComponent},
    {path:'categories', component:CategoriesComponent},
  ]},
  {path: '' , component:AuthLayoutComponent ,children:[
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
  
  ]},
  
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
