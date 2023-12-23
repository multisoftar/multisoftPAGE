import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';
import { Filter } from '@app/services/filters.service';
import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit ,AfterViewInit{

  // allModules: any = [];

  constructor(
    public filter: Filter,
    public infoDetail: Detail,
    public yeoman: Yeoman,
    public global:GlobalService,
    public dataApiService: DataApiService
  ) {
    // this.getAllRubro();
  }
  getAllRubro() {
    this.dataApiService.getAllRubro().subscribe(response => {
      this.yeoman.allrubro = response;
    });
  }

  ngAfterViewInit(): void {

    // console.log("lo que viene: ",this.filter.idCategorySelected)
    //  this.global.loadModules();
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  


}
