//your JS code here. If required.
let formElm = document.getElementById("form");
formElm.addEventListener("submit" , (event)=>{
	event.preventDefault();
	alert(  "First Name:" + formElm.firstName.value);
	 alert(  "Last Name:" + formElm.lastname.value);
	 alert(  "Phone Number:" + formElm.phno.value);
	alert(  "Email ID:" + formElm.email.value);
})