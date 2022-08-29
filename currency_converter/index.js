const prompt = require('prompt-sync')();
// Hvilket schema trenger jeg og hvordan bruke det?
// Hvordan promte brukeren?
// Hvordan ta i mot argumenter?
// Hvordan ha applikasjonsflyt?
// Hvordan håndtere feil verdier?


const currencies = {
    dkk: { label: {no:'Danske Kroner', en: "Danish Crowns"}}, 
    eur: { label: {no: 'Euro', en: "Euro"}}, 
    usd: { label: {no: 'Amerikanske Dollar', en: 'American Dollars'}}
}

const translations = {
    no: {
        welcomeMessage: "Norsk(no)",
        valueMessage: "Hvilken verdi vil du konvertere?",
        currencies: {
            usd:"Amerikanske Dollar",
            eur: "Euro",
            dkk: "Danske Kroner",
        }
    },

    en: {
        welcomeMessage: "English(en)",
        valueMessage: "What value do you wish to convert?",
        currencies: {
            usd:"American Dollar",
            eur: "Euro",
            dkk: "Dansish Crowns",
        }
    },
};

const rates = {
    dkk: 1.34,
    eur: 10,
    usd: 8
}
//
// get input from the user.
//
function getWelcomeMessage (translations){
    let message = ""
    for(const language of Object.values(translations)){
        message += `${language.welcomeMessage} `
    }
    return(message)
}

function convertToEuro(value) {
    return Number(value) / 10;
}

function convertToDollar(value) {
    return Number(value) / 8;
}

function convertToDanish(value) {
    return Number(value) / 1.34;
}




function start(translations, rates) {
    const language = prompt(getWelcomeMessage(translations));
    console.log(language)
}

start(translations, rates)