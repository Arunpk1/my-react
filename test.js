const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const plus1=document.getElementById("plus1");
const minus1=document.getElementById("minus1");
const plus2=document.getElementById("plus2");
const minus2=document.getElementById("minus2");
let number1=document.getElementById("number1") ;
let number2=document.getElementById("number2") ;
let number3=document.getElementById("number3") ;
 plus.addEventListener("click" ,()=>
    {
    let i=parseInt(number1.value);
    i++;
    number1.value=i;

 });
 minus.addEventListener("click" ,()=>
    {
    let i=parseInt(number1.value);
    i--;
    number1.value=i;
    if(i<1){
        number1.value=1;
    }

 });
 plus1.addEventListener("click" ,()=>
    {
    let i=parseInt(number1.value);
    i++;
    number2.value=i;

 });
 minus1.addEventListener("click" ,()=>
    {
    let i=parseInt(number1.value);
    i--;
    number2.value=i;
    if(i<1){
        number2.value=1;
    }

 });
 plus.addEventListener("click" ,()=>
    {
    let i=parseInt(number1.value);
    i++;
    number3.value=i;

 });
 minus.addEventListener("click" ,()=>
    {
    let i=parseInt(number1.value);
    i--;
    number3.value=i;
    if(i<1){
        number3.value=1;
    }

 });
 
