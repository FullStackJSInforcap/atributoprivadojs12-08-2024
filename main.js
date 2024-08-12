import Bicicleta from "./bicicleta.js";
import Cliente from "./cliente.js";
import Persona from "./peronsa.js";

let bicicleta = new Bicicleta('1', 'Bianchi');
let persona = new Persona('Marcos', 'Ojeda', bicicleta);
console.log(persona.bicicleta.marca);

let cliente = new Cliente('Nombre', bicicleta, '1');
console.log(cliente.nombre);




