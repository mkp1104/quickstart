// import { Component } from '@angular/core';

import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
// import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// @Component({
//   selector: 'my-app',
//   templateUrl: 'app/app.component.html',
// })
@Component ({
  selector: 'my-app',
  template: '<div>Hello</div>',
  providers: [ProductService]
})
export   class   AppComponent  {
  iproducts: IProduct[];
  constructor(private _product: ProductService) {
  }
  
  ngOnInit() : void {
     this._product.getproducts()
     .subscribe(iproducts => this.iproducts = iproducts);
  }
}
// export class AppComponent  {
//   appTitle: string = 'Welcome';
//   appStatus: boolean = true;
//   appList: any[] = [ {
//     'ID': '1',
//     'Name' : 'One'
//  },

//  {
//     'ID': '2',
//     'Name' : 'Two'
//  } ];
// }



