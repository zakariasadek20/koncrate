import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {

  constructor(private postService:PostService,private routes:ActivatedRoute) { }

  post:any;
  slug:string;
  ngOnInit() {
    // this.routes.paramMap.subscribe(params=>{
    //   this.slug=params.get('slug');
    // })
    this.slug=this.routes.snapshot.params.slug;
    console.log(this.slug);
    
   this.getpost(this.slug);
  }
  getpost(slug:string){
    this.postService.getOne(slug)
    .subscribe(
      post=>{
        this.post=post.data;
        console.log(this.post);
        
      }
    )
  }
}
