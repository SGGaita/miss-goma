import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  pageTitle = "HOME | Miss Goma 2021"

  constructor(private title: Title) { }

  ngOnInit(): void {

    this.title.setTitle(this.pageTitle)
  }

}
