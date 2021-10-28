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
var _BankDraftPaymentSystem__name, _BankDraftPaymentSystem__bankRoutingNumber, _BankDraftPaymentSystem__bankAccountNumber;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDraftPaymentSystem = void 0;
class BankDraftPaymentSystem {
    constructor(name, routingNumber, accountNumber) {
        _BankDraftPaymentSystem__name.set(this, void 0);
        _BankDraftPaymentSystem__bankRoutingNumber.set(this, void 0);
        _BankDraftPaymentSystem__bankAccountNumber.set(this, void 0);
        __classPrivateFieldSet(this, _BankDraftPaymentSystem__name, name, "f");
        __classPrivateFieldSet(this, _BankDraftPaymentSystem__bankRoutingNumber, routingNumber, "f");
        __classPrivateFieldSet(this, _BankDraftPaymentSystem__bankAccountNumber, accountNumber, "f");
    }
    validate() {
        let valid = /^[\w.' ]+$/.test(__classPrivateFieldGet(this, _BankDraftPaymentSystem__name, "f")) && /\d{9}/.test(__classPrivateFieldGet(this, _BankDraftPaymentSystem__bankRoutingNumber, "f")) && /\d{6,12}/.test(__classPrivateFieldGet(this, _BankDraftPaymentSystem__bankAccountNumber, "f"));
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
exports.BankDraftPaymentSystem = BankDraftPaymentSystem;
_BankDraftPaymentSystem__name = new WeakMap(), _BankDraftPaymentSystem__bankRoutingNumber = new WeakMap(), _BankDraftPaymentSystem__bankAccountNumber = new WeakMap();
//# sourceMappingURL=BankDraftPaymentSystem.js.map