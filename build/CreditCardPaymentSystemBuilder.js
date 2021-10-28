"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPaymentSystemBuilder = void 0;
const PaymentSystemBuilder_1 = require("./PaymentSystemBuilder");
const CreditCardPaymentSystem_1 = require("./CreditCardPaymentSystem");
const readlineSync = require("readline-sync");
class CreditCardPaymentSystemBuilder extends PaymentSystemBuilder_1.PaymentSystemBuilder {
    isMatch(id) {
        return id == "CREDIT_CARD";
    }
    build() {
        console.log('Enter Credit Card Payment Details.');
        let n = readlineSync.question('  Name: ');
        let ccNum = readlineSync.question('  Credit Card Number: ');
        let ccExp = readlineSync.question('  Credit Card Expiration Date (MM/DD): ');
        this._paymentSystem = new CreditCardPaymentSystem_1.CreditCardPaymentSystem(n, ccNum, ccExp);
    }
}
exports.CreditCardPaymentSystemBuilder = CreditCardPaymentSystemBuilder;
//# sourceMappingURL=CreditCardPaymentSystemBuilder.js.map