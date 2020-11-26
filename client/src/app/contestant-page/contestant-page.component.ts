import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { ContestantService } from '../_services/contestant.service';

@Component({
  selector: 'app-contestant-page',
  templateUrl: './contestant-page.component.html',
  styleUrls: ['./contestant-page.component.css']
})
export class ContestantPageComponent implements OnInit {

  pageTitle: string
  contestant: any;
  id: any;
  fname: any;
  lname: any;
  image: any;
  age: any;
  description: any;

  constructor(private route: ActivatedRoute,private title: Title, private contestantService: ContestantService) { }

  ngOnInit(): void {

    
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(contId => {
      this.id = contId;

    this.contestantService.getContestantById(this.id).subscribe(data=>{
      this.contestant = data
      this.fname = this.contestant.map(x=>x.fname)
      this.lname = this.contestant.map(x=>x.lname)
      this.description = this.contestant.map(x=>x.description)
      this.image = this.contestant.map(x=>x.image)
      this.age = this.contestant.map(x=>x.age)

      //set page title
      this.pageTitle = this.fname + " " + this.lname + " |" + " Miss Goma 2021"
      this.title.setTitle(this.pageTitle);
    })})
  }

}
