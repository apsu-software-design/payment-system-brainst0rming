import {PaymentSystem} from './payment_system';

export class BankDraftPaymentSystem implements PaymentSystem {
  #_name: string;
  #_bankRoutingNumber: string;
  #_bankAccountNumber: string;

  constructor(name: string, routingNumber: string, accountNumber: string) {
    this.#_name = name;
    this.#_bankRoutingNumber = routingNumber;
    this.#_bankAccountNumber = accountNumber;
  }
				        
  validate(): boolean {
    let valid = /^[\w.' ]+$/.test(this.#_name) && /\d{9}/.test(this.#_bankRoutingNumber) && /\d{6,12}/.test(this.#_bankAccountNumber);

    if (valid) {
      console.log("Your payment information is being encrypted.");
      console.log("The payment is being processed.");
    }
    else {
      console.log('The payment is invalid.');
    }
    
    return valid;
  }
}

