import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavigationComponent } from './core/main-navigation/main-navigation.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AboutpageComponent } from './about/aboutpage/aboutpage.component';
import { PricingpageComponent } from './pricing/pricingpage/pricingpage.component';
import { ErrorpageComponent } from './core/errorpage/errorpage.component';
import { GeneratorPageComponent } from './generator/generator-page/generator-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    HomepageComponent,
    AboutpageComponent,
    PricingpageComponent,
    ErrorpageComponent,
    GeneratorPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
