import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContestantService } from '../_services/contestant.service';
import * as $ from 'jquery'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pageTitle = "Dashboard | Miss Goma" 
  contestants: any;

  constructor( private title: Title, private contestantService: ContestantService) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle)

   

    this.contestantService.getAllContestants(20)
    .subscribe(data =>{
      console.log("Contestants", data.contestants)
      this.contestants = data.contestants

    })
  }

  refresh(){
    this.ngOnInit()
  }

  toggle(){
    $('.dropdown-toggle').dropdown()
  }

}
