import { Component, OnInit } from '@angular/core';
import { MyForm, MyserviceService, RevenueTable } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  message: any;
  salesdata: RevenueTable[];
  status: boolean;
  mstatus: boolean = false;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.status = false;
  }

  ngOnInit(): void {
  }
  Submit(SalesInput: MyForm): any {

    this.myservice.getSalesData(SalesInput).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.status = true;
    this.salesdata = response;
  }

  StartDate: Date;
  onDateChange(StartDate: Date): void {
    this.StartDate = StartDate;
  }

  onDate2Change(EndDate: Date): void {
    this.message = '';
    if ((this.StartDate != null && EndDate != null) && (EndDate) < (this.StartDate)) {
      this.message = "End date should be greater than start date";
      this.mstatus = true;
    }

  }
}
