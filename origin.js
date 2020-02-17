
function akanAge (){


    

    
   var YY=parseInt(document.getElementById ("year").value);
    var MM=parseInt(document.getElementById("month").value);
    var DD=parseInt(document.getElementById("date").value);
   var CC=parseInt((YY/100)+1)


var  addDay=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7



addDay = Math.floor(addDay);


// var addDay2= Math.floor(addDay)
// alert(addDay2);
// alert( male[addDay2]);

    // var gender= document.getElementById("gender").value;

    var male = document.getElementById("mle").checked;
    var female = document.getElementById("fmle").checked;

    console.log(male)
    console.log(female)

    male = ["Kwasi", "Kwadwo", "Kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];
    female = [" Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // console.log(male);






if(MM <1||MM >12){
    alert ("please key in the correct month");
}

else  if(DD>31|| DD<1){
alert("please key in the correct day");
}

else  if (document.getElementById("mle").checked){
    
    document.getElementById("answer").value = ("your Akan name is " + male[addDay]);
    
}

else if(document.getElementById("fmle").checked){
    
    document.getElementById("answer").value = ("your Akan name is " + female[addDay]);
    
}
else{
    document.getElementById("answer").innerHTML=("oops! You entered wrong data")
}
};