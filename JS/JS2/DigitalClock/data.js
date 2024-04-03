setInterval(()=>{

let dt = new Date()
let ct = dt.toLocaleTimeString()
document.getElementById('abc').innerHTML = ct
},1000)
