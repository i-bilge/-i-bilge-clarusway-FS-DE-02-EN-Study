const calculateTotal = (total, vat = 0.18) => total * (1 + vat);

const fahrenheitToCelsius = (temp) => (temp - 32) / 1.8;

const celsiusToFahrenheit = (temp) => temp * 1.8 + 32;



const produceUser = (firstName, secondName, age) => {
    const user = {
        firstName,
        secondName,
        // joined: new Date(),
        age
    }
    return user
}

// node modules export syntax
// module.exports = {
//     calculateTotal,
//     fahrenheitToCelsius,
//     celsiusToFahrenheit,
//     produceUser,
//   };

export { calculateTotal,
        fahrenheitToCelsius,
        celsiusToFahrenheit,
        produceUser}
