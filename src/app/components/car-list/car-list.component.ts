import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../../../app/services/car.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importez RouterModule

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports:[FormsModule,CommonModule,RouterModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  filteredCars: Car[] = [];
  searchFilters = {
    date: '',
    type: '',
    marque: '',
    etat:'',
    tarif: null,
  };

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Charger toutes les voitures
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
      this.filteredCars = data;
    });
  }

  // Rechercher des voitures
  searchCars(): void {
    const filters = {
      type: this.searchFilters.type,
      marque: this.searchFilters.marque,
      tarif: this.searchFilters.tarif,
      etat: this.searchFilters.etat,
    };

    this.carService.searchCars(filters).subscribe((data) => {
      this.filteredCars = data;
    });
  }

  viewDetails(car: Car): void {
    alert(`Détails de la voiture : ${car.marque} ${car.modele}`);
  }
  
  reserveCar(car: Car): void {
    alert(`Réservation effectuée pour : ${car.marque} ${car.modele}`);
  }
  
}
