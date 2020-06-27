import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  slug:string='propos';
  page:any;
  constructor(private commonService:CommonService,private routes:ActivatedRoute) { }

  ngOnInit() {
   // this.slug=this.routes.snapshot.params['slug'];
   this.getPage(this.slug);
  }
  getPage(slug:string){
    this.commonService.getOne(slug).subscribe(
      page=>{
        this.page=page.data;
      }
    )
  }
}
