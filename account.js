
// const moment = require('moment');


// class Account {
//     #amount;
//     #account_id;

//     constructor(name, amount, account_id) {
//         this.name = name;
//         this.#amount = amount;
//         this.#account_id = account_id;
//     }

//     balanceInfo() {
//         console.log(`Sizning hisobingiz qoldiq ${this.#amount}$`);
//         return this.#amount;
//     }

//     withdrawMoney(amount) {
//         if (this.#amount > amount) {
//             this.#amount -= amount;
//             console.log(`Hisobdan ${amount}$ yechib olindi va qoldiq ${this.#amount}$`);
//         } else {
//             console.log("Hisobda pul yetarli emas. Hisobingizda: " , this.#amount + "$");
            
//         }
//     }

//     makeDeposit(amount) {
//         this.#amount += amount;
//         console.log(`Hisobingiz ${amount}$ ga toldirildi`);
//     }

//     giveDetails() {
//         console.log(`Salom hurmatli ${this.name} mijoz! Sizning hisobda ${this.#amount}$ mablag' bor`);
//         console.log(`Sizning hisob raqamingiz: ${this.#account_id}`);
//     }

//     static tellAboutClass() {
//         console.log("Bu class mijozlar hisob raqami haqida malumot beradi va amallar bajaradi!")
//     }

//     static tellMeTime() {
//         console.log(`Hozirgi vaqt ${moment().format("YYYY MM DD HH:mm:ss")}`);
//     }
// }

// module.exports = Account;