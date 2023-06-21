import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AvengerComponent } from './pages/listado/avenger/avenger.component';
import { AddAvengerComponent } from './pages/nuevo-vengador/nuevo-vengador.component'
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'avengers', component: ListadoComponent },
  { path: 'avengers/:id', component: AvengerComponent },
  { path: 'addavenger', component: AddAvengerComponent},
  { path: 'contact', component: ContactoComponent}
];


//Aquí controlamos todo lo que se abre a la hora de trabajar con la página.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
