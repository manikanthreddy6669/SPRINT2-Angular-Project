import { Component, OnInit } from '@angular/core';
import { MyForm, MyserviceService, RevenueTable } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
message:any;
salesdata:RevenueTable[];
valid: any;
  error: boolean;
  status: boolean;
  constructor(private myservice: MyserviceService,private router: Router) { 
    this.status=false;
  }

  ngOnInit(): void {
  }
  Submit(SalesInput:MyForm):any{
    console.log(SalesInput);
    this.valid = this.validateDates(SalesInput.date1,SalesInput.date2);
    if(this.valid)
     this.myservice.getSalesData(SalesInput).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.status=true;
    this.salesdata = response;
  }
  validateDates(StartDate: any, EndDate: any): any {
    this.valid = true;
    this.message='';
    if(StartDate =='' || EndDate ==''){
      this.error=true;
      this.message='Start date and end date are required.';
      this.valid = false;
    }

    if((StartDate != null && EndDate !=null) && (EndDate) < (StartDate)){
      this.error=true;
      this.message='End date should be greater than start date';
      this.valid = false;
    }
    return this.valid;
  }
  }
