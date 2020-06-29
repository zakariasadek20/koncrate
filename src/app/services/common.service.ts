import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends DataService {

  constructor(http:Http) {
    super('https://koncrate.herokuapp.com/api/page',http)
   }
}
