let num=prompt("Enter Positive number ");
let num_pos=Math.abs(num);

var num_arr=[];
for(let i=1;i<=num_pos;i++){
    num_arr.push(i);
}
console.log(num_arr);
//document.write(num_arr);

function Isodd(value, index, array) {

    if (value % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
}
var result = num_arr.filter(Isodd);
console.log(result);
//document.write(result);

for ( var i = 0; i < result.length;i++) {
    result[i] = result[i]*result[i]*result[i];
 }
console.log(result);
 //document.write(result);
