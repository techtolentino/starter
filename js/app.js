function intialize () {
	var bSupportsLocal = (('localStorage' in window) && window['localStorage'] !== null);

	if (!bSupportsLocal) {
		console.log("no local storage")
	} else {
		console.log("You can store things here!")
	}

}

window.onload = intialize();


// function storeLocalContent (fields, isDone) {
// 	window.localStorage.setItem('fieldName', value);
// }


// for each field, click function
// if an item is clicked, setItem property isDone to "yes"
// if field property isDone === yes, return true, else return false
// depending on field property isDone, add or remove class
// solid color block vs empty

