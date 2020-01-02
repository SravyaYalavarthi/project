function mailValidation()
{
var x=document.getElementById("eid").value;
var pattern="^[A-Za-z0-9]+[@]{1}[a-z]+(.com|.co.in.|.in)$";
if(x==null||x==""){
	document.getElementById("errormail").style.color="red";
document.getElementById("errormail").innerHTML="plz enter email";
return false;
}
else if(!x.match(pattern)){
document.getElementById("errormail").innerHTML="write in correct format";
return false;
}
else{
document.getElementById("errormail").innerHTML="";
return true;
}
}
function userValidation()
{
	var userValue=document.getElementById("txtname").value;
	var namePattern="^[A-Za-z]+$";
	if(userValue==null||userValue==""){
		document.getElementById("errorname").style.color="red";
document.getElementById("errorname").innerHTML="plz enter name";
return false;
}
	else if(!userValue.match(namePattern)){
		document.getElementById("errorname").innerHTML="name should be alphabets";
return false;
}
	else{
		document.getElementById("errorname").innerHTML="";
return true;
}
}

function pwdValidation()
{
	var Value=document.getElementById("pid").value;
	var pwdPattern="^[A-Za-z0-9@!#$&*]{8,}$";
	if(Value==null||Value==""){
		document.getElementById("errorpwd").style.color="red";
document.getElementById("errorpwd").innerHTML="plz enter password";
return false;
}
	else if(!Value.match(pwdPattern)){
		document.getElementById("errorpwd").innerHTML="password should contain atleast 8 characters"
return false;
}
	else{
document.getElementById("errorpwd").innerHTML="";
return true;
}
}
function confirmpwdValidation()
{
	var password=document.getElementById("pid").value;
	var confirmpwd=document.getElementById("pid1").value;
	if(confirmpwd==null||confirmpwd==""){
		document.getElementById("errorpwd1").style.color="red";
document.getElementById("errorpwd1").innerHTML="plz enter password";
return false;
}
	else if(!password.match(confirmpwd)){
	document.getElementById("errorpwd1").innerHTML="plz match the password";
return false;
}
else{
	document.getElementById("errorpwd1").innerHTML="";
return true;
}
}
function formValidation()
{
a=mailValidation();
b=userValidation();
c=pwdValidation();
d=confirmpwdValidation();
if(a&&b&&c&&d)
return true;
else
return false;
}
