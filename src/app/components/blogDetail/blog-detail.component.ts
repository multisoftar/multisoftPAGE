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
    // this.global.previewPost.body=JSON.parse(this.global.previewPost.body);
    console.log(this.global.previewPost.body);
    let size = this.global.previewPost.body.ops.length;
    for (let i =0;i <size;i++ ){
      if(this.global.previewPost.body.ops[i].attributes){
        if (this.global.previewPost.body.ops[i].attributes.align) {
          this.global.previewPost.body.ops[i - 1].attributes = {
            ...this.global.previewPost.body.ops[i - 1].attributes,
            align: this.global.previewPost.body.ops[i].attributes.align
          };
          console.log("final: "+JSON.stringify(this.global.previewPost.body.ops[i - 1].attributes));
        }
        // if(this.global.previewPost.body.ops[i].attributes.align){
        //   console.log("conseguido: "+this.global.previewPost.body.ops[i].attributes.align);
          // this.global.previewPost.body.ops[i-1].attributes.push(this.global.previewPost.body.ops[i].attributes);
          // this.global.previewPost.body.ops[i-1].attributes = Object.assign({}, this.global.previewPost.body.ops[i-1].attributes, this.global.previewPost.body.ops[i].attributes);
        // }
      }
    }
  }
}
