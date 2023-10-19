import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';


@NgModule({
  declarations: [
    IndustriesComponent
  ],
  imports: [
    CommonModule,
    IndustriesRoutingModule
  ],
  providers: [DataApiService, Yeoman]
})
export class IndustriesModule { }
