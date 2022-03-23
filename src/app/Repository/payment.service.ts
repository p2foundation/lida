import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment.prod";
// import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    private awServer: string = environment.awServer;
    private vercelServer: string = environment.vercelServer;
    // private localURL: string = environment.local;

    constructor(
        private readonly http: HttpClient
    ) { }

    public makePayment(mData: any): Observable<any> {
        return this.http.post(`${this.awServer}/pscardpayment/inline`, mData)
            .pipe(
                tap((_res) => this.log(`paymentService: airtime credit`)),
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
