'use strict';
console.log(this)
    // normal  function me undefined aaya h
const calcAge = function(birthyear) {
    console.log(2047 - birthyear)
    console.log(this)
}

calcAge(2002);
// Arrow Function me windlow object aa gya
const calcAgeArrow = birthyear => {
    console.log(2037 - birthyear);
    console.log(this);
};
calcAgeArrow(1980);

// Now lets see in object

const rudresh = {
        name: 'Rudresh',
        year: 2002,
        cyberpunkYear: 2047,
        calcAge: function() {
            console.log(this);
            console.log(this.cyberpunkYear - this.year);


        }

    }
    // object ke andar function ko ese call karte hai wow
rudresh.calcAge();

const meghna = {
    year: 2017,
}

meghna.calcAge = rudresh.calcAge;
meghna.calcAge();
// hum dusre object ki value ko call kr sakte h 
// or copy karte waqt hame call nhi karna hota hai