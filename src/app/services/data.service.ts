import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { Injectable } from '@angular/core';
import{ Http, Response } from '@angular/http';
import {catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url:string,private http:Http) { }

  getAll(limit?:number):Observable<any>{
   return this.http.get(this.url+'/'+limit).pipe(
     catchError(this.handelError),map(response=>response.json()));
  }
  getOne(slug:string):Observable<any>{
    return this.http.get(this.url+"/show/"+slug).pipe(
      catchError(this.handelError),map(response=>response.json())
    );
  }
  create(resource):Observable<any>{
    return this.http.post(this.url,resource)
    .pipe(catchError(this.handelError),map(response=>response.json()));
  }
  private handelError(error:Response){
    if(error.status===400){
      return Observable.throw(new BadInput);
    }
    if(error.status===404){
      return Observable.throw(new NotFoundError);
    }
    return Observable.throw(new AppError);
  }
}
