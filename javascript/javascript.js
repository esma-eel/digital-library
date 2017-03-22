
function formValidate(){
	var formToconfirmEmail = document.forms["regform"]["email"].value;
	var formToconfirmEmail2 = document.forms["regform"]["emailconfirm"].value;
	var formToconfirmPass = document.forms["regform"]["password"].value;
	var formToconfirmPass2 = document.forms["regform"]["passwordconfirm"].value;
	if (formToconfirmEmail != formToconfirmEmail2){
		document.getElementById("emailwarn").className += " w3-show";
		return false;
	}
	
	if (formToconfirmPass != formToconfirmPass2){
		document.getElementById("passwarn").className += " w3-show";
		return false;
	}
	
	if (formToconfirmPass.length < 8){
		document.getElementById("passwarn2").innerHTML = "مقدار فیلد باید 8 کاراکتر با بیشتر باشد."
		return false;
	}
}