import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { setTheme } from 'ngx-bootstrap/utils';
import { Router} from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';
import { GlobalService } from './services/global.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'multisoft';
  allProducts:any;
  categories:any;
  info: { name: string; description: string; moduless: string; } = {
    name: 'Nombre inicial',
    description: 'Descripción inicial',
    moduless: 'Módulos iniciales'
  };
  
  constructor(
    public script: ScriptService,
    public infoDetail: Detail,
    public router: Router,
    public yeoman: Yeoman,
    public dataApiService: DataApiService,
    public global: GlobalService
  )
  {
    this.loadCategories();
    this.script.load(
      'jquery',
      'bootstrap',
      'owlCarousel',
      'isotope',
      'slick',
      'magnificPopup',
      'meanmenu',
      'metisMenu',
      'niceSelect',
      'ajaxForm',
      'wow',
      'counterup',
      'waypoints',
      'scrollUp',
      'imageslo',
      'magnificPopup2',
      'easypiechart',
      'tilt',
      'plugins',
      'main'
                )
                .then(data => {})
                .catch(error => console.log(error));
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
  
 ngAfterViewInit(): void {
 
 }
}
