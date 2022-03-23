import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AirtimeTopupService } from 'src/app/repository/airtime.service';
import { PaymentService } from 'src/app/repository/payment.service';
import { PreviousRouteService } from 'src/app/repository/previous.route.service';
import { isEmpty } from 'rxjs/operators';
declare let $: any;

@Component({
  selector: 'app-machine-learning-two',
  templateUrl: './machine-learning-two.component.html',
  styleUrls: ['./machine-learning-two.component.scss']
})
export class MachineLearningTwoComponent implements OnInit {

  airtimeForm: FormGroup;

  retailer = '233241603241';
  recipientNumber: number = 0;
  amount = '';
  network = 0;
  description = '';
  email = '';
  isLoading = true;
  
  topupParams: any = {
    recipientNumber: '',
    'description': 'AIRTIME TOPUP',
    'amount': '',
    redirectURL: 'http://lidapp.s3-website.us-east-2.amazonaws.com/receipt',
    customerEmail: 'info@accesswealth.net',
    transType: 'AIRTIMETOPUP'
  };

  public checkoutUrl = '';
  public pswitchObject: any = {};
  public labelResponse = '';

  constructor(
    private airtimeService: AirtimeTopupService,
    private payService: PaymentService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private previousRouteService: PreviousRouteService
  ) { }

  ngOnInit() {
    $('#loading').hide();

    this.airtimeForm = this.formBuilder.group({
      retailer: ['', Validators.required],
      recipientNumber: ['', Validators.required],
      amount: ['', Validators.required],
      network: [null],
      description: [null],
      email: [null, Validators.required]
      
    });

  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  topupFormSubmit(form: any): any {
    console.log('airtime formData >>>>', form);

    this.topupParams.recipientNumber = form.recipientNumber;
    this.topupParams.description = ' Airtime Topup to: '+form.recipientNumber;


    if (form.amount < 10) {
      const inputAmount: any = form.amount * 100;
      this.topupParams.amount = "000000000" + inputAmount;
      localStorage.setItem('tparams', JSON.stringify(this.topupParams));
    } else if (form.amount >= 10) {
      const inputAmount: any = form.amount * 100;
      this.topupParams.amount = "00000000" + inputAmount;
      localStorage.setItem('tparams', JSON.stringify(this.topupParams));
    } else if (form.amount > 100) {
      const inputAmount: any = form.amount * 100;
      this.topupParams.amount = "0000000" + inputAmount;
      localStorage.setItem('tparams', JSON.stringify(this.topupParams));
    }

    console.log('topform params =>>', this.topupParams);

    $('#recharge').hide('fade');

      // this.creditCustomerAirtime(this.topupParams);

      console.log('call Payswitch service =>')

      this.makePayment(this.topupParams);
      $('#loading').show('slow'); // show Loading button

    
  }

  makePayment(mData: any) {
    this.payService.makePayment(mData)
      .subscribe(res => {
        console.log(`payment response ==> ${JSON.stringify(res)}`);
        // console.log(`payment res amount ==> ${JSON.stringify(res.amount)}`);

        this.checkoutUrl = res.checkout_url;
        console.log(`checkoutUrl ==> ${JSON.stringify(this.checkoutUrl)}`);
        
        if (res.status == 'success' || res.code == 200) {
          window.location.href = `${this.checkoutUrl}`;
        } else if(res.code == '999'){
          window.location.href = `${this.checkoutUrl}`;
        } else if (res.amount.indexOf('The') == 0) {
          $('#loading').hide();
          $('#recharge').show('slideUp');
        }

        this.isLoading = false;
        // alert('Topup successfully processed.');
        // this.creditCustomerAirtime(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert('Topup error =>> ' + JSON.stringify(err.error));
        this.router.navigate(['/']);
      });
  }

  creditCustomerAirtime(formData: any) {
    console.log('AirtimeTopupComponent:  topup >>>>', formData);
    this.airtimeService.buyAirtimeTopup(formData)
      .subscribe(res => {
        console.log(`airtime credit response ==> ${JSON.stringify(res)}`);
        this.isLoading = false;
      
        this.router.navigate(['/receipt']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert('top error:' + JSON.stringify(err.error));
      });
  }

}
