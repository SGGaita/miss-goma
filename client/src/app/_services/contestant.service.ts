import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { ContestantModelServer } from '../_models/contestant';

@Injectable({
  providedIn: 'root'
})
export class ContestantService {

  
  private server_url = environment.serverURL

  constructor(private http:HttpClient) { }

  // retrieving restaurant
  getAllContestants(numberofResults: number ):Observable<any> {
    return this.http.get(this.server_url +'/contestants', {
      params:{
        limit: numberofResults.toString()
      }
    }).pipe(catchError(this.handleError));
  }

  //retrieving contestants by ID
  getSingleContestant(contestantId: Number): Observable<ContestantModelServer> {
    return this.http
      .get<ContestantModelServer>(this.server_url + '/contestant/' + contestantId)
      .pipe(catchError(this.handleError));
  }
  

  
  //capture errors
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error:', errorResponse.error.message);
    } else {
      console.error('Server Side Error:', errorResponse);
    }
    return throwError('There is an error with the sermon. Please notify your systems admin if it persists')

  }
  
}
