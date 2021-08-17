import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LayoutModule } from './core/layout/layout.module';
import { SearchService } from './core/services/search.service';
import { WeatherService } from './core/services/weather.service';
import { SearchComponent } from './search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    LayoutModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [SearchService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
