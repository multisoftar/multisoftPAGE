import { Injectable } from '@angular/core';
import { DataApiService } from '@services/data-api.service';
import { Filter } from '@services/filters.service';
import { SwiperOptions } from 'swiper';
@Injectable({
  providedIn: 'root'
})

export class Yeoman {
  loaded: any = false;
  previewnew:any={};
  configOptions: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  configClient: SwiperOptions = {
    ...this.configOptions,
    slidesPerView: 6,
    pagination: true,
    autoplay: { delay: 700 },
    spaceBetween: 5
  };
 
  filtered=false;
  view:string='grid';
  preview:any={};
  user:any;
  all:any=[];
  // categorySelected:any={};
  allProducts:any=[];
  existencias:any=[];
  existenciasSize:number=0;
  allCategoriesSize:number=0;
  allClientsSize:number=0;
  virtualRoute:any="dashboard";
  pop:Boolean=false;
  data:any={};
  idCategoryFiltered:string="";
  products:any={};
  product:any={};
  categories:any=[];
  category:any={};
  filteredModules:any=[]
  allcategory:any=[];
  integration:any={};
  allintegration:any=[];
  /* clients: any = []; */
  clients:any=[]; 
  client:any=[];
  allclient:any=[];
  testimony:any=[];
  alltestimony:any=[];
  rubro:any={};
  allrubro:any=[];
  modules:any;
  allModules:any;
  currency:number=1;
  config: {
    clientSelected:number;
  } = {clientSelected:-1} ;
  origin: {
    name: string;
    restUrl: string;
    GQLUrl: string;
  } = {
    name: "default",
    restUrl: "https://db.buckapi.com:9023",
    GQLUrl: "<origin GQL url>",
  };


}
