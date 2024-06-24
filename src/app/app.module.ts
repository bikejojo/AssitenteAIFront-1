import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TicketsDetailPageComponent } from './pages/tickets-detail-page/tickets-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TicketsPageComponent,
    TicketsDetailPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
