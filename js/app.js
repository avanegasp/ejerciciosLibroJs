var cuadrado = function(n){
	return console.log(n * n);
}

cuadrado(10)



var cubo = function(n){
	
	var pregunta =  (prompt("el cubo de" + n + "es" + resultado));
	var resultado = n * n * n
	
	console.log(pregunta)
}


function power (base, exp){
	if(exp === undefined)
		exp = 3;

	var resultado = Math.pow(base, exp);
		return console.log(resultado)
	
}

power(4)


var edad = Number(prompt("cual es tu edad?"));

if (edad >= 18)
	console.log("eres mayor de edad")
else
	console.log("eres menor de edad")



var num = 0;

while(num <= 100){
	console.log(num)
	num = num + 3
}


var pago = 0;
var totalPago = 0;

do{
	pago = Number(prompt("de cuanto es tu pago?: "));
	totalPago = totalPago + pago;	
} while(pago);

console.log(prompt("solo me haz pagado esto " + totalPago));


