import { Component, OnInit } from '@angular/core';
import { MyserviceService, MyForm, RevenueReport } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revenue-report',
  templateUrl: './revenue-report.component.html',
  styleUrls: ['./revenue-report.component.css']
})
export class RevenueReportComponent implements OnInit {
  message: string;
revenuedata:RevenueReport[];
valid: any;
  error: boolean;
  status: boolean;
  constructor(private myservice: MyserviceService,private router: Router) {
    this.status=false;

   }
  ngOnInit(): void {
  }
  Submit(RevenueInput:MyForm):any{
    console.log(RevenueInput);
    this.valid = this.validateDates(RevenueInput.date1,RevenueInput.date2);
    if(this.valid)
    this.myservice.getRevenueData(RevenueInput).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.status=true;
    this.revenuedata = response;
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

