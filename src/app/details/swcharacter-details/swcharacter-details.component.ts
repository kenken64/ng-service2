import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swcharacter/swapi.service' ;
@Component({
  selector: 'app-swcharacter-details',
  templateUrl: './swcharacter-details.component.html',
  styleUrls: ['./swcharacter-details.component.css']
})
export class SwcharacterDetailsComponent implements OnInit {
  
  private results = [];

  constructor(private swApiSvc: SwapiService) { }

  ngOnInit() {
    this.swApiSvc.getSWCharacterInfo('luke')
        .subscribe((data:any)=>{
          console.log(data);
          this.results = data.results;
        });
  }

}
