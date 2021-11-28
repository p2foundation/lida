import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment.prod";
// import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AirtimeTopupService {
    private one4All: string = environment.lidaUrl
    private localURL: string = environment.lidaUrl;

    constructor(
        private readonly http: HttpClient
    ) { }

    public buyAirtimeTopup(mData: any): Observable<any> {
        console.log('buyAirtime params ==>', mData);
        return this.http
            .post<any>(`${this.one4All}/airtime/topups`, mData)
            .pipe(
                tap(_res => this.log(`AirtimeService: airtime credit`)),
                catchError(this.handleError('AirtimeService', []))
            );
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message);
    }
}
