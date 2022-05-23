const numberButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.getElementById("submit-btn");
const rating = document.getElementById("rating-area");
const thankYou = document.getElementById("thank-you-area");
const displayResult = document.getElementById("result");
let selectedNumber = null;

function removeAllActiveClasses(){
	numberButtons.forEach((button)=>button.classList.remove("active"));
}

numberButtons.forEach((button)=>{
	button.addEventListener("click", function(){
		removeAllActiveClasses();
		selectedNumber = button.value;
		button.classList.add("active");
	});
})

submitButton.addEventListener("click", function(){
	if(selectedNumber === null){
		alert("Please choose rating from 1 to 5.");
	}else{
		displayResult.textContent = selectedNumber;
		rating.classList.add("hidden");
		thankYou.classList.remove("hidden");
	}
})