import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { Car } from '../shared/car/domain/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[];
  cols: any[];
  car: Car;

  displayDialog: boolean;
  newCar: boolean;


  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(cars => this.cars = cars);

    this.cols = [
      {field: 'id', header: 'ID'},
      {field: 'name', header: 'Name'}
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new Car();
    this.displayDialog = true;
  }

  save() {
    if(this.newCar) {
      this.carService.save(this.car);
      this.carService.getAll().subscribe(cars => this.cars = cars);
      this.car = null;
      this.displayDialog = false;
    }
  }
}
