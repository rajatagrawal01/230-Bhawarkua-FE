// ============================================Arrow Function===============================
// function add(a,b){
//     console.log("Hello");
//     return a+b;
// }

// // add(2,3)
// var sum=add(2,3)
// console.log(sum);

// var add=(a,b)=>{
//     console.log("Hello");
//     return a+b;
// }





// ======================With parameter=============================
// const add= (a,b)=> a+b //for single line return
// const add = (a, b) => {
//   console.log("Hello");
//   return a + b;
// };
// console.log(add(2, 3));

// 

// ======================Single parameter=============================

// const square= x =>x*x
// console.log(square(5));

// const greet=stuName =>"Hello "+stuName

// console.log(greet("Neha"));

// ======================Without parameter=============================

// const greet= ()=>console.log("Hello");

// greet()



const obj={
    stuName:"Rajat",
    designation:"Developer",
    normal:function () {
        console.log(this.stuName);
        console.log(this.designation);
    },
    arrow:()=>{
        console.log(this.stuName);
    }
}

// obj.normal() // returns valid output
// obj.arrow() // returns undefined