import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/Repository/payment.service';

@Component({
  selector: 'app-airtime-topup',
  templateUrl: './airtime-topup.component.html',
  styleUrls: ['./airtime-topup.component.scss']
})
export class AirtimeTopupComponent implements OnInit {

  airtimeForm: FormGroup;

  public transType = "Airtime Topup";

  retailer = '233241603241';
  recipientNumber: number = 0;
  amount = '';
  network = 0;
  description = '';
  email = '';

  isLoading = true;

  payParams: any = {
    merchantId: "TTM-00006115",
    transId: "",
    description: "",
    amount: "",
    redirectURL: "https://webhook.site/d9743f46-8404-40a9-91b2-2adc4f62f7bf",
    customerEmail: "hanson.pepra@gmail.com"
  };

  topupParams: any = {
    transId: '',
    recipientNumber: '',
    description: '',
    amount: '',
    redirectURL: 'https://lidapp-ten.vercel.app/receipt',
    customerEmail: 'hanson.pepra@gmail.com'
  };

  public checkoutUrl = '';

  constructor(
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

    this.topupParams.recipientNumber = form.recipientNumber;
    this.topupParams.description = form.description;
    console.log('topup params =>>', this.topupParams);

    localStorage.setItem('topup1', JSON.stringify(this.topupParams));

    if (form.amount < 10) {
      const inputAmount: any = form.amount * 100;
      this.topupParams.amount = "000000000" + inputAmount;

    } else if (form.amount >= 10) {
      const inputAmount: any = form.amount * 100;
      this.topupParams.amount = "00000000" + inputAmount;
    }
    console.log('call payment app ...')
    this.makePayment(this.topupParams);
  }

  makePayment(mData: any) {
    this.payService.makePayment(mData)
      .subscribe(res => {
        console.log(`payment response ==> ${JSON.stringify(res)}`);
        this.checkoutUrl = res.checkout_url;
        console.log(`checkoutUrl ==> ${JSON.stringify(this.checkoutUrl)}`);

        if (res.status == 'success' || res.code == 200) {
          window.location.href = `${this.checkoutUrl}`;
        }
        this.isLoading = false;
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert('No topup: ' + err.error);
        this.router.navigate(['/']);
      });
  }

}
