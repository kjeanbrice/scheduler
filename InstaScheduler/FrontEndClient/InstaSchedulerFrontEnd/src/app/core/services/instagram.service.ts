import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retryWhen, delay, take, map, catchError, concatMap, scan, delayWhen } from 'rxjs/operators';
import { throwError, Observable, concat, of, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  static readonly BASE_URL: string = document.getElementById('baseurl-asp').innerHTML;

  constructor(private http: HttpClient) { }

  createPost(file: File, content: string) {

    const formparams = new FormData();
    formparams.append(file.name, file);
    formparams.append('content', content);


    let paramsOpt = new HttpParams();
    paramsOpt = paramsOpt.set('content', content);


    return this.http.post(InstagramService.BASE_URL + '/api/instagram/createpost', formparams).pipe(
      retryWhen((errors) => {
        return errors.pipe(
          delay(3000),
          concatMap((error, index) => {
            if (index === 1) {
              return throwError(error);
            }
            return of(null);
          })

        );
      }),
      catchError((err: any) => { console.log(err.status); return this.errorHandler(err); })
    );



  }


  private errorHandler(err: any) {
    if (err) {
      return throwError(err);
    }
    return throwError('Server Error');
  }
}
