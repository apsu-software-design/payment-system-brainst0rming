"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const readlineSync = require("readline-sync");
const PaymentSystemContext_1 = require("./PaymentSystemContext");
function start() {
    showMainMenu(new PaymentSystemContext_1.PaymentSystemContext());
}
exports.start = start;
function showMainMenu(psc) {
    while (true) {
        console.log(`Welcome to the Payment System! You wish to purchase an item for $5. Pick an option:
  1. Use a credit card.
  2. Use a bank draft.
  3. Use an online payment system.
  4. Use an offline payment system.
  5. Quit.`);
        let response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
        switch (response) {
            case '1':
                psc.execute("CREDIT_CARD");
                break;
            case '2':
                psc.execute("BANK_DRAFT");
                break;
            case '3':
                psc.execute("ONLINE");
                break;
            case '4':
                psc.execute("OFFLINE");
                break;
            default:
                console.log('Invalid option!');
        }
        console.log('');
    }
}
//# sourceMappingURL=ui.js.map