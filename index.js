function store(){

    var inputEmail= document.getElementById("email");
    var name = document.getElementById("name");
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("name", name.value);
   }


   var doc = document;

window.onload = function() {
	var toDoList = [];
	
		if (localStorage.getItem('toDoList')!==null) {
			toDoList = JSON.parse(localStorage['toDoList']);
			var result = 'You need to do the following today:<br>';
			for (var i = 0; i < toDoList.length; i++) {
				result += '- ' + toDoList[i] + "<br>";
			}		
			doc.getElementById('list').innerHTML = result;
		}
		
		if (localStorage.getItem('birthdayArray')!==null) {
			var birthdayArray = JSON.parse(localStorage['birthdayArray']);		
			var message = "Your father's birthday is " + birthdayArray.month +
			" " + birthdayArray.day + ", " + birthdayArray.year + ".";
			
			doc.getElementById('birthdayDisplay').innerHTML = message;
		}
		
		if (localStorage.getItem('userOptions')!==null) {
			var userOptions = JSON.parse(localStorage['userOptions']);
			applyOptions(userOptions);
		}
	
	doc.getElementById('addToList').onclick = function () {
		var toDo = doc.getElementById('whatToDo').value;
		toDoList.push(toDo);
		
		var result = '';
		for (var i = 0; i < toDoList.length; i++) {
			result += toDoList[i] + "<br>";
		}		
		doc.getElementById('list').innerHTML = result;
		doc.getElementById('whatToDo').value = '';
		
		localStorage['toDoList'] = JSON.stringify(toDoList);
	}
			
	doc.getElementById('deleteList').onclick = function () {
		toDoList = [];
		doc.getElementById('list').innerHTML = '';
		localStorage.removeItem('toDoList');
	}
	
	doc.getElementById('saveBirthday').onclick = function () {
		var month = doc.getElementById("month");
		var selectedMonth = month.options[month.selectedIndex].value;
		var selectedDay = doc.getElementById("day").value;
		var selectedYear = doc.getElementById("year").value;
		
		var birthdayArray = {'month': selectedMonth, 'day': selectedDay, 'year': selectedYear};
		localStorage['birthdayArray'] = JSON.stringify(birthdayArray);
		alert("The birthday has been saved.");

	}
	
	doc.getElementById('clearBirthday').onclick = function () {
		localStorage.removeItem('birthdayArray');
		doc.getElementById('birthdayDisplay').innerHTML = '';
	}
        
    


	doc.getElementById('saveOptions').onclick = function () {
		var imageId = doc.getElementById("image");
		var selectedImage = imageId.options[imageId.selectedIndex].value;
		var quote = doc.getElementById("quote");
		var selectedQuote = quote.options[quote.selectedIndex].value;
		var textSize = doc.getElementById("textSize");
		var selectedTextSize = textSize.options[textSize.selectedIndex].value;
		
		if (selectedImage == '' || selectedQuote == '' || selectedTextSize == '') {
			alert("Please select all fields.");
			return;
		}
		
		var userOptions = new Object();
		userOptions.imageChoice = selectedImage;
		userOptions.quote = selectedQuote;
		userOptions.size = selectedTextSize;
		
		localStorage['userOptions'] = JSON.stringify(userOptions);
		alert("Your settings have been saved.");
	}
	
	doc.getElementById('clearOptions').onclick = function () {
		doc.getElementById('result').innerHTML = '';
		doc.getElementById("result").style.backgroundImage = "";
		localStorage.removeItem('userOptions');
	}
	
	function applyOptions(userOptions) {
		switch (userOptions.imageChoice) {
			case "waterfall":
				doc.getElementById("result").style.backgroundImage = "url('images/waterfall.jpg')";
				break;
			case "mountain":
				doc.getElementById("result").style.backgroundImage = "url('images/mountain.jpg')";
				break;
			case "meadow":
				doc.getElementById("result").style.backgroundImage = "url('images/meadow.jpg')";
				break;
		}
		
		switch (userOptions.quote) {
			case "family":
				doc.getElementById("chosenQuote").innerHTML = '"The most important work we do in this life is in our homes with our families." - Jeffrey R. Holland';
				break;
			case "success":
				doc.getElementById("chosenQuote").innerHTML = '"Success usually comes to those who are too busy to be looking for it." - Henry David Thoreau';
				break;
			case "love":
				doc.getElementById("chosenQuote").innerHTML = '"Love is the greatest power and will have the most powerful influence." - Elaine S. Dalton';
				break;
		}
		
		switch (userOptions.size) {
			case "small":
				doc.getElementById("chosenQuote").style.fontSize = "small";
				break;
			case "medium":
				doc.getElementById("chosenQuote").style.fontSize = "large";
				break;
			case "large":
				doc.getElementById("chosenQuote").style.fontSize = "xx-large";
				break;
		}
	}
	
}
