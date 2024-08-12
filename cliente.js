import Persona from "./peronsa.js";

export default class Cliente extends Persona{

    #id;

    constructor(nombre, apellido, bicicleta, id){
        super(nombre, apellido, bicicleta);
        this.#id = id;
    }

    get id(){
        return this.#id;
    }

    set id(id){
        this.#id = id;
    }

}