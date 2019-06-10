import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retryWhen, delay, take, map, catchError, concatMap, scan, delayWhen } from 'rxjs/operators';
import { throwError, Observable, concat, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly BASE_URL: string = document.getElementById('baseurl-asp').innerHTML;

  constructor(private htttp: HttpClient) { }

  isAuth(): Observable<boolean> {


    return this.htttp.get<boolean>(AuthService.BASE_URL + '/api/instagram/isauth').pipe(
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


  login(password: string, username: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('username', username);
    params = params.set('password', password);

    return this.htttp.post(AuthService.BASE_URL + '/api/instagram/auth', params).pipe(
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
      map((response: Response) => {
        console.log('Auth: Login');
        return response;
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
