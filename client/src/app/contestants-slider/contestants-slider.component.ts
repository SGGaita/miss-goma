import { Component, OnInit } from '@angular/core';
import {ContestantService} from '../_services/contestant.service'

@Component({
  selector: 'app-contestants-slider',
  templateUrl: './contestants-slider.component.html',
  styleUrls: ['./contestants-slider.component.css']
})
export class ContestantsSliderComponent implements OnInit {

  contestants: any

  constructor(private contestantService: ContestantService) { }

  ngOnInit(): void {
    this.contestantService.getAllContestants(10)
    .subscribe(data =>{
      console.log("Contestants", data.contestants)
      this.contestants = data.contestants
      this.contestants.filter(x=>{
         return x.status = 1
      })
    })
    
  }

}
