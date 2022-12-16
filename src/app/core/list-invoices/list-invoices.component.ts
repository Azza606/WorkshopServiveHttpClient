import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/invoice';
import { InvoiceServiceService } from 'src/app/service/invoice-service.service';

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css']
})
export class ListInvoicesComponent implements OnInit {

  listInvoice!: Invoice[];
  constructor(private invoiceServiceService:InvoiceServiceService) { }

  ngOnInit(): void {
    this.invoiceServiceService.fetchInvoices().subscribe((data: Invoice[])=>
      this.listInvoice=data);
  }
}
