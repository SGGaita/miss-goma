import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Contestant } from '../_models/contestant';

@Injectable({
  providedIn: 'root'
})
export class ContestantService {

  contestants: Contestant[] = [{id:1, fname: "Contestant", lname:"Name1", age: 24, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non unde omnis alias nemo, optio perspiciatis dolores, laborum velit deleniti delectus harum molestias, consequuntur minima fuga dignissimos earum nesciunt reiciendis?", image:"contestant1.png",images:""},
  {id:2, fname: "Contestant", lname:"Name2", age: 23, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non unde omnis alias nemo, optio perspiciatis dolores, laborum velit deleniti delectus harum molestias, consequuntur minima fuga dignissimos earum nesciunt reiciendis?", image:"contestant2.png",images:""},
  {id:3, fname: "Contestant", lname:"Name2", age: 20, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non unde omnis alias nemo, optio perspiciatis dolores, laborum velit deleniti delectus harum molestias, consequuntur minima fuga dignissimos earum nesciunt reiciendis?", image:"contestant3.png",images:""}]

  constructor() { }


  getContestants(): Observable<any>{
    return of(this.contestants)
  }


  getContestantById(id: number){
    return of(this.contestants.filter(x=>{
       return x.id == id;
    }))
  } 
}
