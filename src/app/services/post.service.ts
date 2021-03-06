import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http:Http) { 
    super('https://koncrate.herokuapp.com/api/posts',http);
  }
}
