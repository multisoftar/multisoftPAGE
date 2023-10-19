import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Butler } from '@services/butler.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients:any;
  categories:any;
   
   selectedCategory:any;
  constructor(
    public yeoman: Yeoman,
    public dataApiService: DataApiService,
    public _butler:Butler
  ) {
    this.getAll();
    this.loadCategories();
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
  // setCategory(i:any){
  //   let indice= i;
  //   this.dataApiService.getAllCategory().subscribe(
  //    response => {
  //      this.categories = response;}
  //    )
  //  }
 
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

  setCategory(category: any) {
  let id = category.idCategory;
  console.log("category recibida: "+id)
  for (let i = 0; i < this.categories.length; i++) {
    if (this.categories[i].idCategory === id) {
      this.yeoman.categorySelected = this.categories[i].idCategory;
      // console.log("id Category: "+this.yeoman.categorySelected);
      // this.yeoman.virtualRoute = "shop";
      // this.showCategoryDropdown = false;
      break; // Terminamos el bucle ya que hemos encontrado el objeto
    }
  }
}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
