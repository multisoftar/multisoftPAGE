import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router} from '@angular/router';
import { SwiperOptions } from 'swiper';
import { ScriptService } from '@app/services/script.service';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  clients:any;
  categories:any;
  product:any;
  
 
  config1: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };
  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
           768: {
        slidesPerView: 2
      }
    }
  };
  config2: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 2,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 800, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      768: {
        slidesPerView: 6
      }
    }
  };
  
  

  constructor(
    public router:Router,
    public script:ScriptService,
    public yeoman:Yeoman,
    public dataApiService: DataApiService

    ) {
      this.script.load(
        'modernizr',
        'jquery',
        'bootstrap-bundle',
        'owl-carousel',
        'isotope',
        'slick',
        'magnific-popup',
        'meanmenu',
        'metisMenu',
        'nice-select',
        'ajax-form',
        'wow',
        'counterup',
        'waypoints',
        'scrollUp',
        'images',
        'magnific-popup',
        'easypiechart',
        'tilt',
        'main'
      );
    this.getAll();
    this.loadCategories();
    this.getAllProducts();
    this.getAlltest();
    this.getAllRubro();
     }
     
    
     setClient(i:any){
      let indice= i;
      this.dataApiService.getAllClient().subscribe(
       response => {
         this.clients = response;}
       )
     }
     getAll(){
   
      this.dataApiService.getAllClient().subscribe(response=> {
        this.yeoman.allclient=response;
     
      });
    }
    getAlltest(){
   
      this.dataApiService.getAllTestimony().subscribe(response=> {
        this.yeoman.alltestimony=response;
     
      });
    }
    setCategory(i:any){
      let indice= i;
      this.dataApiService.getAllCategory().subscribe(
       response => {
         this.categories = response;}
       )
     }
   
     loadCategories(){
       this.dataApiService.getAllCategory().subscribe(
         response => {
           this.categories = response;
           console.log("Categorías cargadas:", this.categories);
         },
         error => {
           console.error("Error al cargar las categorías:", error);
         }
       );
     }
     getAllProducts(){
    
      this.dataApiService.getAllProducts().subscribe(response=>{
        this.yeoman.allProducts=response;
      
        
      });
    }
    
    setPreview(i:any){
      this.yeoman.preview=this.yeoman.allProducts[i];
      this.router.navigate(['solutionsdetail']);
    }

    setRoute(par:any){
      let parametro=par;
      this.yeoman.virtualRoute=parametro;
    }
    view(id:any){
      this.yeoman.preview=this.yeoman.products[id];
      this.setRoute('solutions');
    }
    getAllRubro(){
    
      this.dataApiService.getAllRubro().subscribe(response=>{
        this.yeoman.allrubro=response;
      
        
      });
    }

    

     ngAfterViewInit(): void {
    }
  

}
