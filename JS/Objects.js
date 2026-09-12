// var stu={
//     name:"Rahul",
//     age:23,
//     mob:23313324,
//     city:"Indore",
//     active:true
// }
// console.log(stu);
// console.log(stu.name);
// console.log(Object.keys(stu));
// console.log(Object.values(stu));
// console.log(Object.entries(stu));

var stu = {
    name: "Rahul",
    age: 23,
    mob: [723865238, 2387623],
    city: "Indore",
    active: true,
}
console.log(stu.mob[1]);

var arr =
    [1,
        2,
        3,
        4,
        5,
        {
            name: "Rahul",
            age: 23,
            mob: [23313324,234234234],
            city: "Indore",
            active: true
        }]


console.log(arr[5].mob[1]);
