//step 1
var value = 42;
//step 2
if (value >= 53) {
    value += 42;
}   else {
    value -= 13;
};
console.log(value);
//step 3
value += "11";
console.log(value);
//step 4
var array = [];
for (var i = 0; i < value.length; i++) {
    array[i] = value.charAt(i);
    };
    console.log(value);
//step 5
    array.shift();
    array.pop();
//step 6
var newVariable = "";
    for (var i = array.length -1 ; i >= 0;  i--) {
        newVariable += array[i];
         console.log(newVariable);
        };
    
//step 7
newVariable = parseInt(newVariable);
value = parseInt(value);
console.log(value);
//step 8
value += newVariable;
console.log(value);
//step 9
if (value < 60) {
    value = 14;
} else if (value == 2930) {
    value = 27;
} else {
    value = 2;
};
console.log(value);
//step 10
for (var i = 10; i > 0; i--) {
value++;
};
console.log(value);
//step 11
function cutString (val) {
val = val.toString();
if (val.length > 1) {
    val = val.slice(1);
}
value = val;
return val;
};


//step 12
value = cutString(value);
//step 13
console.log(value);



 
    
