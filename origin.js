var female=[" Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function akanAge (){


    var gender= document.getElementById("gender").value;
    var male=["Kwasi","Kwadwo","Kwabena","kwaku","Yaw","Kofi","Kwame"];

    
var YY=parseInt(document.getElementById ("year").value);
var MM=parseInt(document.getElementById("month").value);
var DD=parseInt(document.getElementById("date").value);
var CC=parseInt((YY/100)+1)

var  addDay=(((CC/4) - 2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7
console.log(addDay);

var addDay2= Math.ceil(addDay)
console.log('this is the', male[6]);


if(MM <1||MM >12){
    alert ("please key in the correct month");
}

else  if(DD>31|| DD<1){
alert("please key in the correct day");
}

else  if (gender==="male"){
    document.getElementById("answer").innerHTML=("YOUR AKAN NAME IS", male[addDay])
}

else if(gender==="female"){
    document.getElementById("answer").innerHTML=("YOUR AKAN NAME IS"+female[addDay])
}
else{
    document.getElementById("answer").innerHTML=("oops! You entered wrong data")
}
}