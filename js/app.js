/*
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



x = 3;

while( x<= 10){
	console.log(x);
	x++
}

var numero=0
for(i=0; i<=10; i++){
 console.log(numero)
 numero++
}



var opinion = "es un libro que quiero leer"
var libro= {
	titulo: "IT",
	autor:"Steven King",
	genero:"terror",
	valoracion: 9,
	tags:["Pennywise", "floating","clown", "Derry"],
	opinion:opinion,
};


console.info(libro.opinion)


var nombre= {
	nombre:"angie",
	apellido:"vanegas",
	nombreCompleto:function(){
		return (this.nombre + " " + this.apellido)
	}
};



console.log(nombre.nombreCompleto())





function player (name, attackPoints){
	this.name=name,
	this.attackPoints=attackPoints,
	this.lifePoints = 100

	Player.prototype.attack = function (opponent){
		opponent.lifePoints -= this.attackPoints,
		console.log(this.name + 'just hit ' + opponent.name),
		opponent.getLifePoints();
	}
	Player.prototype.getLifePoints = function (){
	console.log(this.name + ' has ' + this.lifePoints)
	}

}

var player1 = new Player('Goku', 32 )
var player2 = new Player('freezer', 22 )


printInfo()

player1.attack(player2)
player2.attack(player1)
player1.attack(player2)

printInfo()

function printInfo(){
	console.log('-----------------------------------')
	console.log(Object.getPrototypeOf(player1))
	console.log(player1)
	console.log(player2)
	console.log()
}




function closure(nombre){
	return function(msj){
		return(nombre + msj)
	};
}

var closure2 = closure("oliva");
	
	console.log (closure2(" es mi perrita"))


*/



var casa= {
	dormitorio: "si",
	llaves: "si",
	carro: "si",

	delete casa.llaves
}


console.log(casa)

 














