// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent }  from './app.component';
// import { HttpModule } from '@angular/http';
// import { RouterModule, Routes } from '@angular/router';
// import { Appproduct } from './product.component';
// import { AppInventory } from './Inventory.component';
// // import { AppComponentManish }  from './app.component';
// const appRoutes: Routes = [
//   { path: 'Product', component: Appproduct },
//   { path: 'Inventory', component: AppInventory },
// ];
// @NgModule({
//   imports: [ BrowserModule,
//     RouterModule.forRoot(appRoutes)],
//     declarations: [ AppComponent,Appproduct,AppInventory],
//     bootstrap: [ AppComponent ]
// })
// export class AppModule { }

// export class AppComponent { }

// import { NgModule } from '@angular/core'; 
// import { BrowserModule } from '@angular/platform-browser'; 
// import { AppComponent } from './app.component'; 
// import { Appproduct } from './product.component' 
// import { AppInventory } from  './Inventory.component' 
// import { PageNotFoundComponent } from  './NotFound.component' 
// import { RouterModule, Routes } from '@angular/router';  

// const appRoutes: Routes = [ 
//    { path: 'Product', component: Appproduct }, 
//    { path: 'Inventory', component: AppInventory }, 
//    { path: '**', component: PageNotFoundComponent } 
// ];  

// @NgModule ({ 
//    imports: [ BrowserModule, 
//    RouterModule.forRoot(appRoutes)], 
//    declarations: [ AppComponent,Appproduct,AppInventory,PageNotFoundComponent], 
//    bootstrap: [ AppComponent ] 
// }) 

// export class AppModule {
// } 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';

@NgModule ({
   imports: [ BrowserModule,FormsModule],
   declarations: [ AppComponent,ProductFormComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }