import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InternetDataService } from 'src/app/repository/internet.data.service';
import { PaymentService } from 'src/app/repository/payment.service';
import { Location } from '@angular/common';

declare let $: any;

@Component({
  selector: 'app-buy-data',
  templateUrl: './buy-data.component.html',
  styleUrls: ['./buy-data.component.scss']
})
export class BuyDataComponent implements OnInit {

  public transType = "Internet Data Topup";
  
  public data = [];
  public internetForm: FormGroup;
  public buyDataParams: any = {
    recipientNumber: '',
    dataCode: '',
    network: ''
  };

  private checkoutURL: string = '';
  public paySwitchParams: any = {};

  isLoading: boolean = false;
  submitted: boolean = false;

  constructor(
    private readonly internetService: InternetDataService,
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {


    this.internetForm = this.formBuilder.group({
      recipientNumber: ['', Validators.required],
      dataCode: ['', Validators.required],
      network: [null]
    });

  }

  public onSubmit(formData: any){
    console.log(`buy data form ==> ${JSON.stringify(formData)}`); 

    this.internetService.buyInternetData(formData)
    .subscribe(res => {
      console.log(`BUY INTERNET DATA ==> ${JSON.stringify(res)}`);
      alert(` ${JSON.stringify(res)}`);
      this.isLoading = false;

      this.router.navigate(['/receipt']);
    }, (err) => {
      console.log(err);
      this.isLoading = false;
      alert('DATA ERROR =>>' + JSON.stringify(err.error));
    });

  }

  makePayment(mData: any) {
    this.paymentService.makePayment(mData)
      .subscribe(res => {
        console.log(`payment response ==> ${JSON.stringify(res)}`);
        this.checkoutURL = res.checkout_url;
        console.log(`checkoutUrl ==> ${JSON.stringify(this.checkoutURL)}`);
        if (res.status == 'success' || res.code == 200) {
          window.location.href = `${this.checkoutURL}`;
        } else if(res.code == '999'){
          window.location.href = `${this.checkoutURL}`;
        }
        this.isLoading = false;
        // alert('Topup successfully processed.');
        // this.creditCustomerAirtime(res);
        // this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert('No topup: ' + err.error);
        // alert(err.error);
        this.router.navigate(['/']);
      });
  }

}
