let details =async ()=>{
await fetch('https://dummyjson.com/users')
.then((resp)=>{
   console.log(resp.data())
})
.catch()

}
details()