import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './about/aboutpage/aboutpage.component';
import { ErrorpageComponent } from './core/errorpage/errorpage.component';
import { GeneratorPageComponent } from './generator/generator-page/generator-page.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PricingpageComponent } from './pricing/pricingpage/pricingpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'generator', component: GeneratorPageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'pricing', component: PricingpageComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
