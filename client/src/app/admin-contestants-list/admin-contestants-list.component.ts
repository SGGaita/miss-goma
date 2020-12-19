import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContestantService } from '../_services/contestant.service';

@Component({
  selector: 'app-admin-contestants-list',
  templateUrl: './admin-contestants-list.component.html',
  styleUrls: ['./admin-contestants-list.component.css']
})
export class AdminContestantsListComponent implements OnInit {
  pageTitle = 'Contestants list | Miss Goma';

  contestants: any

  constructor(private title: Title, private contestantService: ContestantService) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle)

    this.contestantService.getAllContestants(10)
    .subscribe(data =>{
      console.log("Contestants", data.contestants)
      this.contestants = data.contestants
    })
  }


  getAge(birthDate){
    if (birthDate){
      var ageMS = Date.parse(Date()) - Date.parse(birthDate);
    var age = new Date();
    age.setTime(ageMS);
    var ageYear = age.getFullYear() -1970;
    return ageYear
    } else{
      return ageYear = 0
    }
     
  } 

}
