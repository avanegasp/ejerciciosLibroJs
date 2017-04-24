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



$$

			var casa= {
				dormitorio: "si",
				llaves: "si",
				carro: "si",

				delete casa.llaves
			}


			console.log(casa)



		var num = 5;
		if (num < 20 && num > 10 ){
			console.log("el numero esta entre 10 y 20")
		} else {
			console.log ("el numero no esta entre 10 y 20")
		}



	var color = "rojo";

	if(color === "verde" || color === "negro"){
		console.log("excelente elección el color esta entre verde y rojo")
	} else {
		console.log("tu color no es verde o negro")
	}



		console.log("hola mundo")
		console.log("hola mundo")
		console.log("hola mundo")
		console.log("hola mundo")
		console.log("hola mundo")




		var i = 0;
		while (i < 850){
			var i =+ 1
			console.log( i + (i + 1) + " hola mundo")
		}



	 var num = 10;

	 for (var i=10; i <= 20; i = i + 2){
		 console.log(i);
	 }

	 var i = 5;

	 while ( i <= 20) {
	 	console.log(i)
		i =+ 5
	 }

	 var i = 5;       // el inicializador
	 while (i <= 20) { // la condición
  	console.log(i);
  	i	+= 5;      // el incrementador
}



	 var i = 100;

	 while( i > 0){
		 console.log(i)
		 i -= 1;
	 }




	 var i = 0;

	 while(i <= 100){
		 console.log(i)
		 i +=5
	 }


	 var i = 0;

	 for (var i =0; i <= 100; i += 5){
		 console.log(i)
	 }


	 var array = ["hola", "nico", true, false, 5, 33]

	 for (var i = 0; i < array.length; i++){
		 console.log(array[i])
	 }


	 var array = ["hola", "nico", true, false, 5, 33]
	 array[5]= "juan"

	 console.log(array)



	 var nuevos = ["oliva"]
	 			nuevos.push("angie", "carmen", true)

				console.log(nuevos)



		var nombres =["lore", "oliva", "ligia", "rafa"]

			nombres.splice(0, 1)

			console.log(nombres)



		var arr = ["hola", "mundo", 3, "veces"]


		var i = 0;

		while( i <= arr.length){
			console.log(arr)
			i++
		}




		let base = 5;
		let altura = 7;

		function triangulo (base, altura){
			return base * altura
		}
		let triangulo = (base, altura) => base * altura / 2

		console.log(`el area de un triángulo de base ${base} y altura ${altura} es: ${triangulo(base, altura)}`)


		let ladoA = 7;
		let ladoB = 9;

		let rectanguleArea = (ladoA, ladoB) => ladoA * ladoB

		console.log(`el areá de un rectangulo es lado ${ladoA} por lado ${ladoB} cuyo resultado es: ${rectanguleArea(ladoA, ladoB)}`)


		let pi = 3.1416;
		let radio = 4;

		let circleArea = (pi, radio) => pi * (radio * radio)

		console.log(`el área de un circulo es PI ${pi} por RADIO ${radio}al cuadrado, el resultado es ${circleArea(pi, radio)}`)


		function circleArea (pi, radio){
			return pi * (radio * radio)
		}

		console.log("el area de un circulo es: " + circleArea(3.14, 4))

		*/


//     primera animacion
//
//     var pause=0,position=0;
//     function calculator(){
//       var msg="              CALCULADORAS DE COLOMBIA                 ";
//       k=(100/msg.length)+1;
//       for(i=0; i<=k; i++) msg+=" "+msg;
//       document.form2.calculator.value=msg.substring(position,position+100);
//       if(position++==100) position=0;
//       id=setTimeout("calculator()",100);
// };



      // // SEGUNDA ANIMACION
      //
      // var nave = new Image();
      // var fondo = new Image();
      // nave.src="img/marciano2.png";
      // fondo.src="img/puntos.jpg";
      // var posx=1;
      // var posy=200;
      // var dir = 5; // pixeles para desplazarse
      //
      // function dibuja(){
      //   setInterval(animacion, 50);
      // }
      //
      // function animacion(){
      //   var anima = document.getElementById("milienzo");
      //   var contexto = anima.getContext('2d');
      //   contexto.drawImage(fondo, 0, 0, 400, 300); // weidth=400; heigt=300;
      //   contexto.font="bold 18px Arial";
      //   contexto.fillStyle="#FFFFFF";
      //   contexto.fillText("CALCULADORAS DE COLOMBIA", 50, 40); //posx = 50; posy = 40;
      //   if(posx>=330 || posx<=0){
      //     dir=dir*-1;
      //   }
      //   posx=posx+dir;
      //   contexto.drawImage(nave,posx,posy,80,100);
      // }



      // TERCER ANIMACION

      function dibujar(){
        var animacion = document.getElementById("milienzo");
        var contexto = animacion.getContext('2d');
        var imagen = new Image();
        imagen.onload=function(){
          contexto.drawImage(imagen,0,0);

        }
        imagen.src="img/uc.gif";

      }
