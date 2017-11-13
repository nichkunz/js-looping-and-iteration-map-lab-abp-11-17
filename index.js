// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function (driver){
    return driver.toLowerCase();
  })
}

// function nameToAttributes(drivers){
// //make new array with 2 object attributes, firstName and lastName
//   return drivers.map(function (driver){
//     driver.split(" ");
//   })
// }

const nameToAttributes = drivers.map(function(driver) {
  return Object.assign({}, driver, { firstName: driver.split(" ")})
})

}


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
