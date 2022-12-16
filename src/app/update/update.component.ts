import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceServiceService } from '../service/invoice-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
i=new Invoice;
  constructor(private invoiceServiceService: InvoiceServiceService, 
    private ac:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.invoiceServiceService.getInvoiceById(this.ac.snapshot.params['idofInvoiceUpdateit']).subscribe(
      (d)=>{
this.i=d;
console.log(this.i);
      }
    )
  }

}
