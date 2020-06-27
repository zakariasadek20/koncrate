import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  service:any;
  slug:string;
  constructor(private serviceService:ServiceService,private routes:ActivatedRoute) { }

  ngOnInit() {
    this.slug=this.routes.snapshot.params['slug'];
    this.getOne(this.slug);
  }

  getOne(slug:string){
    this.serviceService.getOne(slug).subscribe(
      service=>{
        this.service=service.data;
      }
    );
  }

}
