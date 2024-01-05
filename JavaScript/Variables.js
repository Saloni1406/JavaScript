const accountId = 12345 //Value cannot be changed
let accountEmail = "saloni@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
// accountId = 2 --> Not allowed
accountEmail = "saloni123@gmail.com"
accountPassword = "1234512345"
accountCity = "Delhi123"

let accountState
console.log(accountId)
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])