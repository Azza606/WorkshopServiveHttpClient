import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
 // invoicesUrl : string = "/api/invoices";
  constructor(private http: HttpClient) { }
  

 /* addInvoice(data: any) {
    return this.http.post(this.invoicesUrl, data)
  }*/
  fetchInvoices():Observable<Invoice[]> {
    return this.http.get<Invoice[]>("http://localhost:3000/invoices/")
  }
removeInvoice(id:any) {
    return this.http.delete("http://localhost:3000/invoices/"+id)
  }
   /* updateInvoice(data: any,id:any) {
    return this.http.put(this.invoicesUrl+id, data)
  }*/
  getInvoiceById(id:any):Observable<Invoice> {
    return this.http.get<Invoice>("http://localhost:3000/invoices/"+id)
  }
}
