const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	console.log(`mathSymbol`, mathSymbol)
	console.log(`number1`, num1)
	console.log(`number2`, num2)

	// if(mathSymbol === "+"){
	// 	console.log(num1 + num2);
	// }else if (mathSymbol === "-"){
	// 	console.log(num1 - num2);
	// }

	// if (mathSymbol === "*"){
	// 	console.log(num1 * num2);
	// }

	// if (mathSymbol === "/"){
	// 	console.log(num1 / num2);
	// }

	// if (mathSymbol === "%"){
	// 	console.log(num1 % num2);
	// }

switch (mathSymbol) {
	case "+":
		console.log(num1 + num2);
		break;
	case "-":
		console.log(num1 - num2);
		break;
	case "*":
		console.log(num1 * num2);
		break;
	case "/":
		console.log(num1 / num2);
		break;
	case "%":
		console.log(num1 % num2);
		break;
	default:
		console.log("Enter a valid equation.");
}


	// This line closes the connection to the command line interface.
	reader.close()

});
