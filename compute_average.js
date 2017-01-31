function compAve(nums) {
  var total = 0;
  var ave;
  nums.forEach(function(i) {
    total += i;
  });
  return ave = total / nums.length;
}

console.log(compAve([2,4,6,8,9]));
