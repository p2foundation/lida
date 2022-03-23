import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AirtimeTopupService } from 'src/app/repository/airtime.service';
import { PaymentService } from 'src/app/repository/payment.service';
import { PreviousRouteService } from 'src/app/repository/previous.route.service';
declare let $: any;

@Component({
  selector: 'app-airtime-topup',
  templateUrl: './airtime-topup.component.html',
  styleUrls: ['./airtime-topup.component.scss']
})
export class AirtimeTopupComponent implements OnInit {
  // public transType = "Airtime Topup";

  airtimeForm: FormGroup;

  retailer = '233241603241';
  recipientNumber: number = 0;
  amount = '';
  network = 0;
  description = '';
  email = '';
  isLoading = true;

  // payParams: any = {
  //   merchantId: "TTM-00006115",
  //   transId: "000000654325",
  //   description: "Payment Using Checkout Page ",
  //   amount: "000000000100",
  //   redirectURL: "http://lidapp.s3-website.us-east-2.amazonaws.com/receipt",
  //   customerEmail: "info@accesswealth.com"
  // };

  topupParams: any = {
    "recipientNumber": "",
    "description": "",
    "amount": "",
    redirectURL: "http://lidapp.s3-website.us-east-2.amazonaws.com/receipt",
    customerEmail: "info@accesswealth.net",
    transType: 'AIRTIMETOPUP'
  };

  public checkoutURL = '';
  public pswitchObject: any = {};

  constructor(
    private payService: PaymentService,
    private airtimeService: AirtimeTopupService,
    private previousRouteService: PreviousRouteService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    $('#loading').hide(); // hide loading button

    // airtime-topup page formBuild
    this.airtimeForm = this.formBuilder.group({
      retailer: [null, Validators.required],
      recipientNumber: ['', [Validators.required, Validators.minLength(10)]],
      amount: ['', Validators.required],
      network: [null],
      description: [null],
      email: [null]
    });

  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  // form onSubmit
  topupFormSubmit(form: any): any {
    console.log('topup formData:  >>>>', form);

    this.topupParams.recipientNumber = form.recipientNumber;
    this.topupParams.description = ' Airtime Topup to: ' + form.recipientNumber;

    // calculate amountPaid with  12 digits
    if (form.amount < 10) {
      const inputAmount: any = form.amount * 100;
      this.topupParams.amount = "000000000" + inputAmount;
      localStorage.setItem('tparams', JSON.stringify(this.topupParams));
    } else if (form.amount >= 10) {
      const inputAmount: any = form.amount * 100;
      this.topupParams.amount = "00000000" + inputAmount;
      localStorage.setItem('tparams', JSON.stringify(this.topupParams));
    }

    console.log('topform params =>>', this.topupParams);

    $('#recharge').hide('fade'); // hide submit button

    console.log('post to payment ...')


    console.log('airtimeform valid');
    this.makePayment(this.topupParams);
    $('#loading').show('slow'); // show Loading button

    // this.creditCustomerAirtime(this.topupParams);
  }

  makePayment(mData: any) {
    this.payService.makePayment(mData)
      .subscribe(res => {
        console.log(`payment response ==> ${JSON.stringify(res)}`);
        this.checkoutURL = res.checkout_url;
        console.log(`checkoutUrl ==> ${JSON.stringify(this.checkoutURL)}`);
        if (res.status == 'success' || res.code == 200) {
          // this.router.navigate(['/flash']);
          window.location.href = `${this.checkoutURL}`;
        } else if (res.code == '999') {
          // this.router.navigate(['/flash']);
          window.location.href = `${this.checkoutURL}`;
        }
        this.isLoading = false;
        // alert('Topup successfully processed.');
        // this.creditCustomerAirtime(res);
        // this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert('Topup error =>> ' + JSON.stringify(err.error));
        this.router.navigate(['/']);
      });
  }

  // creditCustomerAirtime(formData: any) {
  //   console.log('AirtimeTopupComponent:  topup >>>>', formData);
  //   this.airtimeService.buyAirtimeTopup(formData)
  //     .subscribe(res => {
  //       console.log(`airtime credit response ==> ${JSON.stringify(res)}`);
  //       this.isLoading = false;

  //       this.router.navigate(['/receipt']);
  //     }, (err) => {
  //       console.log(err);
  //       this.isLoading = false;
  //       alert('top error:' + JSON.stringify(err.error));
  //     });
  // }

}
