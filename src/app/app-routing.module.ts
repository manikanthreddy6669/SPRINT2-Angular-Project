import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';
import { SalesReportComponent } from './sales-report/sales-report.component';


const routes: Routes = [{path:'salesreport',component:SalesReportComponent},
{path:'revenuereport',component:RevenueReportComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
