export class CustomerModel {

    public id?: number;
    public fullName?: string;
    public nickName?: string;
    public document?: string;
    public documentType?: String;
    public createdAt?: String;
    public email?: Array<String> = new Array();
    public address?: Array<Address> =  new Array();
    public contact?: Array<Contact> =  new Array();

    
}

export class Address {

    public complement?: string;
    public neighborhood?: string;
    public state?: string;
    public country?: string;
    public city?: string;
    public number?: string;

}

export class Contact {

    public countryCode?: string;
    public areaCode?: string;
    public phoneNumber?: string;

}