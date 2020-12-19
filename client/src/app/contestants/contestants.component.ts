import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {ContestantService} from '../_services/contestant.service'

@Component({
  selector: 'app-contestants',
  templateUrl: './contestants.component.html',
  styleUrls: ['./contestants.component.css']
})

export class ContestantsComponent implements OnInit {
  contestants: [];
  pageTitle: string;

  constructor(private title: Title, private router: Router, private contestantService: ContestantService) { }

  ngOnInit(): void {

    this.pageTitle = "Contestants | Miss Goma 2021"

    this.title.setTitle(this.pageTitle)

    this.contestantService.getAllContestants(30)
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

  //cast vote
  castVote(id:number){
    console.log("This id is", id)
    setTimeout(()=>{
      this.router.navigateByUrl('./thank-you')
      console.log("This id is after 3 seconds", id)
    },5000)
  }

  vote(){}

}
