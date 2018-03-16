import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {Car} from './domain/car';

@Injectable()
export class CarService {

  public API = '//localhost:8080';
  public CAR_API = this.API + '/cars';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Car[]>('//localhost:8080/cool-cars');
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car['href']) {
      result = this.http.put(car.href, car);
    } else {
      result = this.http.post(this.CAR_API, car);
    }
    return result;
  }

  get(id: string) {
    return this.http.get(this.CAR_API + '/' + id);
  }

  remove(id: any) {
    return this.http.delete(this.CAR_API  + '/' + id);
  }
}
