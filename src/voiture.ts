// definissez une interface pour le vehicule 

interface Vehicule {
    marque: string;
    modele: string;
    annee: number;
    start(): void;
}

// definissez une classe qui implemente l'interface

class Voiture implements Vehicule {
    marque: string;
    modele: string;
    annee: number;

    constructor(marque: string, modele: string, annee: number) {
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