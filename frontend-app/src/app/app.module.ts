 import { NgModule } from '@angular/core'
 import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
 import { FormsModule, ReactiveFormsModule } from "@angular/forms"
 import { BrowserModule } from '@angular/platform-browser';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { LayoutsModule } from './modules/layouts/layouts.module'
 import { DatePipe } from '@angular/common'


 import { AppRoutingModule } from './app-routing.module'
 import { AppComponent } from './app.component';
 import { HomeComponent } from './home/home.component'


 @NgModule({
     declarations: [
         AppComponent,
         HomeComponent,

     ],
     exports: [

    ],
     providers: [DatePipe],
     bootstrap: [AppComponent],
     imports: [
         BrowserModule,
         BrowserAnimationsModule,
         FormsModule,
         ReactiveFormsModule,
         AppRoutingModule,
         LayoutsModule,
         HttpClientModule
     ]
})
 export class AppModule { }
