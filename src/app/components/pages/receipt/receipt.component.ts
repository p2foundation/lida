import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AirtimeTopupService } from 'src/app/repository/airtime.service';
import { Router } from '@angular/router';
import { InternetDataService } from 'src/app/repository/internet.data.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  public paramsObject: any = {};
  public topupValues: any = {};
  
  public airOkResponse: any = {
    status: '',
    message: '',
    reason: '',
    trxn: '',
    status_code: '',
    local_trxn_code: '',
    balance_before: '',
    balance_after: '',
    network: '',
    price: ''
  }

  public payResponse: any = {
    "status": "Access Denied",
    "code": "040",
    "reason": "You are not allowed to transact with MTN (Mtn)",
    "r_switch": "MTN",
    "subscriber_number": "0244588584",
    "amount": "1",
    "channel": "mobile",
    "currency": "GHS",
    "transaction_id": "861164120621"
  }

  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private airtimeService: AirtimeTopupService,
    private internetService: InternetDataService
  ) { }

  ngOnInit() {
    //query params from Payswitch
    this.route.queryParamMap
      .subscribe((params) => {
        this.paramsObject = { ...params.keys, ...params };
        console.log('paramsObject ==>', this.paramsObject);
        localStorage.setItem('payRes', JSON.stringify(this.paramsObject.params));
      });
    let payValues = JSON.parse(localStorage.getItem('payRes'));

    //get saved topup form data
    const tval = JSON.parse(localStorage.getItem('tparams'));
    const tval2 = JSON.parse(localStorage.getItem('topup1'));
    console.log("tval from localstorage >>> ", tval);
    console.log("tval2 val from localstorage >>> ", tval2);

    if (payValues.status == 'Approved' || payValues.code === '000') {
      if (tval != null || tval != '') {
        if(tval.transType == 'AIRTIMETOPUP'){
          this.creditCustomerAirtime(tval);
        }else {
          this.buyData(tval);
        }
        // this.router.navigate(['flash']) ;

      } else if (tval2 != null || tval2 != '') {
        this.creditCustomerAirtime(tval2);
        // this.router.navigate(['flash']) ;
      }

    } else if (payValues.status == 'cancelled' || payValues.code == '900') {

      // if (tval != null || tval != '') {
      //   if(tval.transType == 'AIRTIMETOPUP'){
      //     this.creditCustomerAirtime(tval);
      //   }else {
      //     this.buyData(tval);
      //   }
      //   // this.router.navigate(['flash']) ;

      // } else if (tval2 != null || tval2 != '') {
      //   this.creditCustomerAirtime(tval2);
      // }

      this.airOkResponse.status = payValues.code;
      this.airOkResponse.message = payValues.status || payValues.reason ;
      this.airOkResponse.trxn = payValues.transaction_id;
      this.router.navigate(['receipt']);
    } else {
      this.airOkResponse.status = payValues.code;
      this.airOkResponse.reason =  payValues.reason;
      this.airOkResponse.trxn = payValues.transaction_id;
      this.router.navigate(['receipt']) ;
    }

  }

  creditCustomerAirtime(formData: any) {
    console.log('receiptComponent:airtime  tval >>>>', formData);
    this.airtimeService.buyAirtimeTopup(formData)
      .subscribe(res => {
        console.log(`airtime credit response ==> ${JSON.stringify(res)}`);
        this.airOkResponse.status = res.status;
        this.airOkResponse.message = res.message;
        this.airOkResponse.trxn = res.trxn;
        this.airOkResponse.local_trxn_code = res['local_trxn-code'];
        this.airOkResponse.network = res.network;
        this.airOkResponse.balance_before = res.balance_before;
        this.airOkResponse.balance_after = res.balance_after;
        
        this.airOkResponse.price  = '';
        this.isLoading = false;

        // window.localStorage.removeItem('tparams');
        // window.localStorage.removeItem('topup1');
        this.router.navigate(['receipt']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert('Topup error: ' + JSON.stringify(err.error));
      });
  }

  buyData(iData: any) {
    console.log('receiptComponent:internet  tval >>>>', iData);
        this.internetService.buyInternetData(iData).subscribe(res => {
            console.log(`RECEIPT BUY INTERNET DATA ==> ${
                JSON.stringify(res)
            }`);
            this.airOkResponse.status = res.status;
            this.airOkResponse.message = res.message;
            this.airOkResponse.trxn = res.trxn;
            this.airOkResponse.local_trxn_code = res['local_trxn-code'];
            this.airOkResponse.network = res.network;
            this.airOkResponse.balance_before = res.balance_before;
            this.airOkResponse.balance_after = res.balance_after;
            
            this.airOkResponse.price  = '';
            this.isLoading = false;
    
            this.router.navigate(['receipt']);
        }, (err) => {
            console.log(err);
            this.isLoading = false;
            alert('DATA ERROR =>>' + JSON.stringify(err.error));
        });
    }

  OnPrint() {
    window.print();
    window.localStorage.removeItem('tparams');
    window.localStorage.removeItem('topup1');
  }

  goToDashboard(): void {
    window.localStorage.removeItem('tparams');
    window.localStorage.removeItem('topup1');
    this.router.navigate(['/']);
  }

}
