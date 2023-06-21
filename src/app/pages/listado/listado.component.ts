import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  
  avengersList: any[] = [];

  constructor(private servicio:ServiceService){
    
  }
  ngOnInit():void {
    this.servicio.getAvengers().subscribe((data:any) => {
    console.log(data)
    this.avengersList = [...data];
    })
  }

  eliminarAvenger(avengerId: number): void {
    this.servicio.deleteAvenger(avengerId).subscribe(() => {
      this.avengersList = this.avengersList.filter(avenger => avenger.id !== avengerId);
    });
  }

}
