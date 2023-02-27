var n = 1347;
var sum1;
var sum2;
var result;

n4 = n%10;
n3 = (n-n4)/10%10;
n2 = (n-(n3*10+7))/100%10;
n1 = Math.floor(n/1000);
sum1 = n1+n3;
sum2 = n2+n4;
result = sum1 * sum2;

console.log(result);