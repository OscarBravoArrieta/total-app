 import { Component, OnInit } from '@angular/core'
 import { EmployersService } from 'src/app/core/services/employers.service'
 import { EmployeesService } from 'src/app/core/services/employees.service'
 import { BeneficiarieService } from 'src/app/core/services/beneficiarie.service'
 import { DatePipe } from '@angular/common'
 import { MessageService} from 'primeng/api'
 import { ConfirmationService } from 'primeng/api'
 import * as FileSaver from 'file-saver'
 import { saveAs } from 'file-saver'
 import { PrimeNGConfig } from 'primeng/api'

 interface Status {
     name: string,
     value: string
 }
 interface Relationship {
     name: string,
     value: string
 }

 @Component({
     selector: 'app-main-grid',
     templateUrl: './main-grid.component.html',
     styleUrls: ['./main-grid.component.scss'],
     providers: [MessageService, ConfirmationService]
 })

 export class MainGridComponent implements OnInit {
     selectedQuery: string = ''
     previousSelectedQuery: string = ''
     reportTitle: string = ''
     totalRecords: number = 0
     cols: any[]=[]
     results: any[]=[]
     status: any[]=[]
     relationship: any[]=[]
     selectedStatus!: Status[]
     selectedRelationship!: Relationship[]
     dateRange!: Date[]
     showSpinner: boolean = false
     EXCEL_EXTENSION: string = '.xlsx'

     constructor(
             public datepipe: DatePipe,
             private confirmationService: ConfirmationService,
             private primengConfig: PrimeNGConfig,
             private messageService: MessageService,
             private employersService: EmployersService,
             private employeesService: EmployeesService,
             private beneficiarieService: BeneficiarieService
         )
     {
         this.initializeArrayStatus()
         this.relationship = [
             {name: 'Hijo', value: '1'},
             {name: 'Hermano', value: '2'},
             {name: 'Padre', value: '3'}
         ]
     }
     ngOnInit(): void {
         this.showSpinner = false
         this.primengConfig.ripple = true
         this.selectedStatus = []
         this.dateRange = []
         this.selectedRelationship = []
     }

     initializeArrayStatus(){
         this.status = [
             {name: 'Activo', value: 'A'},
             {name: 'Inactivo', value: 'I'},
             {name: 'Difunto', value: 'M'}
         ]
     }
     choseOption(e: any) {
         let reportTitle = this.reportTitle
         if((this.results.length > 0) && (this.previousSelectedQuery != this.selectedQuery)){
             this.confirmationService.confirm({
                 message: `El origen de datos se actualizará. ¿Desea continuar?`,
                 header: 'Confirmación',
                 icon: 'pi pi-exclamation-triangle',
                 accept: () => {
                     this.results =[]
                     this.cols = []
                     this.selectedStatus = []
                     this.dateRange = []
                     this.selectedRelationship = []
                     //this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
                 },
                  reject: () => {
                     this.selectedQuery = this.previousSelectedQuery
                     this.reportTitle = reportTitle
                     //this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
                 }
             })
         }
         switch (this.selectedQuery) {
             case 'E':
                 this.reportTitle = 'Empleadores'
                 this.status = this.status.filter((item) => item.name !== 'Difunto')
                 break
             case 'T':
                 this.reportTitle = 'Trabajadores'
                 this.initializeArrayStatus()
                 break
             case 'B':
                 this.reportTitle = 'Beneficiarios'
                 this.initializeArrayStatus()
                 break
             case 'C':
                    this.reportTitle = 'Cónyuges'
                    this.initializeArrayStatus()
                    break;
             default:
                 //
                 break;
         }
     }
     getAll():void {

         const filter = {
             status: this.selectedStatus.length > 0 ? this.selectedStatus: null,
             beginDate: this.dateRange ? this.datepipe.transform(this.dateRange[0], 'yyyy-MM-dd'): null,
             endDate: this.dateRange ? this.datepipe.transform(this.dateRange[1], 'yyyy-MM-dd'): null,
             relationship: this.selectedRelationship.length ? this.selectedRelationship: null
         }




         this.showSpinner = true

         switch (this.selectedQuery) {
             case 'E':
                 this.employersService.getAll(filter).subscribe((data: any) => {
                     this.results = data.employers
                     this.getCols(10)
                     this.showSpinner = false
                 })
                 break;
             case 'T':
                 this.employeesService.getAll(filter).subscribe((data: any) => {
                     this.results = data.employees
                     this.getCols(10)
                     this.showSpinner = false
                 })
                 break;
             case 'B':
                 this.beneficiarieService.getAll(filter).subscribe((data: any) => {
                     this.results = data.beneficiaries
                     this.getCols(10)
                     this.showSpinner = false
                 })
                 break
             case 'C':
                this.selectedRelationship = []
                if (this.selectedRelationship.length) {
                     console.log('Si')

                } else {
                     console.log('No')

                }


                 const filter1 = {
                     status: this.selectedStatus.length > 0 ? this.selectedStatus: null,
                     beginDate: this.dateRange ? this.datepipe.transform(this.dateRange[0], 'yyyy-MM-dd'): null,
                     endDate: this.dateRange ? this.datepipe.transform(this.dateRange[1], 'yyyy-MM-dd'): null,
                     relationship: this.selectedRelationship.length ? this.selectedRelationship: '4'
                 }
                 this.beneficiarieService.getAll(filter1).subscribe((data: any) => {
                     this.results = data.beneficiaries
                     this.getCols(10)
                     this.showSpinner = false
                 })
                 break
             default:
                 //
                 break;
         }
     }
     getCols(nColumns: number):void{
         this.cols = []=[]

         let k = 0
         for (var key in this.results[0]) { //Key contains name of columns
             k ++
             if (k <= nColumns){
                 let object
                 object = {
                     field: key,
                     header: (key.replace('_', ' ')).toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()),
                     //width: key.length + 'rem'
                 }
                 this.cols.push(object)
             }
         }
     }
     validate() {
         if(!this.selectedQuery) {
             this.customToast('error', 'Error', 'Olvidaste el tipo de población')
             return
         }
         this.previousSelectedQuery = this.selectedQuery
         this.getAll()
     }
     customToast(severity: string, summary: string, detail: string) {
         this.messageService.add({severity: severity, summary: summary, detail: detail});
     }
     cleanArrays() {
         this.cols = []
         this.selectedStatus = []
         this.selectedRelationship=[]
         this.dateRange = []
     }
     exportExcel() {
         this.showSpinner = true
         import("xlsx").then(xlsx => {
             const worksheet = xlsx.utils.json_to_sheet(this.results);
             const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
             const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
             this.saveAsExcelFile(excelBuffer, `${this.reportTitle} - `);
             this.showSpinner = false
        })
    }
    // -------------------------------------------------------------------------------------------
    saveAsExcelFile(buffer: any, fileName: string): void {
         let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
         //let EXCEL_EXTENSION = '.xlsx';
         const data: Blob = new Blob([buffer], {
             type: EXCEL_TYPE
         });
         FileSaver.saveAs(data, fileName + this.datepipe.transform(new Date(), 'yyyy-MM-dd') + '-' + new Date().getTime() + this.EXCEL_EXTENSION);
     }

     saveAsCsvFile() {
         this.showSpinner = true
         const replacer = (key: any, value: any) => value === null ? '' : value;
         const header = Object.keys(this.results[0]);
         let csv = this.results.map((row: any) => header.map(fieldName => JSON.stringify(row[fieldName],replacer)).join(','));
         csv.unshift(header.join(','));
         let csvArray = csv.join('\r\n');
         var blob = new Blob([csvArray], {type: 'text/csv' })
         saveAs(blob, this.reportTitle + '-' + this.datepipe.transform(new Date(), 'yyyy-MM-dd') + '-' + new Date().getTime() + ".csv");
         this.showSpinner = false
     }
 }
