import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http"
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AirtimeTopupService } from 'src/app/Repository/airtime.service';
import { PaymentService } from 'src/app/Repository/payment.service';

@Component({
  selector: 'app-machine-learning-two',
  templateUrl: './machine-learning-two.component.html',
  styleUrls: ['./machine-learning-two.component.scss']
})
export class MachineLearningTwoComponent implements OnInit {
  private one4AllBaseURL: string = environment.lidaUrl;

  airtimeForm: FormGroup;

  retailer = '233241603241';
  recipientNumber: number = 0;
  amount = '';
  network = 0;
  description = '';
  email = '';
  isLoading = true;

  payParams: any = {
    merchantId: "TTM-00006115",
    transId: "000000654325",
    description: "Payment Using Checkout Page ",
    amount: "000000000100",
    redirectURL: "https://lidapp-ten.vercel.app/receipt",
    customerEmail: "hanson.pepra@gmail.com"
  };

public checkoutUrl = '';

  constructor(
    private airtimeService: AirtimeTopupService,
    private payService: PaymentService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.airtimeForm = this.formBuilder.group({
      retailer: [null, Validators.required],
      recipientNumber: [null, Validators.required],
      amount: [null, Validators.required],
      network: [null],
      description: [null],
      email: [null, Validators.required]
    });
  }

  topupFormSubmit(form: any): any {
    console.log('formData:  topup >>>>', form);
    console.log('formData recipient', form.recipientNumber);
    console.log('formData description', form.description);
    console.log('formData amount', form.amount);

    // console.log('formData amount', form.value.amount);
    //
    // localStorage.setItem('recipientNumber', form.value.recipientNumber);
    // localStorage.setItem('amountPaid', form.value.amount );

    // this.payParams.recipientNumber = form.value.recipientNumber;
    // this.payParams.amount = form.value.amount

    console.log('get payment')
    this.makePayment(this.payParams);
  }

  makePayment(mData: any) {
    this.payService.makePayment(mData)
      .subscribe(res => {
        console.log(`payment response ==> ${JSON.stringify(res)}`);
        this.checkoutUrl = res.checkout_url;
        // localStorage.setItem('checkout_url', this.checkoutUrl);
        console.log(`checkoutUrl ==> ${JSON.stringify(this.checkoutUrl)}`);
        if(res.status == 'success' || res.code == 200){
          window.location.href = `${this.checkoutUrl}`;
        }
        this.isLoading = false;
        // alert('Topup successfully processed.');
        // this.creditCustomerAirtime(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert('No topup: ' + err.error);
        // alert(err.error);
      });
  }

  creditCustomerAirtime(formData: any) {
    console.log('AirtimeTopupComponent:  topup >>>>', formData);
    this.airtimeService.buyAirtimeTopup(formData)
      .subscribe(res => {
        console.log(`airtime credit response ==> ${JSON.stringify(res)}`);
        this.isLoading = false;
        // localStorage.setItem('token', form.amount);

        // alert('Topup successfully processed.');
        this.router.navigate(['pages']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert('No topup: ' + err.error);
        // alert(err.error);
      });
  }

}
