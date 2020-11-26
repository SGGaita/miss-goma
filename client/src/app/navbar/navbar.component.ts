import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {share} from 'rxjs/operators'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeFragment = this.route.fragment.pipe(share());

  constructor(private viewportScroller: ViewportScroller, public route: ActivatedRoute, public translate: TranslateService) {
    translate.addLangs(['English','French'])
    translate.setDefaultLang('French')
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|French/) ? browserLang : 'French');
   }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void{
    this.viewportScroller.scrollToAnchor(elementId)
  }

}
