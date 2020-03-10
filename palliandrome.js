var x=3433;
var y=x;
var rev=0;
var rem=0;
while(x>0)
{
    rem=x%10
    rev=rev*10+rem
    x=parseInt(x/10)
}
if(rev==y){
    console.log(rev)
    console.log("it is a palliandrome")
}
else{
    console.log(rev)
    console.log("it is not a palliandrome")
}

