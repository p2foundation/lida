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

  constructor(
    private airtimeService: AirtimeTopupService,
    private router: Router,
  ) {
   }

  ngOnInit() {
    let payValues = JSON.parse(localStorage.getItem('payRes'));
    console.log(`get LocalStorage Items: ${payValues}`);
  }


  creditCustomerAirtime(formData: any) {
    console.log('AirtimeTopupComponent:  topup >>>>', formData);
    this.airtimeService.buyAirtimeTopup(formData)
      .subscribe(res => {
        console.log(`airtime credit response ==> ${JSON.stringify(res)}`);
        this.isLoading = false;
        this.router.navigate(['pages/receipt']);
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
