window.onload=initfunction;

function initfunction()
{
	var current_datetime = new Date()
	var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()

	document.getElementById("mydate").innerHTML = formatted_date;
}

function calculations(){

	var name;
	var address;
	var transport_value;
	var message = "";

	var vegValue1 = document.getElementById("vegHamper").value;
	var fruitValue1 = document.getElementById("fruitHamper").value;
	var chickenValue1 = document.getElementById("freshChicken").value;
	var porkValue1 = document.getElementById("pork").value ;
	var totalAmount =parseFloat(0);
	name = document.getElementById("name").value;
	address = document.getElementById("address").value; 
	var endingMessage;
	
	transport_value=document.querySelector('input[name=specialty]:checked').value; 
	transport_value=parseFloat(transport_value);

	if(transport_value == 1){

		transport_value = "Pick up";

	}
	else{

		transport_value = "Delivery";
	}

	
	vegValue1 = parseFloat(vegValue1);
	var vegValue = vegValue1 * 30;
	fruitValue1 = parseFloat(fruitValue1);
	var fruitValue = fruitValue1 * 20;
	chickenValue1 = parseFloat(chickenValue1); 
	var chickenValue = chickenValue1 * 7;
	porkValue1 = parseFloat(porkValue1); 
	var porkValue = porkValue1 * 5;


	if(vegValue1 > 0){
		message += vegValue1 + " Vegetable Hampers <br>";
	}
	if(fruitValue1 > 0){
		message += fruitValue1 + " Fruit Hampers <br> ";
	}
	if(chickenValue1 > 0){
		message += chickenValue1 + " Fresh Chickens <br>";
	}
	if(porkValue1 > 0){
		message += porkValue1 + " Kg Pork <br>";
	}

	if(vegValue>0){
		totalAmount+=vegValue;

	}
	if(fruitValue>0){
		totalAmount+=fruitValue;

	}
	if(chickenValue>0){
		totalAmount+=chickenValue;

	}
	if(porkValue>0){
		totalAmount+=porkValue;
	}
	
	endingMessage = ("Name: " + name + "<br>Address: " + address + "<br>Transport option: " + transport_value + "<br><br> Your Order contains: <br>" + message + "<br>You total cost is: $" + totalAmount.toFixed(2)); 
	endingMessage += " <br> Thank you for your order ";
	document.getElementById("result").innerHTML = endingMessage;
}