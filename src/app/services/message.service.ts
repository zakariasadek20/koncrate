import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends DataService {

  constructor( http:Http) {
    super('https://koncrate.herokuapp.com/api/messages',http);
   }
}
