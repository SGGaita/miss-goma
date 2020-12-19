import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgbDate, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
} 

@Component({
  selector: 'app-admin-contestant-create',
  templateUrl: './admin-contestant-create.component.html',
  styleUrls: ['./admin-contestant-create.component.css'],
})


export class AdminContestantCreateComponent implements OnInit {
  @ViewChild(NgbDatepicker) d: NgbDatepicker
  pageTitle = 'New Contestant | Miss Goma';

  contestantsForm: FormGroup;
  submitting: boolean = false;

  selectedImage: ImageSnippet;
  imagePreview: string;
  submitted = false
  errorMsg: string;
  successMsg: string;
  fileData: File;

  constructor(private fb: FormBuilder, private title: Title, private http: HttpClient) {}

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);

    //Instantiat form
    this.contestantsForm = this.fb.group({
      contestant_fname: [null],
      contestant_lname: [null],
      contestant_location: [null],
      contestant_description: [null],
      image: [null],
      date_of_birth: [null],
    });
  }

  //get form controls
  get f() {
    return this.contestantsForm.controls;
  }


  processImage(imageID: any) {
    const file: File = imageID.files[0];
    this.fileData = file
    var fileExtension = '.' + file.name.split('.').pop();
   
    console.log("Date now", Date.now())
    console.log("this passport image extension", fileExtension)
    console.log("member" + '-' + Date.now() + '.' + fileExtension)
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {

      this.selectedImage = new ImageSnippet(event.target.result, file);
    })
    reader.readAsDataURL(file);
    
  }



  //submit contestant
  submit() {

    console.log("Date",this.contestantsForm.value.date_of_birth)

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const formData = new FormData();
    
    formData.append('contestant_fname',this.contestantsForm.value.contestant_fname)
    formData.append('contestant_lname',this.contestantsForm.value.contestant_lname)
    formData.append('contestant_location',this.contestantsForm.value.contestant_location)
    formData.append('contestant_description',this.contestantsForm.value.contestant_description)
    formData.append('date_of_birth',this.contestantsForm.value.date_of_birth)
    formData.append('image', this.fileData);

  
    this.http.post<any>('/api/contestant/', formData, { headers: headers })
      .subscribe(res => {
        console.log("From server", res)
        this.successMsg = "Contestant submit successfully";
        this.ngOnInit()
        
      },err => this.errorMsg = err
      )
    /** 
    console.log('Summitted');
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
    }, 5000); */
  }


  
}
