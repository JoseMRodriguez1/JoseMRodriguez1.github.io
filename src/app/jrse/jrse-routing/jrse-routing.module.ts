import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'img/products/:image',
    component: HomeComponent,
    resolve: {
        url: 'productsUrlRedirectResolver'
    },
    data: {
        externalUrl: 'docs'
    }
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JrseRoutingModule { }
