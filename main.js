// Get current month and find(winter, fall, summer)


let user= parseInt(prompt("Enter Month between 0 to 11"));
if((user>11)||(user<0)){
	alert("Invalid Month. Enter the Months between 1 to 12")
}
else{
	let userMonth= new Date();
	let a= userMonth.setMonth(user);

	let result= userMonth.getMonth()+1;

	if ((result>=1 && result <3) || (result==12)){
		document.write("It's a Winter Season");
	}
	else if (result >=3 && result <=5){
		document.write("It's a Spring Season");
	}
	else if(result >=6 && result<=8){
		document.write("It's a Summer Season");
	} 
	else if (result >=9 && result<=11){
		document.write("It's a Autumn Season");
	}

}
