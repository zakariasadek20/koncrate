import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  rowsPosts:number=4;
  rowsServices:number=3;
  constructor() { }

  ngOnInit() {
   
  }
  
}
