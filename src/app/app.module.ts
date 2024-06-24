import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TicketsDetailPageComponent } from './pages/tickets-detail-page/tickets-detail-page.component';
import { EmpleadosPageComponent } from './pages/empleados-page/empleados-page.component';
import { EmpresaPageComponent } from './pages/empresa-page/empresa-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpresaDialogComponent } from './pages/empresa-dialog/empresa-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TicketsPageComponent,
    TicketsDetailPageComponent,
    EmpleadosPageComponent,
    EmpresaPageComponent,
    EmpresaDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
