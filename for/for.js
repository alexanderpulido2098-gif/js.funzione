// for (let i = 1; i <= 5; i++)
//     console.log(i)

// for (let i = 10; i > 0; i--)
//     console.log(i)


// let N = Number(prompt(`inserisce un N`))

// let somma = 0;

// for (let i = 1; i <= N; i++) {

//     somma = somma + i;
// }

// console.log(`la somma di tutti numeroi da 1 a ${N}, e ${somma} `)

// for (let i = 1; i <= 10; i++) {

//     console.log(5 * i)

// }

// for (let i = 2; i <= 10; i = i + 2) {

//     console.log(i)

// }

// let applausi = "";

// for (let i = 1; i <= 7; i++) {

//     applausi = applausi + "CLAP";

// }
// console.log(`${applausi}  GRAZIE `)


// for (let i = 1; i <= 10; i++) {

//     if (i % 2 !== 0)
//         console.log(`trovati dolceti impari ${i}`)


// // }
// let riga = ""
// for (let i = 1; i <= 5; i++) {

//     riga = riga + "*"
//     console.log(riga)
// }

// for (let i = 3; i <= 27; i++) {

//     if (i % 3 === 0)

//         console.log(i)


// }
// let soglia = 18

// for (let i = 1; i <= 4; i++) {

//     const voto = Number(prompt(`inserisce  il voto ${i} `))
//     if (voto >= soglia)
//         console.log(` ${voto} suficcente`);

//     else console.log(`${voto} insuficente`)


// } console.log(`hai ragginto ${soglia}`)

// const spesa = [
//     { nome: "Pane", prezzo: 1.50 },
//     { nome: "Latte", prezzo: 1.20 },
//     { nome: "Pasta", prezzo: 0.90 },
//     { nome: "Cioccolato", prezzo: 2.50 },
//     { nome: "Frutta", prezzo: 3.00 }
// ];
// let totale = 0;
// let prodottoPiucaro = spesa[0]

// for (let i = 0; i < spesa.length; i++) {
//     totale += spesa[i].prezzo;

//     if (spesa[i].prezzo > prodottoPiucaro.prezzo) {
//         prodottoPiucaro = spesa[i];
//     }
// } console.log(`Il prezzo totale finale è: ${totale} €`);
// console.log(`il prodotto piu caro è ${prodottoPiucaro.nome}`)



// const temperature = [5, -2, 12, 0, -8, 4];
// let contatore = 0;
// debugger
// for (let i = 0; i < temperature.length; i++) {

//     if (temperature[i] > 0) {
//         contatore++
//     }
// } console.log(`ristultato finale maggiori di 0 ${contatore}`)



// const monete = [5, 3, 2, 1]
// let sommaTotale = 0;

// for (let i = 0; i < monete.length; i++) {

//     sommaTotale += monete[i]
// }
// console.log(`somma totale finale ${sommaTotale}`)



// const portafoglio =[10,20,30,5,3,2,40,6];
// let totaleGrandi = 0;

// for( let i = 0 ; i < portafoglio.length; i++){

//      if(portafoglio[i] >= 10 )
//         totaleGrandi += portafoglio[i]

// } console.log(`il totale dei grandi banconote e ${totaleGrandi}`)



// const spesa = [
//     { nome: "Pane", prezzo: 1.50 },
//     { nome: "Latte", prezzo: 1.20 },
//     { nome: "Pasta", prezzo: 0.90 },
//     { nome: "Cioccolato", prezzo: 2.50 },
//     { nome: "Frutta", prezzo: 3.00 }
// ];

// let totaleSpesa = 0;
// let prodottoPiucaro = spesa[0]

// for (let i = 0; i < spesa.length; i++) {

//     totaleSpesa += spesa[i].prezzo

//     if (spesa[i].prezzo > prodottoPiucaro.prezzo)
//         prodottoPiucaro = spesa[i]

// } console.log(`il  totale della spesa è${totaleSpesa}`)

// const spese = [25.50, 80.00, 15.00, 100.25, 45.00, 5.50, 60.00];

// let totaleSpese = 0;
// let spesaMassima = 0;
// let spesseEconomiche = 0;


// for (let i = 0; i < spese.length; i++) {

//     totaleSpese += spese[i]

//     if (spese[i] > spesaMassima) {
//         spesaMassima = spese[i]
//     }
//     if (spese[i] <= 20.00) {
//         spesseEconomiche++
//     }



// } console.log(`il totale speso è ${totaleSpese}`)
// console.log(`il prezzo massimo è ${spesaMassima}`)
// console.log(`totale spesse economiche ${spesseEconomiche}`)


const inventario = [
    { titolo: "Il Signore degli Anelli", prezzo: 25.00, quantita: 4 },
    { titolo: "Il Piccolo Principe", prezzo: 12.50, quantita: 10 },
    { titolo: "1984", prezzo: 15.00, quantita: 0 },
    { titolo: "Dune", prezzo: 22.00, quantita: 3 },
    { titolo: "Harry Potter", prezzo: 18.00, quantita: 7 }
];
const libriScontati = [];
let valoreTotale = 0;
let LibriEsauriti = 0;


for (let i = 0; i < inventario.length; i++) {

    let totaleQuantita = inventario[i].prezzo * inventario[i].quantita;
    valoreTotale += totaleQuantita

    if (inventario[i].quantita === 0) {
        LibriEsauriti = inventario[i].prezzo
        console.log(` Il libro esaurito è ${inventario[i].titolo}`)
    }

    let Sconto10 = inventario[i].prezzo - ((inventario[i].prezzo / 100) * 10);
    libriScontati.push(`Titolo ${inventario[i].titolo} prezzo scontato: ${Sconto10}`);






} console.log(`il totale della merce è ${valoreTotale}`)
console.log(libriScontati);











