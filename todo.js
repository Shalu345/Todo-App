

let input=document.getElementById('inp');
let text=document.querySelector('.text');

function Add(){
if(input.value== "" ){
    alert("please enter your task completed");
}
  else{
    let newelement=document.createElement('ul');
    newelement.innerHTML=`${input.value} <i class="fa -solid fa-trash"></i>`;
    text.appendChild(newelement);
    input.value="";
    newelement.querySelector("i").addEventListener("click",remove);
    function remove(){
        newelement.remove()
    }
  }
}