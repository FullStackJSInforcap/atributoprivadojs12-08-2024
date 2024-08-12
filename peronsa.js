export default class Persona{

    #nombre;
    #apellido;
    #bicicleta;

    constructor(nombre, apellido, bicicleta){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#bicicleta = bicicleta;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get apellido(){
        return this.#apellido;
    }

    set apellido(apellido){
        this.#apellido = apellido;
    }

    get bicicleta(){
        return this.#bicicleta;
    }

    set bicicleta(bicicleta){
        this.#bicicleta = bicicleta;
    }

}