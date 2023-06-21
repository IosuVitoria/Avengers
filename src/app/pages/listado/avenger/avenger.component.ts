import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.css'],
})
export class AvengerComponent {
  id!: number;
  avenger!: any;

  constructor(
    private servicio: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      // console.log(params);
      this.id = Number(params.get('id'));
    });

    this.servicio.getAvengerByID(this.id).subscribe((data:any)=>{
      // console.log(data);
    this.avenger = data
    })
  }
}
