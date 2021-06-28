'use strict';

const workingHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

function Location(name, minCustomer, maxCustomer, avgCookies, customerEachHour, cookiesEachHour, total) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.customerEachHour = customerEachHour,
  this.cookiesEachHour = cookiesEachHour;
  this.total = total;
}


let Seattle = new Location('Seattle', 23, 65, 6.3, [], [], 0);
console.log(Seattle);

let Tokyo = new Location('Tokyo', 3, 24, 1.2, [], [], 0);
console.log(Tokyo);

let Dubai = new Location('Dubai', 11, 38, 3.7, [], [], 0);
console.log(Dubai);

let Paris = new Location('Paris', 20, 38, 2.3, [], [], 0);
console.log(Paris);

let Lima = new Location('Lima', 2, 16, 4.6, [], [], 0);
console.log(Lima);
//--------------------------------
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
Location.prototype.getRand = function () {
  this.rand = randomNumber(this.minCustomer, this.maxCustomer);
};
Location.prototype.calclateHour = function () {
  for (let i = 0; i < workingHours.length; i++) {
    this.customerEachHour.push(randomNumber(this.minCustomer, this.maxCustomer));
  }
};
Location.prototype.calclateCok = function () {
  for (let i = 0; i < workingHours.length; i++) {
    this.cookiesEachHour.push(Math.floor(this.avgCookies * this.customerEachHour[i]));
    this.total += this.cookiesEachHour[i];
  }
},
Seattle.getRand();
Tokyo.getRand();
Dubai.getRand();
Paris.getRand();
Lima.getRand();
Seattle.calclateHour();
Tokyo.calclateHour();
Dubai.calclateHour();
Paris.calclateHour();
Lima.calclateHour();
Seattle.calclateCok();
Tokyo.calclateCok();
Dubai.calclateCok();
Paris.calclateCok();
Lima.calclateCok();




//******************************************* lab6 code ********************************************************//

// const workingHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let Seattle = {
//   name: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookies: 6.3,
//   customerEachHour: [],
//   cookiesEachHour: [],
//   total: 0,
//   calcCustomersEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.customerEachHour.push(randomNumber(this.minCustomer, this.maxCustomer));
//     }
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.cookiesEachHour.push(Math.floor(this.avgCookies * this.customerEachHour[i]));
//       this.total += this.cookiesEachHour[i];
//     }
//   },
//   render: function () {
//     let parent = document.getElementById('result');
//     console.log(parent);
//     let shopName = document.createElement('h3');
//     parent.appendChild(shopName);
//     shopName.textContent = this.name;
//     let unOrderList = document.createElement('ul');
//     parent.appendChild(unOrderList);
//     for (let i = 0; i < workingHours.length; i++) {
//       let listitem = document.createElement('li');
//       unOrderList.appendChild(listitem);
//       listitem.textContent = `  ${workingHours[i]}${this.cookiesEachHour[i]} Cookies`;
//     }
//     let totalitem = document.createElement('li');
//     unOrderList.appendChild(totalitem);
//     totalitem.textContent = `Total: ${this.total} Cookies`;
//   }

// };

// Seattle.calcCustomersEachHour();
// Seattle.calcCookiesEachHour();
// Seattle.render();

// let Tokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookies: 1.2,
//   customerEachHour: [],
//   cookiesEachHour: [],
//   total: 0,
//   calcCustomersEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.customerEachHour.push(randomNumber(this.minCustomer, this.maxCustomer));
//     }
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.cookiesEachHour.push(Math.floor(this.avgCookies * this.customerEachHour[i]));
//       this.total += this.cookiesEachHour[i];
//     }
//   },
//   render: function () {
//     let parent = document.getElementById('result');
//     console.log(parent);
//     let shopName = document.createElement('h3');
//     parent.appendChild(shopName);
//     shopName.textContent = this.name;
//     let unOrderList = document.createElement('ul');
//     parent.appendChild(unOrderList);
//     for (let i = 0; i < workingHours.length; i++) {
//       let listitem = document.createElement('li');
//       unOrderList.appendChild(listitem);
//       listitem.textContent = `  ${workingHours[i]}${this.cookiesEachHour[i]} Cookies`;
//     }
//     let totalitem = document.createElement('li');
//     unOrderList.appendChild(totalitem);
//     totalitem.textContent = `Total: ${this.total} Cookies`;
//   }

// };

// Tokyo.calcCustomersEachHour();
// Tokyo.calcCookiesEachHour();
// Tokyo.render();

// let Dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookies: 3.7,
//   customerEachHour: [],
//   cookiesEachHour: [],
//   total: 0,
//   calcCustomersEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.customerEachHour.push(randomNumber(this.minCustomer, this.maxCustomer));
//     }
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.cookiesEachHour.push(Math.floor(this.avgCookies * this.customerEachHour[i]));
//       this.total += this.cookiesEachHour[i];
//     }
//   },
//   render: function () {
//     let parent = document.getElementById('result');
//     console.log(parent);
//     let shopName = document.createElement('h3');
//     parent.appendChild(shopName);
//     shopName.textContent = this.name;
//     let unOrderList = document.createElement('ul');
//     parent.appendChild(unOrderList);
//     for (let i = 0; i < workingHours.length; i++) {
//       let listitem = document.createElement('li');
//       unOrderList.appendChild(listitem);
//       listitem.textContent = `  ${workingHours[i]}${this.cookiesEachHour[i]} Cookies`;
//     }
//     let totalitem = document.createElement('li');
//     unOrderList.appendChild(totalitem);
//     totalitem.textContent = `Total: ${this.total} Cookies`;
//   }

// };

// Dubai.calcCustomersEachHour();
// Dubai.calcCookiesEachHour();
// Dubai.render();


// let Paris = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookies: 2.3,
//   customerEachHour: [],
//   cookiesEachHour: [],
//   total: 0,
//   calcCustomersEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.customerEachHour.push(randomNumber(this.minCustomer, this.maxCustomer));
//     }
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.cookiesEachHour.push(Math.floor(this.avgCookies * this.customerEachHour[i]));
//       this.total += this.cookiesEachHour[i];
//     }
//   },
//   render: function () {
//     let parent = document.getElementById('result');
//     console.log(parent);
//     let shopName = document.createElement('h3');
//     parent.appendChild(shopName);
//     shopName.textContent = this.name;
//     let unOrderList = document.createElement('ul');
//     parent.appendChild(unOrderList);
//     for (let i = 0; i < workingHours.length; i++) {
//       let listitem = document.createElement('li');
//       unOrderList.appendChild(listitem);
//       listitem.textContent = `  ${workingHours[i]}${this.cookiesEachHour[i]} Cookies`;
//     }
//     let totalitem = document.createElement('li');
//     unOrderList.appendChild(totalitem);
//     totalitem.textContent = `Total: ${this.total} Cookies`;
//   }

// };

// Paris.calcCustomersEachHour();
// Paris.calcCookiesEachHour();
// Paris.render();

// let Lima = {
//   name: 'Lima',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookies: 2.3,
//   customerEachHour: [],
//   cookiesEachHour: [],
//   total: 0,
//   calcCustomersEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.customerEachHour.push(randomNumber(this.minCustomer, this.maxCustomer));
//     }
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.cookiesEachHour.push(Math.floor(this.avgCookies * this.customerEachHour[i]));
//       this.total += this.cookiesEachHour[i];
//     }
//   },
//   render: function () {
//     let parent = document.getElementById('result');
//     console.log(parent);
//     let shopName = document.createElement('h3');
//     parent.appendChild(shopName);
//     shopName.textContent = this.name;
//     let unOrderList = document.createElement('ul');
//     parent.appendChild(unOrderList);
//     for (let i = 0; i < workingHours.length; i++) {
//       let listitem = document.createElement('li');
//       unOrderList.appendChild(listitem);
//       listitem.textContent = `  ${workingHours[i]}${this.cookiesEachHour[i]} Cookies`;
//     }
//     let totalitem = document.createElement('li');
//     unOrderList.appendChild(totalitem);
//     totalitem.textContent = `Total: ${this.total} Cookies`;
//   }

// };

// Lima.calcCustomersEachHour();
// Lima.calcCookiesEachHour();
// Lima.render();
