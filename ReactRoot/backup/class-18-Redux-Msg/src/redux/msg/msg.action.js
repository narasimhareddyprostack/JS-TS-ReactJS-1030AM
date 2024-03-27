//action types
let GM='GM'
let GN='GN'
let GA = 'GA'
let gmAction = ()=>{
    return {type:GM}
}
let gaAction=()=>{
    return { type:GA}
}
let gnAction = ()=>{
    return {type:GN}
}
export {gmAction,gnAction,gaAction,GM,GA,GN}
