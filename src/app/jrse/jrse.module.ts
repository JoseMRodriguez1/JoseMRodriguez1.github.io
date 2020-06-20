import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JrseRoutingModule } from './jrse-routing/jrse-routing.module';
import { JrseBodyModule } from './jrse-body/jrse-body.module';
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  exports: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    JrseBodyModule,
    JrseRoutingModule,
    RouterModule
  ],
  providers: [
    {
      provide: 'productsUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          window.location.href = 'docs/assets/img/products/' + route.paramMap.get('image');
      }
  }
  ]
})
export class JrseModule { }
