"use strict";
// definissez une interface pour le vehicule 
// definissez une classe qui implemente l'interface
class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    start() {
        console.log('Vroum vroum');
    }
}
// instanciez la classe et appelez la methode start
const maVoiture = new Voiture('Peugeot', '208', 2018);
//appel de la methode start
maVoiture.start();
