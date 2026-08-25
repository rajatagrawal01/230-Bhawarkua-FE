console.time("First")

console.log("This is log")
console.warn("This is warning");
console.error("This is error");
console.info("Info");
console.table(['Rajat','Anjali','Neha'])

console.timeEnd("First")

console.time("Second")

console.table([{
    name:'Rajat',
    age:23,
    mob:2423232
},
{
    name:'Neha',
    age:23,
    mob:2423232
},
{
    name:'Anjali',
    age:23,
    mob:2423232
}
])

console.timeEnd("Second")
