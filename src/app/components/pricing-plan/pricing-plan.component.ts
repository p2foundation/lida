import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirtimeTopupService } from 'src/app/Repository/airtime.service';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.scss']
})
export class PricingPlanComponent implements OnInit {

  public isLoading = true;

  public payResData:any = {
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

  public topupResData: any = {
    "status": "OK",
    "message": "You have successfully recharged 0244588584 with GHS 0.10, you were charged GHS 0.10 and your current balance is GHS 308.05",
    "trxn": "e6b64280553611ecaf1bcdf53bad9b85",
    "status-code": "00",
    "local-trxn-code": "7SRQNN120421",
    "balance_before": "308.1472",
    "balance_after": 308.0502,
    "network": "MTN"
  };

  public errorData: any = {
    "status": "FAIL",
    "message": "invalid login credentials",
    "trxn": "",
    "status-code": "01",
    "local-trxn-code": null
  }

  

  constructor(
    private airtimeService: AirtimeTopupService,
    private router: Router,
  ) {
    
  }

  ngOnInit() {
    let payValues = JSON.parse(localStorage.getItem('payRes'));
    console.log(`get LocalStorage Items: ${payValues}`);

    // const tval = localStorage.getItem('tparams');
    // console.log("price-plan topval >>> ",tval);


  }

  // creditCustomerAirtime(formData: any) {
  //   console.log('AirtimeTopupComponent:  topup >>>>', formData);
  //   this.airtimeService.buyAirtimeTopup(formData)
  //     .subscribe(res => {
  //       console.log(`airtime credit response ==> ${JSON.stringify(res)}`);
  //       this.isLoading = false;
  //       this.router.navigate(['receipt']);
  //     }, (err) => {
  //       console.log(err);
  //       this.isLoading = false;
  //       alert('No topup: ' + err.error);
  //     });
  // }

  OnPrint() {
    window.print();
  }
}
