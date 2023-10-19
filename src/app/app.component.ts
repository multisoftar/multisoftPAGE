import { Component } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multisoft';
  constructor(
    public script: ScriptService
  )
  {
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
      'images',
      'magnificPopup2',
      'easypiechart',
      'tilt',
      'plugins',
      'main'
                )
          .then(data => {
            // this.yeoman.isLoaded=true;
          })
          .catch(error => console.log(error)); 
    setTheme('bs5');
  }
  
 ngAfterViewInit(): void {}
}
