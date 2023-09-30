// Generics
interface Ipost<T> {
    id : number , 
    title : string , 
    desc ?: string,
    extra : T[]
}

const Ipost01 : Ipost <string> = {
    id : 1 , 
    title : "string" , 
    extra : ["",""]
}