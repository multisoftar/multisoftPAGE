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

}
