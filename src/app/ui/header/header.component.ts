import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allProducts:any;
  categories:any;
  info: { name: string; description: string; moduless: string; } = {
    name: 'Nombre inicial',
    description: 'Descripción inicial',
    moduless: 'Módulos iniciales'
  };
  constructor(
    public infoDetail: Detail,
    public router: Router,
    public yeoman: Yeoman,
    public dataApiService: DataApiService
    ) { 
      this.loadCategories();
    }
    setCategory(i:any){
      let indice= i;
      this.dataApiService.getAllCategory().subscribe(
       response => {
         this.categories = response;}
       )
     }   
    /*  loadCategories(){
       this.dataApiService.getAllCategory().subscribe(
         response => {
           this.categories = response;
           console.log("Categorías cargadas:", this.categories);
         },
         error => {
           console.error("Error al cargar las categorías:", error);
         }
       );
     } */
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
    
      setPreview(i:any){
       this.yeoman.preview=this.yeoman.allrubro[i];
       this.info=this.yeoman.allrubro[i];
     this.infoDetail.info=this.info,
       this.router.navigate(['industries']);
     }
     
    
  ngOnInit(): void {
    
  }

}
