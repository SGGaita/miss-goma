import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Contestant } from '../_models/contestant';

@Injectable({
  providedIn: 'root'
})
export class ContestantService {

  contestants: Contestant[] = [{id:1, fname: "Contestant", lname:"Name1", age: 24, description:"", image:"contestant1.png",images:""},
  {id:2, fname: "Contestant", lname:"Name1", age: 23, description:"", image:"contestant2.png",images:""},
  {id:3, fname: "Contestant", lname:"Name2", age: 20, description:"", image:"contestant3.png",images:""}]

  constructor() { }


  getContestants(): Observable<any>{
    return of(this.contestants)
  }
}
