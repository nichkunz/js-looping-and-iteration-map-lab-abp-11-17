// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function (driver){
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver){
    const driverFName = driver.split(" ")[0];
    const driverLName = driver.split(" "[1]);
    return { firstName: driverFName, lastName: driverLName };
  })
}

// function nameToAttributes(drivers){
// //make new array with 2 object attributes, firstName and lastName
//   return drivers.map(function (driver){
//     driver.split(" ");
//   })
// }


//
// const nameToAttributes = drivers.map(function(driver) {
//   let newDrivers = drivers.split(" ");
//   return Object.assign({}, newDrivers, { firstName: newDrivers[0]})
//   return Object.assign({}, newDrivers, { lastName: newDrivers[1]})
// })


// function nameToAttributes(drivers){
//   return drivers.map(function (driver){
//     driver.split(" ");
//       Object.assign({}, driver, {driver[0] : driver[1]};
//   })
// }
//
// function nameToAttributes(drivers) {
//
// }
