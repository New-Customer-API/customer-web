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

    private urlAPI = "http://54.167.61.174:8080";

    getCustomer(fullName: string): Observable<Array<CustomerModel> | undefined> {
        const params = new Map<string, string>();
        params.set('fullName', fullName);
        
        let endpoint: string = this.urlAPI + "/api/v1/customers?fullName=" + fullName;

        return this.httpClient.get(endpoint)
        .pipe(map((response: Wrapper<CustomerModel>) => response.data));

    }

}