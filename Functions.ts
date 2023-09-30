// First Function void
let sayHy = () =>{
    console.log("Hi,")
}

//Function return string
let function_return_string = ():string =>{
    return "Maftouh Omar"
}

// Function with parametre
let function_para = (num : number):number =>{
    return num*num;
}
function_para(1)

//function parametre by obj
let function_para_obj = (user:{userName : string , age : number , phone?:string}) =>{
    console.log(user.userName)
}
//Object
type userType = {
    userName : string , 
    age : number,
    phone ?: string
}
//better then function_para_obj
let better_funct = (user:userType) =>{
    console.log(user.userName)
}

//type function
type func = (a:number , b:number) => void
let use_func : func = (num , temp)=>{
    console.log(num+"Temps : "+temp)
}

//object Contain 2 option
type userObj2 = {
    usserName : string,
    age : number , 
    phone ?: string , 
    theme : "dark" | "light"
}
const userWhitTheme : userObj2 = {
    usserName : "maftouh oamr",
    age : 18 ,
    theme : "dark"
}