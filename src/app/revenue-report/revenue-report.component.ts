import { Component, OnInit } from '@angular/core';
import { MyserviceService, MyForm, RevenueReport } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revenue-report',
  templateUrl: './revenue-report.component.html',
  styleUrls: ['./revenue-report.component.css']
})
export class RevenueReportComponent implements OnInit {
  revenuedata: RevenueReport[];
  status: boolean;
  message: string;
  mstatus = false;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.status = false;

  }
  ngOnInit(): void {
  }
  Submit(RevenueInput: MyForm): any {
    console.log(RevenueInput);
    this.myservice.getRevenueData(RevenueInput).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.status = true;
    this.revenuedata = response;
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

