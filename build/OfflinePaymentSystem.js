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
var _OfflinePaymentSystem__name, _OfflinePaymentSystem__billingAddress;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflinePaymentSystem = void 0;
class OfflinePaymentSystem {
    constructor(name, address) {
        _OfflinePaymentSystem__name.set(this, void 0);
        _OfflinePaymentSystem__billingAddress.set(this, void 0);
        __classPrivateFieldSet(this, _OfflinePaymentSystem__name, name, "f");
        __classPrivateFieldSet(this, _OfflinePaymentSystem__billingAddress, address, "f");
    }
    validate() {
        let valid = /^[\w.' ]+$/.test(__classPrivateFieldGet(this, _OfflinePaymentSystem__name, "f")) && /^[\w.' ]+$/.test(__classPrivateFieldGet(this, _OfflinePaymentSystem__billingAddress, "f"));
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
exports.OfflinePaymentSystem = OfflinePaymentSystem;
_OfflinePaymentSystem__name = new WeakMap(), _OfflinePaymentSystem__billingAddress = new WeakMap();
//# sourceMappingURL=OfflinePaymentSystem.js.map