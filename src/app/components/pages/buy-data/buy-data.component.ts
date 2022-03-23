import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroupDirective,
    FormBuilder,
    FormGroup,
    NgForm,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InternetDataService } from 'src/app/repository/internet.data.service';
import { PaymentService } from 'src/app/repository/payment.service';
import { Location } from '@angular/common';
import { DataService } from 'src/app/repository/data.service';

declare let $: any;

@Component({ selector: 'app-buy-data', templateUrl: './buy-data.component.html', styleUrls: ['./buy-data.component.scss'] })
export class BuyDataComponent implements OnInit {

    // public transType = "internetData";

    public dataBundle: any = [];
    public internetForm: FormGroup;
    public dataCodeForm: FormGroup;

    public buyDataParams: any = {
        recipientNumber: '',
        dataCode: '',
        network: '',
        amount: '',
        description: "",
        redirectURL: "http://lidapp.s3-website.us-east-2.amazonaws.com/receipt",
        customerEmail: "info@accesswealth.net",
        transType: 'INTERNETDATA'
    };

    public networks = [
        {
            'id': 4,
            'name': 'MTN'
        },
        {
            'id': 6,
            'name': 'Vodafone Ghana'
        },
        {
            'id': 1,
            'name': 'Airtel'
        }, {
            'id': 5,
            'name': 'Tigo'
        }, {
            id: 3,
            name: 'Glo Ghana'
        }
    ];

    private checkoutURL: string = '';
    public paySwitchParams: any = {};

    isLoading: boolean = false;
    submitted: boolean = false;
    public inet = '';

    constructor(
        private internetService: InternetDataService,
        private paymentService: PaymentService,
        private dataService: DataService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder,
    ) {
        // this.dataBundle = this.dataService.mtnBundles;
    }

    ngOnInit() {
        $('#internetForm').hide();
        this.dataCodeForm = this.formBuilder.group({
            network: ['', Validators.required],
        });

        this.internetForm = this.formBuilder.group({
            recipientNumber: [
                '', Validators.required
            ],
            dataCode: [
                '', Validators.required
            ],
            network: [null],
            price: [null],
            amount: [null]
        });

        console.log(`data bundlelist =>> ${this.dataService
            }`)

    }

    getDataBundle(iNet: any) {
        this.internetService.internetBundleList(iNet).subscribe(res => {
            // console.log(`INTERNET BUNDLE LIST ==> ${
            //     JSON.stringify(res)
            // }`);

            if (res.status == 'OK') {
                $('#dataCodeForm').hide();
                this.isLoading = false;

                const nList = res.bundles;
                console.log('nList::: ', nList);

                this.dataBundle = nList;
                $('#internetForm').show('slideUp');
            }

            // this.router.navigate(['/receipt']);
        }, (err) => {
            console.log(err);
            this.isLoading = false;
            alert('DATA BUNDLE LIST ERROR =>>' + JSON.stringify(err.error));
        });
    }

    public onSubmit(formData: any) {
        // console.log(`buy data form ==> ${
        //     JSON.stringify(formData)
        // }`);

        this.buyDataParams.recipientNumber = formData.recipientNumber;
        this.buyDataParams.dataCode = formData.dataCode.plan_id;
        this.buyDataParams.network = 0;
        // this.buyDataParams.amount = parseInt(formData.dataCode.price);
        this.buyDataParams.description = ' Internet Data Topup to: ' + formData.recipientNumber;

        // calculate amountPaid with  12 digits
        const convPrice = parseInt(formData.dataCode.price);
        if (convPrice < 10) {
            const inputAmount = convPrice * 100;
            this.buyDataParams.amount = "000000000" + inputAmount;
            localStorage.setItem('tparams', JSON.stringify(this.buyDataParams));
        } else if (convPrice >= 10 && convPrice < 100) {
            const inputAmount: any = convPrice * 100;
            this.buyDataParams.amount = "00000000" + inputAmount;
            localStorage.setItem('tparams', JSON.stringify(this.buyDataParams));
        } else if (convPrice >= 100) {
            const inputAmount: any = convPrice * 100;
            this.buyDataParams.amount = "0000000" + inputAmount;
            localStorage.setItem('tparams', JSON.stringify(this.buyDataParams));
        }

        console.log(`selected data params =>> ${JSON.stringify(this.buyDataParams)}`);


        console.log('call buydata app ...');
        this.makePayment(this.buyDataParams);

    }



    // buyData(iData: any) {
    //     console.log(`buy data form ==> ${
    //         JSON.stringify(iData)
    //     }`);

    //     this.internetService.buyInternetData(iData).subscribe(res => {
    //         console.log(`BUY INTERNET DATA ==> ${
    //             JSON.stringify(res)
    //         }`);
    //         // alert(` ${
    //         //     JSON.stringify(res)
    //         // }`);
    //         this.isLoading = false;

    //         this.router.navigate(['/receipt']);
    //     }, (err) => {
    //         console.log(err);
    //         this.isLoading = false;
    //         alert('DATA ERROR =>>' + JSON.stringify(err.error));
    //     });
    // }

    makePayment(mData: any) {
        this.paymentService.makePayment(mData).subscribe(res => {
            console.log(`payment response ==> ${JSON.stringify(res)
                }`);
            this.checkoutURL = res.checkout_url;
            console.log(`checkoutUrl ==> ${JSON.stringify(this.checkoutURL)
                }`);
            if (res.status == 'success' || res.code == 200) {
                window.location.href = `${this.checkoutURL
                    }`;
            } else if (res.code == '999') {
                window.location.href = `${this.checkoutURL
                    }`;
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
