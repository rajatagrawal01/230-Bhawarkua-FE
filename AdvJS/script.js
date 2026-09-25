// users=[
//     {
//         name:"rajat",
//         age:34
//     },
//     {
//         name:"Neha",
//         age:34
//     }

// ]

// console.log("Old",users);
// users[0].name="Rahul"
// console.log("New",users);


var bulb = document.getElementById("blb")
var on = document.getElementById("on")
var off = document.getElementById("off")
var btn = document.getElementById("btn")


// on.addEventListener("click",()=>{
//     bulb.src='on.png'
// })
// off.addEventListener("click",()=>{
//     bulb.src='off.png'
// })

btn.addEventListener('click', () => {
    console.log(bulb.src);

    if (bulb.src.endsWith('on.png')) {
        bulb.src = 'off.png';
        btn.textContent = "Turn On";
    } else {
        bulb.src = 'on.png';
        btn.textContent = "Turn Off";
    }
})