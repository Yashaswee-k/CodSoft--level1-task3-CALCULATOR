let s=document.getElementById("s");

function v(x){
s.value+=x;
}

function c(){
s.value="";
}

function d(){
s.value=s.value.slice(0,-1);
}

function a(){
try{
s.value=eval(s.value);
}
catch{
s.value="Error";
}
}