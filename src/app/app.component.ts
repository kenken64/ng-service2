import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { SwapiService } from './services/swcharacter/swapi.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-observable';
  
  searchForm = new FormGroup(
    {
      keyword: new FormControl(''),
    }
  )
  private results = [];

  // need to use the http client service init here
  constructor(private swApiSvc: SwapiService) {}

  ngOnInit(){
    const termValue = this.searchForm.get('keyword');
    console.log(termValue);
    let debounce = termValue.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )

    debounce.subscribe(changes =>{
      console.log(changes);
      this.swApiSvc.getSWCharacterInfo(changes)
        .subscribe((data:any)=>{
          console.log(data);
          this.results = data.results;
        });
    })
  }
  //
  
}
