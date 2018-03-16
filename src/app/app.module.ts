import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Appproduct } from './product.component';
import { AppInventory } from './Inventory.component';
// import { AppComponentManish }  from './app.component';
const appRoutes: Routes = [
  { path: 'Product', component: Appproduct },
  { path: 'Inventory', component: AppInventory },
];
@NgModule({
  imports: [ BrowserModule,
    RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent,Appproduct,AppInventory],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

// export class AppComponent { }
