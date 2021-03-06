import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherdetailsComponent } from './weather-details/weather-details.component';
import { WeatherdataService } from './weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LearnComponent } from './learn/learn.component';
import { DropdownDirective } from './weather-details/dropdown.directive';

export const WEATHER_DATA_TOKEN = new InjectionToken<WeatherdataService>("WEATHER_DATA_TOKEN");

@NgModule({
  declarations: [
    AppComponent,
    WeatherdetailsComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AuthenticateComponent,
    WelcomeComponent,
    LearnComponent,
    DropdownDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: WEATHER_DATA_TOKEN,
      useClass: WeatherdataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}