console.log("Hello");

function getMeal(id){
	let URL = "https://www.themealdb.com/api/json/v1/1/random.php";
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4){
	    	let theJSON = eval("('" + xhr.responseText + "')");
	    	console.log(theJSON);
	    	return theJSON;
	    }
	}
	xhr.open('GET', URL);
	xhr.send();

}

