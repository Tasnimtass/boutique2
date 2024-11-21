import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';
import path from 'path';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin/admin.component';
import { GetprodComponent } from './admin/getprod/getprod.component';
import { HomeAdmComponent } from './admin/home-adm/home-adm.component';

export const routes: Routes = [
    {path:'',redirectTo:'/products',pathMatch:'full'},
    {path:'',component:HomeComponent,children:[{path:'contact',component:ContactComponent},{path:'about',component:AboutComponent},{path:'products',component:ProductsComponent}]},
    {path:'admin',component:AdminComponent,children :[{path:'getprod',component:GetprodComponent},{path:'homeadm',component:HomeAdmComponent}]},
    {path:'**',component:PagenotfountComponent}
    
];
