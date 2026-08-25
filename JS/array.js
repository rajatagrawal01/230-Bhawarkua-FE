var a=[123,"Hello",true]

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a);
a[0]="Rajat";
console.log(a);

for(var i=0;i<a.length;i++){
    console.log(a[i]);
}

var b=[]

for(var i=0;i<6;i++){
    b[i]= parseFloat(prompt("Enter value"))
}

console.log(b);
