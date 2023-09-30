// All type of variable

// test number
let Test_Number : number
Test_Number = 10

// Test String
let Test_String : string 
Test_String = "MAFTOUH"

// Test String or number
let Numer_Or_String : number | string
Numer_Or_String = 10
Numer_Or_String = "13"

// Test Array String
let Array_String : string[]
Array_String = ['4','5']

// Test Array Number
let Array_Number : number[]
Array_Number = [4,5]

// Test Array Number or Syring
let Array_Number_Or_String : (string | number)[]
Array_Number_Or_String = [4,5]
Array_Number_Or_String = ['6','7']

// Object
let user = {
    userName : "Omar",
    age : 20,
    isAdmin : false
}
user.userName = "Ali"
user.age = 28
user.isAdmin = true

let userObj : {
    userName : string , 
    age : number,
    isAdmin ?: boolean
}

userObj = {
    userName : "Omar",
    age : 20 ,
    //isAdmin is not required by *isAdmin ?: boolean
    isAdmin : true
}

//Any Type
let Any_Type ;
Any_Type = 12
Any_Type = "Omar"
Any_Type = true

//Any type on Array
let Array_Any_Type : any[]
Array_Any_Type = [1,"Omar",true]