import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpService: HttpClient) { }
  public getSalesData(salesInput:MyForm)
  { 
    console.log(salesInput);
    return this.httpService.get("http://localhost:4455/Reports/SalesReport/"+salesInput.date1+"/"+salesInput.date2+"/"+salesInput.userid+"/"+salesInput.category,{responseType:'json'});

  }
  public getRevenueData(revenueInput:MyForm)
  {
    console.log(revenueInput);
    return this.httpService.get<RevenueReport>("http://localhost:4545/Reports/RevenueReport/"+revenueInput.date1+"/"+revenueInput.date2+"/"+revenueInput.category,{responseType:'json'});
  }
}
export class MyForm
{
  date1:Date;
  date2:Date;
  category:String;
   userid:String;
}
export class RevenueTable
{
    userid:String;
	  date1:Date;
	  orderid:number
	 productid;number;
	 productCategory:String;
	 productPrice:number;

}
export class RevenueReport
{
  period:String;
	revenue:number
  change:number
  percentagegrowth:number
  colorcode:String;
}