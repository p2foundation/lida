import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  public paramsObject: any = {};

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params) => {
        this.paramsObject = { ...params.keys, ...params };
        console.log('paramsObject ==>', this.paramsObject);
        localStorage.setItem('payRes', JSON.stringify(this.paramsObject.params));
      });
  }

  OnPrint() {
    window.print();
  }
  
  

}
