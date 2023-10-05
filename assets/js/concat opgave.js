//Opret to variabler, `fornavn` og `efternavn`, og tildel dem dine fornavn og efternavn. Lav en ny variabel, `fuldtNavn`, der indeholder hele dit navn ved hjælp af `concat()` funktionen. Udskriv `fuldtNavn` til konsollen.
let fornavn = "fornavn"
let efternavn = "efternavn"

let fuldtNavn = fornavn.concat(" ", efternavn);

console.log(fuldtNavn);

//Lav en variabel, `brugernavn`, og tildel den værdien af dit valgte brugernavn. Opret en velkomstbesked ved hjælp af `concat()` funktionen, der siger "Velkommen, [brugernavn]!" Udskriv velkomstbeskeden til konsollen.
let brugernavn = "brugernavn"
let velkomstbesked = "Velkommen, ".concat( brugernavn, "!");

console.log(velkomstbesked);

//Opret to variabler, `by` og `postnummer`, og tildel dem værdierne af din by og dit postnummer. Brug `concat()` funktionen til at sammensætte dem og gem resultatet i en ny variabel kaldet `adresse`. Udskriv `adresse` til konsollen.
let by = "Aalborg"
let postNummer = "9000"

let adresse = by.concat(" ", postNummer);

console.log(adresse);
//Lav en variabel, `ferieDestination`, og tildel den værdien af dit ønskede feriemål. Opret en anden variabel, `feriePlan`, der indeholder en besked ved hjælp af `concat()` funktionen, der siger: "Jeg planlægger at tage til [ferieDestination] i næste uge." Udskriv `feriePlan` til konsollen.
let ferieDestination = "England";
let feriePlan = "Jeg planlægger at tage til ".concat(ferieDestination, " i næste uge");

console.log(feriePlan);

//Opret to variabler, `produktNavn` og `produktPris`, og tildel dem værdierne af et produkt og dets pris. Lav en besked ved hjælp af `concat()` funktionen, der siger: "Det valgte produkt er [produktNavn], og det koster [produktPris] dollars." Udskriv beskeden til konsollen.
let produktNavn = "Havregryn";
let produktPris = "2";

let tilbud = "Det valgte produkt er ".concat( produktNavn, ", og det koster ", produktPris, " dollars");

console.log(tilbud);