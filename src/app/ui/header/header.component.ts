import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';
import { Filter } from '@app/services/filters.service';
import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allProducts:any;
  categories:any;
  idCategoryFiltered:string="";
  constructor(
    public filter:Filter,
    public infoDetail: Detail,
    public router: Router,
    public yeoman: Yeoman,
    public dataApiService: DataApiService,
    public global: GlobalService
    ) { 
      this.global.loadCategories();
    }
    setCategory(i:any){
      let indice= i;
      this.dataApiService.getAllCategory().subscribe(
       response => {
         this.categories = response;}
       )
     }   
 
    
    
 
 


    
  ngOnInit(): void {
    
  }

}
