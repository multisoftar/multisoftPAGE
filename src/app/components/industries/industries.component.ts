import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {
  rubros:any;
  localDetail:any=[];
  constructor(
    public infoDetail: Detail,
    public yeoman: Yeoman,
    public dataApiService: DataApiService
  ) {
    this.getAllRubro();
    this.localDetail=this.infoDetail;
   }
  getAllRubro(){
    
    this.dataApiService.getAllRubro().subscribe(response=>{
      this.yeoman.allrubro=response;
    
      
    });
  }
  ngOnInit(): void {
    console.log("lo que viene: ",JSON.stringify(this.localDetail.info))
    window.scrollTo(0, 0);
  }

}
