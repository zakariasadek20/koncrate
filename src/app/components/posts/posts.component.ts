import { PostService } from './../../services/post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() rowsOfposts:number;
  myPosts:any[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.gettAllPosts();
  }
  gettAllPosts(){
    this.postService.getAll(this.rowsOfposts).subscribe(
      posts=>{this.myPosts=posts.data;}
    )
  }
}
