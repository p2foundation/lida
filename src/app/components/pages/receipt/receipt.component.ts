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
      this.creditCustomerAirtime(tval2);
    } else {
      this.router.navigate(['pages/receipt']);
    }

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
