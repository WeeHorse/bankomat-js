const Bankomat = require("./bankomat.js");
const Card = require("./card.js");
const Account = require("./account.js");

let bankomat = new Bankomat();
let account = new Account();
let card = new Card(account);

bankomat.insertCard(card);
console.log(bankomat.getMessage());
bankomat.enterPin("1234");
console.log(bankomat.getMessage());
bankomat.enterPin("0123");
console.log(bankomat.getMessage());
bankomat.withdraw(15000);
console.log(bankomat.getMessage());
bankomat.withdraw(8000);
console.log(bankomat.getMessage());
bankomat.withdraw(3000);
console.log(bankomat.getMessage());
bankomat.ejectCard();
console.log(bankomat.getMessage());