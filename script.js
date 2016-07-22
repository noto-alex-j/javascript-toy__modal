window.addEventListener("load", function(){

var button = document.getElementById("button");

var close = document.getElementById("close");

button.addEventListener("click", function(){
	var modal = document.getElementById("modal");
	var transparent = document.getElementById("transparent");
	modal.style.display = "inline-block";
	transparent.style.display = "block";
});

close.addEventListener("click", function(){
	var modal = document.getElementById("modal");
	var transparent = document.getElementById("transparent");
	modal.style.display = "none";
	transparent.style.display = "none";
});

// close.addEventListener("click", function(){
// 	modal.style.display = "none";
// 	transparent.style.display = "none";
// });


});