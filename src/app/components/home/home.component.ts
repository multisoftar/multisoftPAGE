import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Router} from '@angular/router';
import { SwiperOptions } from 'swiper';
import { ScriptService } from '@app/services/script.service';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';
import { setTheme } from 'ngx-bootstrap/utils';
import { ChangeDetectorRef } from '@angular/core';
import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  clients:any;
  categories:any;
  product:any;
  swiperOptins:any;
  info: { name: string; description: string; moduless: string; } = {
    name: 'Nombre inicial',
    description: 'Descripción inicial',
    moduless: 'Módulos iniciales'
  };
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
     autoplay: {
      delay: 2000, 
      disableOnInteraction: false, 
    },
  };
 
  configClient: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
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
      delay: 600, 
      disableOnInteraction: false, 
    },
    // Configuración específica para escritorio
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      // Configuración específica para vista móvil
      768: {
        slidesPerView: 2,
      }
    }
  };
  
  configIntegrations: SwiperOptions = {
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
        slidesPerView: 4
      }
    }
  };
  configTestimonial: SwiperOptions = {
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
  

  constructor(
    public infoDetail: Detail,
    public router:Router,
    public script:ScriptService,
    public yeoman:Yeoman,
    public dataApiService: DataApiService,
    private cdr: ChangeDetectorRef,
    public global: GlobalService

    ) {
      
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
    this.getAll();
    this.loadCategories();
    this.getAllProducts();
    this.getAlltest();
    this.getAllRubro();
    this.getAllIntegration();
    this.yeoman.allclient=[];
    this.yeoman.allintegration=[];
    this.yeoman.alltestimony=[];
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
    this.info.name=this.yeoman.allProducts[i].name;
    this.info.description=this.yeoman.allProducts[i].description;
    this.info.moduless=this.yeoman.allProducts[i].moduless;   
    this.infoDetail.info=this.info,
    
    // this.yeoman.preview=this.yeoman.allProducts[i];
    this.router.navigate(['/solutionsdetail']);
  }

    setRoute(par:any){
      let parametro=par;
      this.yeoman.virtualRoute=parametro;
    }
    view(id:any){
      this.yeoman.preview=this.yeoman.allProducts[id];
      this.setRoute('solutions');
    }
    getAllRubro(){
    
      this.dataApiService.getAllRubro().subscribe(response=>{
        this.yeoman.allrubro=response;
      });
    }

    getAllIntegration(){
      this.dataApiService.getAllIntegration().subscribe(response=>{
        this.yeoman.allintegration=response;
      });
    }
    viewPost(post:any){
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

     ngAfterViewInit(): void {
      window.scrollTo(0, 0);
      // Restablecer la configuración del carrusel al volver a la vista
      this.yeoman.configClient = { ...this.yeoman.configOptions, slidesPerView: 6, pagination: true, autoplay: { delay: 700 }, spaceBetween: 5 };
      // Forzar la detección de cambios
      this.cdr.detectChanges();

      }
    ngOnInit(): void {
      window.scrollTo(0, 0);
      console.log('allclient:', this.yeoman.allclient);
    }
  

}
