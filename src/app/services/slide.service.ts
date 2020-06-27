import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SlideService extends DataService {

  constructor(http:Http) {
    super('http://localhost:8000/api/sliders',http);
   }


}
