const batan=document.getElementById("btn")
const pwd=document.getElementById("pwd")
let msg=document.getElementById("message")


pwd.addEventListener("keyup",(e)=>{
    var pswrd=pwd.value
    if(pswrd.length<=5){
        // console.log("Enter password greater than 5");
        msg.innerText="Enter Password greater than 5"
    }
    else{
        console.log("Success");
        // msg.innerText="Correct Password"
        // msg.style.color="green"
        msg.style.visibility="hidden"
    }  
})

batan.addEventListener("click",()=>{
    if(pwd.value.length<=5){
        alert("Enter greater password");
    }
})