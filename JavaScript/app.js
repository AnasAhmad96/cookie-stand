// 'use strict';

let Seattle = {
  min: 23,
  max: 65,
  avg: 6.3,
  cutomer:0,
  time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
  numOfCustPerHr: function () {
    return this.cutomer = Math.ceil(getRandomArbitrary(23, 65));
  }
};

console.log(Seattle.numOfCustPerHr());

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// function Numcok(min , max , avg) {
//   return Math.ceil ((this.max,this.min)*avg);
// }
// console.log(Numcok(max,min)*avg);

let parent = document.getElementById('Seatle-Details');
console.log(parent);

// console.log(Seattle.getRandomNum(23, 65)[0]/2);

let UnorederList = document.createElement('ul');
parent.appendChild(UnorederList);
for (let index = 0; index < Seattle.time.length; index++) {
  let listItem = document.createElement('li');
  UnorederList.appendChild(listItem);
  Seattle.numOfCustPerHr();
  listItem.textContent = `${Seattle.time[index]}: ${Math.floor( Seattle.cutomer*Seattle.avg)} cookies purchased per customer.`;
}



// let Tokyo = {
//     min: 3,
//     max: 24,
//     avg: 1.2,

// };

// let Dubai = {
//     min: 11,
//     max: 38,
//     avg: 3.7,

// };

// let Paris = {
//     min: 20,
//     max: 38,
//     avg: 2.3,

// };

// let Lima = {
//     min: 2,
//     max: 16,
//     avg: 4.6,

// };
