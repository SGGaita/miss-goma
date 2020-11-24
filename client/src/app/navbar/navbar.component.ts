import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {share} from 'rxjs/operators'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeFragment = this.route.fragment.pipe(share());

  constructor(private viewportScroller: ViewportScroller, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void{
    this.viewportScroller.scrollToAnchor(elementId)
  }

}
