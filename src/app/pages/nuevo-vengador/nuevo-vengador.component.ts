import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from'../../services/service.service';

@Component({
  selector: 'app-add-avenger',
  templateUrl: './nuevo-vengador.component.html',
  styleUrls: ['./nuevo-vengador.component.css']
})
export class AddAvengerComponent {
  newAvenger = {
    hero: '',
    name: '',
    link: '',
    description: '',
    img: '',
    isActive: false,
    video: '',
    strength: null,
    height: null,
    weight: null
  };

  constructor(private ServiceService: ServiceService, private router: Router) {}

  submitForm() {
    this.ServiceService.addAvenger(this.newAvenger).subscribe(() => {
      this.router.navigate(['/avengers']);
    });
  }
}