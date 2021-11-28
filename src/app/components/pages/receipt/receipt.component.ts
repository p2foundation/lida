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
  filter$: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.filter$ = this.route.queryParamMap.pipe(
      map((params: ParamMap) => params.get('filter')),
    );

    this.filter$.subscribe(param => console.log('receipt params',param));
  }

}
