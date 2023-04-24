
console.log("Empezando la clase JS");
alert("soy una alerta"); 

//EMACSCRIPT 6
//var = ¡ Ya no se usa!
//Let = la nueva forma de declarar variables
//En JS no se declaran tipos de datos,el los interpreta
//SCOPE:Es el alcance que una variable tendra en tu codigo.
//En otras palabras,el scope decide a que variables tienes acceso
//en cada parte del codigo.Ejemplo:el escope de cada funcion 

//scope 1
//var test = "hola"
//var primero = 23;
//let segunda = 47;
//let tres = "hola";
//const estable = " no cambio";

//let resultado = 2+segunda;

//console.log(resultado);
//console.log(tres);

function salir(){
   //scope 2
   //let on = true;
   //console.log(on + test);
   
}

//salir();
//console.log(test);
//console.log(on);

// ---* seccion 2 ---
console.log("**-- // ciclos repetitivos (for,while,do-while) --**") 
// --diferencia entre let y const --
let factura2 = 55231; //guardando un espacio es memoria, que
//puede cambiar en el fururo; se puede modificar
const factura = 55231; //no se puede modificar

//factura = 32;
factura2 = 6;
console.log("let: " , factura2);
console.log("const: " , factura);

if(factura2){
   console.log("si hay una factura");
}else{ 
  if(factura2 == 23){
   console.log("no hay factura");
}else{
   console.log("pailas");
  }
}

//(condicion) ? valor verdadero: valor falso
let res = factura2 ? "si hay una factura " : "no hay factura";

console.log(res);

 // ciclos repetitivos (for,while,do-while)

for(let i=0;i<= 10;i++){
   console.log(i);
}
 let i=0;
while(i<= 10){
    console.log(i);
    i++;
}

 i=0;
while(i<= 10){
   console.log(i);
   i++;
}

 i=0;
do{
   console.log(i);
   i++
}while(i<=10);

//-- Manejo de Strings --
let buscar = "Hola Clase ! ";

//Encontrar un caracter,si no lo encuentra pone -1,
//si lo encuentra pone el numero de ubicacion
console.log(buscar.indexOf("Cl"));
//Sting inicia o termina
console.log(buscar.startsWith("C"));
console.log(buscar.endsWith("!"));

//Si el String incluye cierto caracter o palabra
console.log(buscar.includes("s"));

console.log("**-- Operadores --**")
//Operador AND (&&) Devuelve a si a y b son verdaderos,sino b
console.log(45 && false) //false
console.log(50 && "10") //"10"

//Operador OR (||) ddevuelve a ( si es verdadero),o si no,b
console.log(false || "verdadero") //"verdadero"
console.log("10" || 10) //"10"

let isCorrect = true;
const doTask = () => "OK!";
console.log(isCorrect && doTask())

console.log("Arreglos y Objetos")
let instructores = ["Juan", "Jesu", "Carla"];
console.log(instructores[2]);

const tecnico = {
    name: "Programacion de software",
    time: "1 anio",
    practica: true

}
console.log(tecnico.name + "   "+ tecnico.time )

console.log("-- Interpolacion de variables --");

const data = `Soy un texto combimado con variables ${tecnico.practica} como esta y esta ${instructores}`;

console.log(data);

// FUNCION = Es un fragmento de codigo,que resuelve un proble unico y muy puntual,y se
//puede reutilizar cuantas veces sea necesario 
console.log("***--- Funciones ---***");
function sumar(x, y){
   let suma = x + y;
   console.log("suma: "+ suma);
  
}

//Funcion de flechas
const saludar = (instruc) => {
   let i=0
   while(i<=instruc.length){
    console.log(`Hola profesor ${instruc[i]}`);
    i++;
  }
}

sumar(5,20);
saludar(instructores);

console.log("***--- Spread y Rest ----***");
//Rest: Junt los elementos en un arreglo
function saludarRest(saludo, ...nombres){
   for(i in nombres){
      console.log(`${saludo} ${nombres[i]}`);
   }
}
saludarRest("Hola","fernando","javier","maritza","teo");
//Spread: Esparce los elementos como si fueran enviados en forma separada
function saludarSpread(saludo, ...nombres){
   console.log(`${saludo} ${nombres}.`);
}
let personas = ["Maria","Juan","Pedro","Julian"];
saludarSpread("Hola", personas);

//otos ejemplo de Spread
let partes = ["piernas","brazos"];
let cuerpo = ["cabeza","cuello", ...partes, "pies","cabello"];
console.log(cuerpo);

//clases: Es una plantilla,define las propiedades y metodos de un objeto.
//Se puede reutilizar por medio de instancia. Cada clase una tiene tiene sus propiedades y
//metodos. Todas las clases tienen un constructor donde se definen datos iniciales.
console.log("*** --- Clases ---***")
class Persona{
   constructor(nombre, edad, sexo){
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
   }
   getName(){
      console.log("Tu te llamas " + this.nombre)
    }
   
    getALLInfo(){
      console.log(`Tu nombre es ${this.nombre} tienes ${this.edad} años y eres un(a) ${this.sexo}`)
   }
}

//juanes es una instancia de la clase persona,Osea que juanes ahora es un abjeto.
let juanes = new Persona("juanes",47,"masculino");
juanes.getName();
juanes.getALLInfo();

class Aprendiz extends Persona{
   constructor(nombre, edad, sexo, programa, competencia){
      super(nombre, edad, sexo)
      this.programa = programa;
      this.competencia = competencia;
   }
   getAprendiz(){
      console.log(`Te llamas ${this.nombre} tienes ${this.edad} años eres un(a) ${this.sexo}, tu programa es ${this.programa} y estas donde ${this.competencia}`)
   }
}
let julian = new Aprendiz("Julian",19,"Masculino","Motores","Mantenimiento de vehiculos pesado");
julian.getAprendiz();
julian.getAprendiz();
