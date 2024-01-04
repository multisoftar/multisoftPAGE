import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '@app/services/global.service';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(
    public  global:GlobalService,
    public yeoman:Yeoman,
    public router:Router
  ) { }
  isString(value: any): boolean {
    return typeof value === 'string';
  }
  ngOnInit(): void {
  }
  view(post:any){
    this.global.previewPost=post;
    this.global.previewOps=post.body;
    this.global.previewPost.body=JSON.parse(this.global.previewPost.body);
    // console.log("body of opst"+JSON.parse(this.global.previewOps));
    console.log(this.global.previewPost.body);
  }

}
