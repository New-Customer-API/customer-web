import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { CustomerModel } from '../customer/customer';
import { Wrapper } from '../customer/wrapper';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class CustomerService {

    constructor(private httpClient: HttpClient) {}

    private urlAPI = "http://3.80.185.39:8080";

    getAllCustomer(fullName?: string): Observable<Array<CustomerModel> | undefined> {

        let endpoint: string = this.urlAPI + "/api/v1/customers";
    
        if (fullName) {
            endpoint = endpoint + "?fullName=" + fullName;
        }

        return this.httpClient.get(endpoint)
        .pipe(map((response: Wrapper<CustomerModel>) => response.data));

    }

    getCustomer(id: any): Observable<CustomerModel> {

        let endpoint: string = this.urlAPI + "/api/v1/customers/" + id;

        return this.httpClient.get(endpoint)
        .pipe(map((response: CustomerModel) => response ? response : new CustomerModel()));

    }

}