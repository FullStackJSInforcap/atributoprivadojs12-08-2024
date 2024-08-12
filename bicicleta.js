export default class Bicicleta{

    #id;
    #marca;

    constructor(id, marca){
        this.#id = id;
        this.#marca = marca;
    }

    get id(){
        return this.#id;
    }

    set id(id){
        this.#id = id;
    }

    get marca(){
        return this.#marca;
    }

    set marca(marca){
        this.#marca = marca;
    }

}