import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FianceComponent } from './fiance/fiance.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MoreserviceComponent } from './moreservice/moreservice.component';

@NgModule({
  declarations: [
    AppComponent,
    FianceComponent,
    AnalyticsComponent,
    MoreserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUsefulSwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
