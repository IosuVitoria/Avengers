import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  db_url: string = 'http://localhost:3000/avengers';

  constructor(private http: HttpClient) {}

  getAvengers() {
    return this.http.get(this.db_url);
  }
  getAvengerByID(id:number){
    return this.http.get(`${this.db_url}/${id}`)
  }

  addAvenger(avenger: any) {
    return this.http.post(this.db_url, avenger);
  }
  deleteAvenger(avengerId: number) {
    return this.http.delete(`${this.db_url}/${avengerId}`);
  }


}
// En el código proporcionado, se ha creado un servicio llamado `ServiceService` en Angular. 
// Este servicio se encarga de realizar solicitudes HTTP utilizando `HttpClient` para interactuar con una API local.

// Aquí hay una explicación detallada de las partes clave del código:

// 1. Importaciones: Se importan las clases `HttpClient` y `Injectable` desde los módulos `@angular/common/http` y `@angular/core`,
//  respectivamente. Estas importaciones son necesarias para utilizar el servicio HTTP y para decorar el servicio como inyectable.

// 2. Decorador `@Injectable`: El servicio se marca como inyectable utilizando el decorador `@Injectable`.
//  Esto permite que Angular lo inyecte como una dependencia en otros componentes o servicios.

// 3. Propiedad `db_url`: Se declara una propiedad `db_url` que representa la URL de la API local a la que se realizarán las solicitudes. 
// En este caso, la URL es "http://localhost:3000/avengers".

// 4. Constructor: Se define un constructor que recibe una instancia de `HttpClient` como parámetro.
//  Esta instancia se guarda en la propiedad `http` del servicio para poder utilizarla posteriormente.

// 5. Método `getAvengers()`: Este método realiza una solicitud HTTP GET a la URL `db_url` utilizando `HttpClient`. 
// Retorna el resultado de la solicitud como un observable.

// 6. Método `getAvengerById(id: number)`: Este método recibe un parámetro `id` que representa el ID de un avenger específico.
//  Realiza una solicitud HTTP GET a la URL `db_url/id` utilizando `HttpClient`. Retorna el resultado de la solicitud como un observable.

// En resumen, este servicio proporciona métodos para obtener todos los avengers y para obtener un avenger específico por su ID utilizando solicitudes HTTP a la API local. 
// Estos métodos devuelven observables que permiten manejar los datos asincrónicamente en otros componentes o servicios.