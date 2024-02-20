//What is spread?  - extract and copy
let ids=[101,102,103,104] 

/* let new_Ids=ids.map((id)=>{
    return id
}) */
let new_Ids = [...ids]
console.log(new_Ids)