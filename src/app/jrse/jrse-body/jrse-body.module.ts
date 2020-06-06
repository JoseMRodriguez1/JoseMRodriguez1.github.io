import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BodyRoutingModule } from './body-routing/body-routing.module';
import { BodyComponent } from './body.component';

@NgModule({
  declarations: [BodyComponent, MainComponent, ProductsComponent, AboutComponent, ContactComponent],
  exports: [BodyComponent, MainComponent, ProductsComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class JrseBodyModule { }
