import { ServiceService } from './../../services/service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() rowsOfServices:number;
  myservices:any[];
  constructor(private serviceServices:ServiceService) { }

  ngOnInit() {
    this.getAllServices();
  }
  getAllServices(){
    this.serviceServices.getAll(this.rowsOfServices)
    .subscribe(services=>
      {
        this.myservices=services.data;
      });
  }
}
