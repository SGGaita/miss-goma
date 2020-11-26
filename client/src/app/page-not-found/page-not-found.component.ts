import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  pageTitle = "Page not found | Miss Goma"

  constructor(private title: Title) { }

  ngOnInit(): void {

    this.title.setTitle(this.pageTitle)
  }

}
