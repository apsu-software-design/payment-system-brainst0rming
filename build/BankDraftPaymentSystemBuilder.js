"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDraftPaymentSystemBuilder = void 0;
const PaymentSystemBuilder_1 = require("./PaymentSystemBuilder");
const BankDraftPaymentSystem_1 = require("./BankDraftPaymentSystem");
const readlineSync = require("readline-sync");
class BankDraftPaymentSystemBuilder extends PaymentSystemBuilder_1.PaymentSystemBuilder {
    isMatch(id) {
        return id == "BANK_DRAFT";
    }
    build() {
        console.log('Enter Bank Account Details.');
        let n = readlineSync.question('  Name: ');
        let routing = readlineSync.question('  Bank Routing Number: ');
        let account = readlineSync.question('  Bank Account Number: ');
        this._paymentSystem = new BankDraftPaymentSystem_1.BankDraftPaymentSystem(n, routing, account);
    }
}
exports.BankDraftPaymentSystemBuilder = BankDraftPaymentSystemBuilder;
//# sourceMappingURL=BankDraftPaymentSystemBuilder.js.map