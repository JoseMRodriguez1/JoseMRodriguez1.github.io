import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../components/main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ProductsComponent } from '../components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BodyRoutingModule { }
