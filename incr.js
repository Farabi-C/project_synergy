// Time to make my first js file

function increment(){
	let items = document.querySelector('.num');
	let num = items.innerHTML;
	++num;
	items.innerHTML = num;
}

function reveal(){
	let hidden = document.querySelector(".snip1461");
	let windowHeight = window.innerHeight;
	let elementTop = hidden.getBoundingClientRect().top;
	let elemVisible = 150;
	if(elementTop < windowHeight - elemVisible){
		hidden.classList.add("hover");
	} else{
		hidden.classList.remove("hover");
	}
}

window.addEventListener("scroll", reveal);