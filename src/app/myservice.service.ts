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
  date1:String;
  date2:String;
  category:String;
   userid:String;
}
export class RevenueTable
{
    user_id:String;
	  date1:String;
	  orderid:number
	 productid;number;
	 product_category:String;
	 product_price:number;

}
export class RevenueReport
{
  period:String;
	revenue:number
  change:number
  percentagegrowth:number
  colorcode:String;
}