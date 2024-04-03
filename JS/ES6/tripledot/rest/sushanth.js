let ids  = [101,[102,103,104]]

//ids[0]   ;  101             //not iterable
//ids[1]   ; [102,103,104]    //iterablle
let new_arr = [...ids[1]]
console.log(new_arr)