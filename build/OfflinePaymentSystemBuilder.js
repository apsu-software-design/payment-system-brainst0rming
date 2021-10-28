"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflinePaymentSystemBuilder = void 0;
const PaymentSystemBuilder_1 = require("./PaymentSystemBuilder");
const OfflinePaymentSystem_1 = require("./OfflinePaymentSystem");
const readlineSync = require("readline-sync");
class OfflinePaymentSystemBuilder extends PaymentSystemBuilder_1.PaymentSystemBuilder {
    isMatch(id) {
        return id == "OFFLINE";
    }
    build() {
        console.log('Enter Offline Payment Details.');
        let n = readlineSync.question('  Name: ');
        let address = readlineSync.question('  Enter Your Billing Address: ');
        this._paymentSystem = new OfflinePaymentSystem_1.OfflinePaymentSystem(n, address);
    }
}
exports.OfflinePaymentSystemBuilder = OfflinePaymentSystemBuilder;
//# sourceMappingURL=OfflinePaymentSystemBuilder.js.map