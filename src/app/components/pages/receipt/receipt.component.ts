import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AirtimeTopupService } from 'src/app/Repository/airtime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  public paramsObject: any = {};
  public topupValues: any = {};
  public airOkResponse: any = {
    "status": "OK",
    "message": "You have successfully recharged 0244588584 with GHS 0.10, you were charged GHS 0.10 and your current balance is GHS 308.05",
    "trxn": "e6b64280553611ecaf1bcdf53bad9b85",
    "status_code": "00",
    'local-trxn-code': "7SRQNN120421",
    "balance_before": "308.1472",
    "balance_after": 308.0502,
    "network": "MTN"
  }
  public payResponse: any = {
    "status":"Access Denied",
    "code":"040",
    "reason":"You are not allowed to transact with MTN (Mtn)",
    "r_switch":"MTN",
    "subscriber_number":"0244588584",
    "amount":"1",
    "channel":"mobile",
    "currency":"GHS",
    "transaction_id":"861164120621"
  }

  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private airtimeService: AirtimeTopupService
  ) {
    const tval = JSON.parse(localStorage.getItem('topup1'));
    console.log("topup val from localstorage >>> ", tval);
  }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params) => {
        this.paramsObject = { ...params.keys, ...params };
        console.log('paramsObject ==>', this.paramsObject);
        localStorage.setItem('payRes', JSON.stringify(this.paramsObject.params));
      });

    let payValues = JSON.parse(localStorage.getItem('payRes'));
    
    const tval = JSON.parse(localStorage.getItem('tparams'));
    const tval2 = JSON.parse(localStorage.getItem('topup1'));

    console.log("tval from localstorage >>> ", tval);
    console.log("tval2 val from localstorage >>> ", tval2);

    if(payValues.status == 'Approved' || payValues.code === '000'){
      if(tval != null || tval != ''){
        this.creditCustomerAirtime(tval);
      }else if(tval2 != null || tval2 != ''){
        this.creditCustomerAirtime(tval2);
      }
    } else {
      this.router.navigate(['receipt']);
    }

  }

  creditCustomerAirtime(formData: any) {
    console.log('receiptComponent:  tval >>>>', formData);
    this.airtimeService.buyAirtimeTopup(formData)
      .subscribe(res => {
        console.log(`airtime credit response ==> ${JSON.stringify(res)}`);
        this.isLoading = false;
        this.router.navigate(['receipt']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert('No topup: ' + err.error);
        // alert(err.error);
      });
  }

  OnPrint() {
    window.print();
  }



}
