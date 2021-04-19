import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { CustomerModel } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Array<CustomerModel> | undefined = new Array();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  public search(fullName: string) {
    this.customerService.getCustomer(fullName).subscribe(data => {
      this.customers = data;
  });
  }

}
