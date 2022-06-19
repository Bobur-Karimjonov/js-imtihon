// ------------------------1-masala--------------
var countTrue = [false,true,false,true,true]

function result(arr) {
  var count = 0 

  for (el of arr){
    if(el == true){
      count++
    }
  }
  return count
}
console.log(result(countTrue));

// ------------------------2-masala-----------------------------
var numbers = [1, 2, 3,-1, -2, 3, 4]

function func (uu){
 var count = 0;
  
  for (num of numbers){
    if(0 < num){
      count += num
    }
  }
  return count
}
console.log(func(numbers))

