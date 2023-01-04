 import { NgModule } from '@angular/core'
 import { CommonModule } from '@angular/common'

 import { ImageModule } from 'primeng/image'
 import { InputTextModule } from 'primeng/inputtext'
 import { ButtonModule } from 'primeng/button'
 import { TableModule } from 'primeng/table'
 import { RadioButtonModule } from 'primeng/radiobutton'
 import { TabViewModule } from 'primeng/tabview'
 import { CardModule } from 'primeng/card'
 import { DropdownModule } from 'primeng/dropdown'
 import { CalendarModule } from 'primeng/calendar'
 import { MultiSelectModule } from 'primeng/multiselect'
 import { ToastModule } from 'primeng/toast'
//  import { BadgeModule } from 'primeng/badge'
//  import { ChipModule } from 'primeng/chip'
//  import { TagModule } from 'primeng/tag'
 import { ConfirmDialogModule } from 'primeng/confirmdialog'
 import { MessagesModule } from 'primeng/messages'
 import { TooltipModule } from 'primeng/tooltip'
 import { ProgressSpinnerModule } from 'primeng/progressspinner'

 @NgModule({
     declarations: [],
     imports: [
         CommonModule,

         InputTextModule,
         ImageModule,
         TableModule,
         TabViewModule,
         RadioButtonModule,
         CardModule,
         DropdownModule,
         CalendarModule,
         MultiSelectModule,
         ToastModule,
        //  BadgeModule,
        //  ChipModule,
        //  TagModule,
         ConfirmDialogModule,
         MessagesModule,
         TooltipModule,
         ProgressSpinnerModule
     ],
     exports: [
        InputTextModule,
         ImageModule,
         ButtonModule,
         TableModule,
         TabViewModule,
         RadioButtonModule,
         CardModule,
         DropdownModule,
         CalendarModule,
         MultiSelectModule,
         ToastModule,
        //  BadgeModule,
        //  ChipModule,
        //  TagModule,
         ConfirmDialogModule,
         MessagesModule,
         TooltipModule,
         ProgressSpinnerModule

     ]
 })
 export class PrimengModule { }
