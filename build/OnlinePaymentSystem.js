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
var _OnlinePaymentSystem__email, _OnlinePaymentSystem__paymentPassword;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlinePaymentSystem = void 0;
class OnlinePaymentSystem {
    constructor(email, paymentPassword) {
        _OnlinePaymentSystem__email.set(this, void 0);
        _OnlinePaymentSystem__paymentPassword.set(this, void 0);
        __classPrivateFieldSet(this, _OnlinePaymentSystem__email, email, "f");
        __classPrivateFieldSet(this, _OnlinePaymentSystem__paymentPassword, paymentPassword, "f");
    }
    validate() {
        let valid = /^[\w@.]+$/.test(__classPrivateFieldGet(this, _OnlinePaymentSystem__email, "f")) && /\w+/.test(__classPrivateFieldGet(this, _OnlinePaymentSystem__paymentPassword, "f"));
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
exports.OnlinePaymentSystem = OnlinePaymentSystem;
_OnlinePaymentSystem__email = new WeakMap(), _OnlinePaymentSystem__paymentPassword = new WeakMap();
//# sourceMappingURL=OnlinePaymentSystem.js.map