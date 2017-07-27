function readText(words, interval) {
	console.log(interval);
	var timer = setInterval(function(){
		if (words.length) {
			setCurrentWord(words.shift());
		} else {
			clearInterval(timer);
			done();
		}
	},interval);
}

function getWords() {
	var text = document.getElementById("text").value;
	text = text.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
	return text;
}

function getInterval() {
	var select = document.getElementById("interval")
	return select[select.selectedIndex].value;
}

function setCurrentWord(word){
	document.getElementById("word").innerHTML = word;
}

function done() {
	document.getElementById("word").innerHTML = "";
	//document.getElementById("text").value = "";
	showElements();
}

function hideElements() {
	document.getElementById("main-form").style.display = "none";
	document.getElementById("page-title").style.display = "none";
}

function showElements() {
	document.getElementById("main-form").style.display = "block";
	document.getElementById("page-title").style.display = "block";
}

document.getElementById("main-form").addEventListener("submit", function(e){
	e.preventDefault();
	readText( getWords(), getInterval() );
	hideElements();
});