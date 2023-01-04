 import { NgModule } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
 import { PrimengModule } from '../primeng/primeng.module'

 import { ManagementRoutingModule } from './management-routing.module'
 import { MainGridComponent } from './components/main-grid/main-grid.component'

 @NgModule({
     declarations: [
         MainGridComponent
     ],
     imports: [
         CommonModule,
         FormsModule,
         ReactiveFormsModule,
         ManagementRoutingModule,
         PrimengModule
     ],
     exports: [
         ManagementRoutingModule,
    ],
 })
 export class ManagementModule { }
