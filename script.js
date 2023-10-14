let card1 = {
  number: 123456,
  name: "John",
  surname: "Johnson",
  code: 6785,
  balance: 1000,
  bank: "Mono",
};

let card2 = {
  number: 678901,
  name: "Joan",
  surname: "Joanson",
  code: 6711,
  balance: 100,
  bank: "Mono",
};

let atm1 = {
  number: 123,
  showAccount: function (card) {
    if (this.check(card)) {
      alert(card.balance);
    }
  },
  getMoney: function (card, sum) {
    
  },
  check: function (card) {
    const code = +prompt("input code");
    if (code === card.code) {
      alert("Right code");
      return true;
    } else {
      alert("Wrong code");
      return false;
    }
  },
};

atm1.showAccount(card1);
