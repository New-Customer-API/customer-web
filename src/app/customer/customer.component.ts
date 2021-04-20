import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Address, Contact, CustomerModel } from './customer';
import { ViewType } from './view-type';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Array<CustomerModel> = new Array();

  customer: CustomerModel = new CustomerModel();

  address: Address = new Address();

  contact: Contact = new Contact();

  fullName: string = "";

  viewType: ViewType = ViewType.SEARCH;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  public search() {
    this.customerService.getAllCustomer(this.fullName).subscribe(data => {
      this.customers = data ? data : new Array();
      this.viewType = ViewType.SUMMARY;
    },
    error => {
      console.log(error);
    });
  }

  search_all() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data ? data : new Array();
      this.viewType = ViewType.SUMMARY;
    },
    error => {
      console.log(error);
    });
  }

  detail(id: any) {

    this.customerService.getCustomer(id).subscribe(data => {
      this.customer = data;
      this.address = data.address ? data.address[0] : new Address();
      this.contact = data.contact ? data.contact[0] : new Contact();
      this.viewType = ViewType.DETAIL;
    },
    error => {
      console.log(error);
    });
  }

  backOne() {
    this.viewType = ViewType.SEARCH;
  }

  backTwo() {
    this.viewType = ViewType.SUMMARY;
  }

}
