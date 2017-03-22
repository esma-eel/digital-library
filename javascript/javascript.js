
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

function validateLogin () {
	var usr = document.forms["loginf"]["loginusername"].value;
	var psw = document.forms["loginf"]["loginpassword"].value;
	
	if (usr == "" || usr == null) {
		alert("فیلد نام کاربری خالی است.")
		return false;
	}
	
	if (psw == "" || psw == null) {
		alert("فیلد رمز عبور خالی است.")
		return false;
	}
	
	if (psw.length < 8) {
		alert("در وارد کردن رمز عبور دقت کنید باید 8 کاراکتر باشد.")
		return false;
	}
}