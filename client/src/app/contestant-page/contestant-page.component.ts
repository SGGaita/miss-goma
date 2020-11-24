import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contestant-page',
  templateUrl: './contestant-page.component.html',
  styleUrls: ['./contestant-page.component.css']
})
export class ContestantPageComponent implements OnInit {

  pageTitle: string

  constructor(private title: Title) { }

  ngOnInit(): void {

    this.pageTitle = "Contestant 1 | Miss Goma"

    this.title.setTitle(this.pageTitle)
  }

}
