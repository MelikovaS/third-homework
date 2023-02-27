var n = 4319;
var result;
n4 = n%10;
n3 = (n-n4)/10%10;
n2 = (n-(n3*10+7))/100%10;
n1 = Math.floor(n/1000);

result = Math.max(n1,n2,n3,n4);
console.log(result);