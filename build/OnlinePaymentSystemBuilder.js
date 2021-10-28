"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlinePaymentSystemBuilder = void 0;
const PaymentSystemBuilder_1 = require("./PaymentSystemBuilder");
const OnlinePaymentSystem_1 = require("./OnlinePaymentSystem");
const readlineSync = require("readline-sync");
class OnlinePaymentSystemBuilder extends PaymentSystemBuilder_1.PaymentSystemBuilder {
    isMatch(id) {
        return id == "ONLINE";
    }
    build() {
        console.log('Enter Online Payment Details.');
        let e = readlineSync.question('  Enter Your Email Address: ');
        let pass = readlineSync.question('  Enter Your Payment Password: ');
        this._paymentSystem = new OnlinePaymentSystem_1.OnlinePaymentSystem(e, pass);
    }
}
exports.OnlinePaymentSystemBuilder = OnlinePaymentSystemBuilder;
//# sourceMappingURL=OnlinePaymentSystemBuilder.js.map