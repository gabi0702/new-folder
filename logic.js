
function PhoneSentCall(e){
	var phoneNumber = document.getElementById("phoneNumber").value;
	var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var check = false;
	var count = 0;
	while(check == false){
		for (var i = 0; i < phoneNumber.length; i++) {
			if((phoneNumber.charAt(i) in numbers) && phoneNumber.length == 10){
				count++;
				continue
			}
			else{
				alert("לא הזנת מספר טלפון תקין! אנא הזן שוב");	
				document.getElementById("phoneNumber").value = "";
				return
			}
		}
		check = true;
	}
	// if(check && count == 10){
	// 	document.getElementById("sendMessageButton").value = "";
	// 	document.getElementById("sendMessageButton").innerHTML = "נשלח!";
	// }

}

function emailSentForNews(e){
	var email = document.getElementById("emailInput").value;
	var check = false;
	
	while(check == false){
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){	
			check = true;			
		}
		else if(email == ""){
			return
		}
		else{
			alert("לא הזנת כתובת מייל! אנא הזן שוב");	
			document.getElementById("emailInput").value = "";
			return
		}
	}	
}

function printSent(e){
	document.getElementById("response").innerHTML = "הבקשה נשלחה בהצלחה! ניצור איתכם קשר ב24 שעות הקרובות.";

}



function loadPage() {
	document.getElementById("press").addEventListener("click", PhoneSentCall);
    document.getElementById("press").addEventListener("click", emailSentForNews);
    document.getElementById("press").addEventListener("click", printSent);

}