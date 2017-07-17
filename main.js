console.log("Hi");
let input = document.getElementById("input");
let button = document.getElementById("button");
let container = document.getElementById("container");
var testString = "";


button.addEventListener("click", coolStuff )

function (coolStuff) {
	let newInput = input.value.split("");
	let reverseInput = reversal(newInput);
	container.innerHTML += alphabits(newInput);
	container.innerHTML += palindrome(newInput, reverseInput);
};

function reversal(string) {
	var reverse = string.reverse().join("");
	container.innerHTML += `<p>${reverse}</p>`;
	return reverse
}

function alphabits(string) {
	return string.sort().join("");;
};

function palindrome(string, reverseString) {
	if (reverseString === input.value) {
		return `<p>This is a palindrome</p>`
	} else {
		return `<p>This is not a palindrome</p>`
	}
}



reversal(testString);
alphabits(testString);
palindrome(testString);