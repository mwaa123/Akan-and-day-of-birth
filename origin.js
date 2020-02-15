function akanAge (){
var CC=parseInt (year.slice (0,2))
var year =Document.getelementById ("Year").value;
var YY=parseInt(year.slice(2,4))
var MM=parseInt.Document.getelementById("Month").value;
var DD=parseInt.Document.getelementById("Day").value;

var male=["Kwasi,Kwadwo,Kwabena,kwaku,Yaw,Kofi,Kwame"];
var female=[" Akosua,Adwoa,Abenaa,Akua,Yaa,Afua,Ama"];
var gender= document.getelementById("gender").value;
console.log(gender);


var calculateDay=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7
var calculateDay= Math.floor(calculateDay)




















}