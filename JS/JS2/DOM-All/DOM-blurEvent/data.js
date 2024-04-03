/* function changeCase(){
  let message=document.getElementById('uname').value
  //alert(message.toUpperCase())
  document.getElementById('uname').value = message.toUpperCase()
} */

function changeCase(){
  let input_Ref = document.getElementById('uname')
  let message = input_Ref.value;
  input_Ref.value = message.toUpperCase()
}

let changeColor=()=>{
let input_Ref = document.getElementById('uname')
    input_Ref.style.backgroundColor  = "blue"
}