import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ContestantService} from '../_services/contestant.service'

@Component({
  selector: 'app-contestants',
  templateUrl: './contestants.component.html',
  styleUrls: ['./contestants.component.css']
})
export class ContestantsComponent implements OnInit {
  contestants: [];
  pageTitle: string;

  constructor(private title: Title, private contestantService: ContestantService) { }

  ngOnInit(): void {

    this.pageTitle = "Contestants | Miss Goma"

    this.title.setTitle(this.pageTitle)

    this.contestantService.getContestants()
    .subscribe(data =>{
      this.contestants = data
    })
  }

}
