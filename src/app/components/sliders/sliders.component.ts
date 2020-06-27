import { SlideService } from './../../services/slide.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  constructor(private slidedervice:SlideService) { }

  mySliders:any[];

  ngOnInit() {
    this.getAllSlides();
  }
  getAllSlides(){
    this.slidedervice.getAll().subscribe(
      slides=>{this.mySliders=slides.data;
      console.log(this.mySliders);
      }
    )
  }
}
