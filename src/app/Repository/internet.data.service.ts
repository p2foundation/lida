import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class InternetDataService{
    private awServer: string = environment.awServer;

    constructor(
        private readonly http: HttpClient
    ) { }

    public internetBundleList(iData: any): Observable<any>{
        console.log('DATA BUNDLELIST service - params ==>', iData);
        return this.http
            .post<any>(`${this.awServer}/billpayments/bundlelist`, iData)
            .pipe(
                tap(_res => console.log(`DATA BUNDLELIST response: ...`)),
                catchError((_err) => {
                    console.error(`DATA BUNDLELIST error: ${_err}`)
                    throw new Error(_err);
                })
            );
    }

    public buyInternetData(iData: any): Observable<any>{
        console.log('BUY INTERNET DATA service - params ==>', iData);
        return this.http
            .post<any>(`${this.awServer}/billpayments/internetdata`, iData)
            .pipe(
                tap(_res => this.log(`InternetDataService: buy data`)),
                catchError(this.handleError('InternetDataService', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            alert(error);
            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message);
    }
}