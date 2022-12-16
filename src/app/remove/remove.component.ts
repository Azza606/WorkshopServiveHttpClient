import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceServiceService } from '../service/invoice-service.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  id:any;

  constructor(private invoiceServiceService:InvoiceServiceService,
    private ac:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['removeId']
    this.invoiceServiceService.removeInvoice(this.id).subscribe(
      ()=>{
        this.router.navigate(['invoices'])
      }
    );
  }

}
