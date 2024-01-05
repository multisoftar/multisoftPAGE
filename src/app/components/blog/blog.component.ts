import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '@app/services/global.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
    public global:GlobalService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  // view(post:any){
  //   this.global.previewPost=post;
  //   this.router.navigate(['blogDetail']);
  // }
  view(post:any){
    this.global.previewPost=post;
    this.global.previewOps=post.body;
    // console.log(this.global.previewPost.body);
    let size = this.global.previewPost.body.ops.length;
    for (let i =0;i <size;i++ ){
      if(this.global.previewPost.body.ops[i].attributes){
        if (this.global.previewPost.body.ops[i].attributes.align) {
          this.global.previewPost.body.ops[i - 1].attributes = {
            ...this.global.previewPost.body.ops[i - 1].attributes,
            align: this.global.previewPost.body.ops[i].attributes.align
          };
          // console.log("final: "+JSON.stringify(this.global.previewPost.body.ops[i - 1].attributes));
        }
     
      }
    }
    this.router.navigate(['blogDetail']);
  }
}
