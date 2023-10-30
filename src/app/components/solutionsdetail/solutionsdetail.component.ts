import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Router } from '@angular/router';
import { Detail } from '@services/detail.service';
@Component({
  selector: 'app-solutionsdetail',
  templateUrl: './solutionsdetail.component.html',
  styleUrls: ['./solutionsdetail.component.css']
})
export class SolutionsdetailComponent implements OnInit {
  categories:any;
  products:any=[];
  product:any={};
  localDetail:any=[];
  constructor(
    public infoDetail: Detail,
    public yeoman: Yeoman,
    public dataApiService: DataApiService,
    public router: Router
  ) {
this.localDetail=this.infoDetail;
    this.product=this.product
    this.loadCategories();
    // console.log("seted: "+JSON.stringify(this.yeoman.preview.name));
   }
   
  
  setCategory(i:any){
    let indice= i;
    this.dataApiService.getAllCategory().subscribe(
     response => {
       this.categories = response;}
     )
   }
 
   loadCategories() {
    this.dataApiService.getAllCategory().subscribe(
      (response: any) => { // Asegúrate de que response sea del tipo correcto
        this.categories = response;
  
        // Ordena las categorías por la propiedad 'name'
        this.categories.sort((a: any, b: any) => a.name.localeCompare(b.name));
  
        console.log("Categorías cargadas y ordenadas:", this.categories);
      },
      error => {
        console.error("Error al cargar las categorías:", error);
      }
    );
  }
  
  ngOnInit(): void {
    
    console.log("lo que viene: ",JSON.stringify(this.localDetail.info))
    window.scrollTo(0, 0);
  }
}
