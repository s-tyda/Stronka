function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function changeTheme(){
	if (getCookie('theme') === ""){
		setCookie('theme', 'tydzior', 18250);
	}
	if (getCookie('secret_unlocked') === "true"){
		element = document.getElementById("secret");
		if (element) {
			element.id = "not_a_secret_anymore";
		}
	}
	document.documentElement.setAttribute('theme', getCookie('theme'));
}

function setTheme(value){
	setCookie('theme', value, 18250);
	changeTheme();
}

// export function unlockSecret(){
// 	setCookie('secret_unlocked', true, 18250);
// }

function change_color(number){
	if (document.getElementById("but" + number).className === "but"){
 	   document.getElementById("but" + number).className = "but changed";
  } else {
   	 document.getElementById("but" + number).className = "but";
  }
}