import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AvengerComponent } from './pages/listado/avenger/avenger.component';
import { AddAvengerComponent } from './pages/nuevo-vengador/nuevo-vengador.component';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ListadoComponent,
    AvengerComponent,
    AddAvengerComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //Obligatorio importarlo para que se realicen los servicios de cliente.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
