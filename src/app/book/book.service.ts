import { Injectable } from '@angular/core';
import { Book } from './book';

import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, config, of } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { error } from '@angular/compiler/src/util';
import { log } from 'util';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl: any;
  constructor(private http: HttpClient) {
    this.apiUrl = '/api';
    console.log(this.apiUrl);
  }

  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl + '/books', book)
      .pipe(
        catchError(error)
      );
  }

  getBooks (): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/books')
      .pipe(
        catchError(error)
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
// private handleError<T> (operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {

//     // TODO: send the error to remote logging infrastructure
//     console.error(error); // log to console instead

//     // TODO: better job of transforming error for user consumption
//     log(`${operation} failed: ${error.message}`);

//     // Let the app keep running by returning an empty result.
//     return of(result as T);
//   };
// }
}
