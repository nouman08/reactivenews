import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponentComponent,
    DetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
