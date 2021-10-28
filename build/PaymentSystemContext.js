"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PaymentSystemContext__paymentSystemBuilders;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSystemContext = void 0;
const CreditCardPaymentSystemBuilder_1 = require("./CreditCardPaymentSystemBuilder");
const BankDraftPaymentSystemBuilder_1 = require("./BankDraftPaymentSystemBuilder");
const OnlinePaymentSystemBuilder_1 = require("./OnlinePaymentSystemBuilder");
const OfflinePaymentSystemBuilder_1 = require("./OfflinePaymentSystemBuilder");
class PaymentSystemContext {
    constructor() {
        _PaymentSystemContext__paymentSystemBuilders.set(this, void 0);
        __classPrivateFieldSet(this, _PaymentSystemContext__paymentSystemBuilders, [], "f");
        __classPrivateFieldGet(this, _PaymentSystemContext__paymentSystemBuilders, "f").push(new CreditCardPaymentSystemBuilder_1.CreditCardPaymentSystemBuilder());
        __classPrivateFieldGet(this, _PaymentSystemContext__paymentSystemBuilders, "f").push(new BankDraftPaymentSystemBuilder_1.BankDraftPaymentSystemBuilder());
        __classPrivateFieldGet(this, _PaymentSystemContext__paymentSystemBuilders, "f").push(new OnlinePaymentSystemBuilder_1.OnlinePaymentSystemBuilder());
        __classPrivateFieldGet(this, _PaymentSystemContext__paymentSystemBuilders, "f").push(new OfflinePaymentSystemBuilder_1.OfflinePaymentSystemBuilder());
    }
    execute(id) {
        let psb = __classPrivateFieldGet(this, _PaymentSystemContext__paymentSystemBuilders, "f").filter(builder => builder.isMatch(id))[0];
        psb.build();
        psb.getPaymentSystem().validate();
    }
}
exports.PaymentSystemContext = PaymentSystemContext;
_PaymentSystemContext__paymentSystemBuilders = new WeakMap();
//# sourceMappingURL=PaymentSystemContext.js.map