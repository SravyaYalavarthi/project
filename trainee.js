function userIdValidation()
{
var x=document.getElementById("userid").value;
if(x==null||x==""){
document.getElementById("erroruserId").style.color="red";
document.getElementById("erroruserId").innerHTML="plz enter userid";
return false;
}
else{
document.getElementById("erroruserId").innerHTML="";
return true;
}
}
function nameValidation()
{
	var userValue=document.getElementById("name").value;
	var perPattern="^[A-Za-z]+$";
if(userValue==null||userValue==""){
document.getElementById("errorName").style.color="red";
document.getElementById("errorName").innerHTML="plz enter name";
return false;
}
	else if(!userValue.match(perPattern)){
document.getElementById("errorName").innerHTML="plz enter correct name";
return false;
}
	else{
		document.getElementById("errorName").innerHTML="";
return true;
}
}
function scoreValidation()
{
	var userValue=document.getElementById("score").value;
	var perPattern="^[0-9]{2}$";
if(userValue==null||userValue==""){
document.getElementById("errorScore").style.color="red";
document.getElementById("errorScore").innerHTML="plz enter assesment score";
return false;
}
	else if(!userValue.match(perPattern)){
		document.getElementById("errorScore").innerHTML="plz enter correct assesment score";
return false;
}
	else{
		document.getElementById("errorScore").innerHTML="";
return true;
}
}

function techscoreValidation()
{
	var userValue=document.getElementById("techscore").value;
	var perPattern="^[0-9]{2}$";
if(userValue==null||userValue==""){
document.getElementById("errortechscore").style.color="red";
document.getElementById("errortechscore").innerHTML="plz enter technical score";
return false;
}
	else if(!userValue.match(perPattern)){
		document.getElementById("errortechscore").innerHTML="plz enter correct technical score";
return false;
}
	else{
		document.getElementById("errortechscore").innerHTML="";
return true;
}
}
function bevValidation()
{
	var userValue=document.getElementById("bevscore").value;
	var perPattern="^[0-9]{2}$";
if(userValue==null||userValue==""){
document.getElementById("errorbevscore").style.color="red";
document.getElementById("errorbevscore").innerHTML="plz enter behavioral score";
return false;
}
	else if(!userValue.match(perPattern)){
		document.getElementById("errorbevscore").innerHTML="plz enter correct behavioral score";
return false;
}
	else{
		document.getElementById("errorbevscore").innerHTML="";
return true;
}
}
function formValidation()
{
a=userIdValidation();
b=nameValidation();
c=scoreValidation();
d=techscoreValidation();
e=bevValidation();
if(a&&b&&c&&d&&e)
return true;
else
return false;
}





