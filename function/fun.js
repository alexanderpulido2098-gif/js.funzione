// function MiaEta() {
//     console.log(26);
// }

// MiaEta();



// La funzione si occupa solo del calcolo
// function miaEta() {
//     return 25;
// }

// function mioNome() {
//     return "Marco";
// }

// // Il codice esterno decide cosa fare con i risultati
// const nome = mioNome();
// const eta = miaEta();

// console.log('Età: ' + eta); // 25
// console.log('Nome: ' + nome); // Marco


// function CalcolaEta() {
//     return 2026 - 1998;

// }
// const etaUtente = CalcolaEta()
// console.log(`eta utente ${etaUtente}`)

// function saluta(nome) {
//     return 'Ciao, ' + nome + '!';
// }

// const messaggio1 = saluta('Mario'); // Ciao, Mario!
// const messaggio2 = saluta('Luigi'); // Ciao, Luigi!
// const messaggio3 = saluta('alex');
// console.log(messaggio3)

// function calcoloArea(base, altezza) {

//     return base * altezza

// }

// const Area = calcoloArea(6, 8)

// console.log(Area)

// function calcolaIva(imponibile, aliquota) {
//     // Riceve tutto tramite parametri: indipendente e riutilizzabile
//     const risultato = imponibile * aliquota / 100;
//     return risultato;


// }
// const iva = calcolaIva(20, 6)

// function convertiEuro(dollari, tasso) {

//     return dollari / tasso;
// }
// const euro = convertiInEuro(100, 1.08);
// console.log(euro);


// function CalcolaMedia(voto1, voto2, voto3) {

//     return voto1 + voto2 + voto3 / 3
// }

// function Verifica(Media) {

//     return Media >= 6;

// }


// const Media = CalcolaMedia(4, 5, 6)
// const promosso = Verifica(Media)

// console.log(Media)
// console.log(`promosso con media ${Media}`)



// function generaNumero() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// function tiraDado() {
//     const faccia = generaNumero();
//     alert('Hai ottenuto: ' + faccia);
// }

// function contaCaratteri() {
//     // logica per contare i caratteri digitati
// }

// function ingrandisci() {
//     // logica per ingrandire l'immagine
// }

// function rimpicciolisci() {
//     // logica per ridurre l'immagine
// }


// creare tre function gia viste
// 1
// function calcoloArea(base, altezza) {
//     return base * altezza
// }

// function misureArea() {
//     const Area = calcoloArea(6, 5);
//     alert(`hai ottenuto ${Area} m2`)

// }               

// // 2

// function generaNumero() {
//     return Math.floor(Math.random() * 6) + 1;
// }
// function tiraDado() {
//     const faccia = generaNumero();
//     alert(`hai ottenuto ${faccia}`);
// }

// // 3

// function prezzoPiuiva(prezzo) {

//     return prezzo = prezzo + (prezzo * 0, 22)
// }

// function prezzoTotale() {

//     const totale = prezzoPiuiva(85);
//     alert(`Hai ottenuto ${totale}`)



// }

// ESERCIZIO  DI COMPARAZIONE CON FUNCTION ARROW (riuasume in meno righe di codice il FUNCTION  tradizionale)

function prezzoPiuiva(prezzo) {

    return prezzo = prezzo * 1.22
}

const prezzoConiva = prezzoPiuiva(85)
console.log(prezzoConiva)

const prezzzoFinale = prezzo => prezzo * 1.22
console.log(prezzzoFinale(85))

// // Esercizio ForEach (ti stampa tutti gli elementi del array  )


// const prodotti = ["latte", "pane", "uova"];

// prodotti.forEach(prodotto => { console.log(`Articolo presente : ${prodotto}`) });


// Esercizio map (ti crea una nuova array modidficando i  primi elemnti )

const Prezzi = [15, 25, 35];
const prezzoScontato = Prezzi.map(prezzo => prezzo - 0.9)
console.log(prezzoScontato)


// Esercizio Find (trova un solo elemento )

const spesa = ["latte", "pane", "uova"];
const trovatoParola = spesa.find(parola => parola !== "e")
console.log(trovatoParola)

// const prodotti = ["latte", "pane", "uova"];
// const trovato = prodotti.find(prodotto => prodotto.includes("e"));

// console.log(trovato);



// esercizio Filter (trova piu di un elemento e ti lo slava in una array )

const numeri = [4, 9, 12, 3]
const TrovaMaggiore5 = numeri.filter(numero => numero >= 5)
console.log(TrovaMaggiore5)

// Esercizi some (Con some basta un elemento valido.)

const Interi = [2, 4, 7, 9, 13]
const iDispari = Interi.some(dispari => dispari % 2 !== 0);
console.log(iDispari)
const quantitaDispare = Interi.filter(quanntita => quanntita % 2 !== 0)
console.log(quantitaDispare)


// Esercizi every (Con every la condizione deve essere vera per tutti gli elementi.)

const importi = [20, 15, 18];
const maggiore10 = importi.every(numeri => numeri >= 10);
console.log(maggiore10)

// Esercizio Final

const prodottiOnline = [
    { nome: "videogames", prezzo: 20.00 },
    { nome: "Controllers", prezzo: 25.00 },
    { nome: "consol", prezzo: 90.00 },
    { nome: "setups", prezzo: 70.00 },
];
// foreach
prodottiOnline.forEach((prodotto) => { console.log(prodotto.nome); });
// map 
const scontoproddoti = prodottiOnline.map(sconto => sconto.prezzo - (sconto.prezzo * 0.2))
console.log(scontoproddoti)
// find 
const cercaProdotto = prodottiOnline.find(parola => parola.nome === "videogames")
console.log(cercaProdotto)
// filter 
const prodottiPiuCostosi = prodottiOnline.filter(prezzo => prezzo.prezzo > 50)
console.log(prodottiPiuCostosi)
// some 
const prodottoEconomico = prodottiOnline.some(prodotto => prodotto.prezzo < 30)
console.log(prodottoEconomico)
// every
const prezziEsistenti = prodottiOnline.every(prodotti => prodotti.prezzo > 0)
console.log(prezziEsistenti)



