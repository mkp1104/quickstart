// import { Component } from '@angular/core';

// import { Component } from '@angular/core';
// import { IProduct } from './product';
// import { ProductService } from './products.service';
// // import { appService } from './app.service';
// import { Http , Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// @Component({
//   selector: 'my-app',
//   templateUrl: 'app/app.component.html',
// })
// @Component ({
//    selector: 'my-app',
//    template: '
//    <ul>
//       <li><a [routerLink] = "['/Product']">Product</a></li>
//       <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
//    </ul>
//    <router-outlet></router-outlet>'
// })
// export class AppComponent  { }
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
import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   template: '<product-form></product-form>'
})
export class AppComponent { }



