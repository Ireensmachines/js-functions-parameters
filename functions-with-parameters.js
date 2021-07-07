/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
    return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 [x]*/
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

function greeter(name) {

    console.log("hoi " + name + "!")

}

greeter("Jan")
greeter("Kees")


/* Opdracht 2 [x]*/
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToSeconds(minutes = 1, seconds = 60) {

    outcome = (seconds * minutes)
}

minutesToSeconds(3)
console.log(outcome)


//Opdracht 3 [x]
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"*/

function merge(woord, string) {
    console.log(woord + string)
}

merge("abra", "cadabra")
merge("zoet", "sappig")

/* Opdracht  4 [x]*/
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears(dogs = 1, human = 7) {
    outcome = (dogs * human)
}

calculateDogYears(6)
console.log("Jouw hond is " + outcome + " jaar oud in mensenjaren")


/* Opdracht 5 [x]*/
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrapper(woord, karakter){
return karakter + woord + karakter
}
wrapper("bril", "*")
wrapper("beep", "_")
wrapper("kaas", "Q")


console.log(wrapper("beep", "_"))




/* Bonus opdracht[x]  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep van Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep van Kees Klaasen is brandweerman."


function createDetailString(firstName, lastName, profession) {
    console.log("Het beroep van " +  firstName + lastName +  " is " + profession)
}
createDetailString("Jan ", "Jansen", "docent")
createDetailString("Kees ", "Klaasen", "brandweerman")



