//your JS code here. If required.
let formElm = document.getElementById("form");
formElm.addEventListener("submit" , (event)=>{
	event.preventDefault();
	alert(  "First Name:" + formElm.First Name.value);
	 alert(  "Last Name:" + formElm.Last Name.value);
	 alert(  "Phone Number:" + formElm.Phone Number.value);
	alert(  "Email ID:" + formElm.Email ID.value);
})