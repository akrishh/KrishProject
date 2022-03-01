import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherdetailsComponent } from './weather-details/weather-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { Router } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherdetailsComponent
  },
  {
    path: 'learn',
    component: LearnComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
