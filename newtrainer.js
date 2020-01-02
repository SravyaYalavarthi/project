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
function numValidation()
{
var x=document.getElementById("num").value;
var pattern="^[6-9]{1}[0-9]{9}$";
if(x==0||x==""){
	document.getElementById("errorNum").style.color="red";
document.getElementById("errorNum").innerHTML="plz enter phno";
return false;
}
else if(!x.match(pattern)){
document.getElementById("errorNum").innerHTML="plz enter valid phno";
return false;
}
else{
document.getElementById("errorNum").innerHTML="";
return true;
}
}
function dropDownValidation()
	{
	var elem=document.getElementsByClassName("spec");
	var count=0;
	for(var i=0;i<elem.length;i++)
	{
		if(elem[i].selected)
			count++;
	}
	if(count==0)
	{
document.getElementById("errorDropDown").style.color="red";
document.getElementById("errorDropDown").innerHTML="select a Qualification";
		return false;
	}
	else{
		document.getElementById("errorDropDown").innerHTML="";
		return true;
	}	
}
function formValidation()
{
a=mailValidation();
b=userValidation();
c=pwdValidation();
d=confirmpwdValidation();
e=numValidation();
f=dropDownValidation();
if(a&&b&&c&&d&&e&&f)
return true;
else
return false;
}

