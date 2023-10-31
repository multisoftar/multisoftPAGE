import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Butler } from '@services/butler.service';
import { categoryFilter } from '@app/services/categoryFilter.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients:any;
  categories:any;
  category: any= [];
   
   selectedCategory:any;
  constructor(
    public categoryFilter: categoryFilter,
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
      console.log(this.yeoman.allclient);
      this.yeoman.allclient = this.yeoman.allclient.map((client:any) => {
        // Agregar "c" a la propiedad 'id' de cada objeto
        client.idNew = 'c' + client.idCategory;
        return client;
      });
    });
   
  }
  /*  setCategory(i:any){
     let indice= i;
     this.dataApiService.getAllCategory().subscribe(
      response => {
        this.categories = response;}
      )
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

  setCategory(i: any) {
    this.categoryFilter.categorySelected.id="c"+this.categories[i].id;
    console.log("selected", this.categoryFilter.categorySelected);
    console.log("comparando ["+JSON.stringify(this.categoryFilter.categorySelected)+"" )
    this.categoryFilter.filtered=true;
}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
