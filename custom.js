var data1 = ['a', 'b', 'c'];
data1.push(1, 2, 3);
console.log(data1);

///////////////////////

numbers1 = [1, 2, 3];
var reversed = numbers1.reverse();
console.log(reversed);

///////////////////////////

var data2 = [1, 2, 3];
data2.unshift(4, 5, 6);
console.log(data2);

////////////////////////


var users = [1, 2, 3, 4, 5];
var usersNow = users.slice(0, 3);
console.log(usersNow);   

/////////////////////

var data3 = ['js', 'css', 'jq'];
var data4 = data3[0];
console.log(data4);

///////////////////////

const data = new Map([
  ['a', 1],
  ['b', 2]
]);

const fromPairs = Object.fromEntries(data);

console.log(fromPairs);