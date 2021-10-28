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
var _CreditCardPaymentSystem__name, _CreditCardPaymentSystem__creditCardNumber, _CreditCardPaymentSystem__creditCardExpirationDate;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPaymentSystem = void 0;
class CreditCardPaymentSystem {
    constructor(name, cardNumber, cardExpiryDate) {
        _CreditCardPaymentSystem__name.set(this, void 0);
        _CreditCardPaymentSystem__creditCardNumber.set(this, void 0);
        _CreditCardPaymentSystem__creditCardExpirationDate.set(this, void 0);
        __classPrivateFieldSet(this, _CreditCardPaymentSystem__name, name, "f");
        __classPrivateFieldSet(this, _CreditCardPaymentSystem__creditCardNumber, cardNumber, "f");
        __classPrivateFieldSet(this, _CreditCardPaymentSystem__creditCardExpirationDate, cardExpiryDate, "f");
    }
    validate() {
        let valid = /^[\w.' ]+$/.test(__classPrivateFieldGet(this, _CreditCardPaymentSystem__name, "f")) && /\d{15,16}/.test(__classPrivateFieldGet(this, _CreditCardPaymentSystem__creditCardNumber, "f")) && /\d\d\/\d\d/.test(__classPrivateFieldGet(this, _CreditCardPaymentSystem__creditCardExpirationDate, "f"));
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
exports.CreditCardPaymentSystem = CreditCardPaymentSystem;
_CreditCardPaymentSystem__name = new WeakMap(), _CreditCardPaymentSystem__creditCardNumber = new WeakMap(), _CreditCardPaymentSystem__creditCardExpirationDate = new WeakMap();
//# sourceMappingURL=CreditCardPaymentSystem.js.map