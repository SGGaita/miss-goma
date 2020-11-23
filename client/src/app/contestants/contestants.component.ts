import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contestants',
  templateUrl: './contestants.component.html',
  styleUrls: ['./contestants.component.css']
})
export class ContestantsComponent implements OnInit {

  contestants = [{id:1}, {id:2},{id:3}]

  constructor() { }

  ngOnInit(): void {
  }

}
