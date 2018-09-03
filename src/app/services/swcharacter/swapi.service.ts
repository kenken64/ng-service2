import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getSWCharacterInfo(changes): Observable<any>{
    return this.http.get(`https://swapi.co/api/people/?search=${changes}`);
  }

  addSWCharacter(swChar){

  }

  updateSWCharacter(swChar){

  }

  deleteSWCharacter(swChar){

  }

  getSWCharacterByBloodType(swChar){

  }
}
