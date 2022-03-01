var catalan2ipa = require("catalan2ipa")


// Test A
/*
let stuff = []
stuff.push(catalan2ipa("Valencià"))
stuff.push("Valencià")
stuff.push(catalan2ipa("Calle Doctor Pagès, 26-28"))
stuff.push("Calle Doctor Pagès, 26-28")
stuff.push(catalan2ipa("Avenida Europa, 36"))
stuff.push("Avenida Europa, 36")
stuff.push(catalan2ipa("Calle Ortigosa, 14-16"))
stuff.push("Calle Ortigosa, 14-16")


console.log(stuff)
*/
//////////
// Test B
let testData = [ 
["Catalan",	"Polígono Industrial Europa de les Nacions, s/n" ], 
["Catalan", "Passeig Maragall, 241"], 
["Catalan",	"Carretera de Cardedeu-Dr.Salvador Llobet, 2"], 
["Catalan",	"Calle Doctor Pagès, 26-28"],
["Catalan",	"Calle Pujades, 15-17"], 
["Catalan",	"Calle Escòcia, 40-48"], ["Catalan",	"Avenida St.Julià, 10-12"],
["Catalan",	"Ronda Països Catalans, 21-27"],
["Catalan",	"Calle Enric Prat de la Riba, 168-170"],
["Catalan",	"Calle d'en Draper, 1"],
["Catalan",	"Passeig Valldaura, 136"],
["Catalan",	"C-65, 'Paratge Bujonis', Pol. A"],
["Catalan",	"Calle Santiago Rusinyol, s/n"],
["Catalan",	"Carretera L'Estartit, s/n-Mas Marquès"],
["Catalan",	"Gran Vía Corts Catalanes, 721"],
["Catalan",	"Ronda St.Ramon de Penyafort, s/n"],
["Catalan",	"Calle Vila i Vilà, 35-37"],
["Catalan",	"Carretera De Sils, 65 (C-253)"],
["Catalan",	"Passeig de la Dona, 2-18 (Sector Can Filuà)"],
["Catalan",	"Avenida  De les Alegries, s/n"],
["Catalan",	"Avenida del Maresme, 16"],
["Catalan",	"Avenida  Catalunya, s/n"],
["Catalan",	"Avenida Josep Tarradellas i Joan, 9-11"],
["Catalan",	"Plaça Europa s/n"],
["Catalan",	"Avenida  Joan Carles I, 355-400"],
["Catalan",	"Carrer de Salt, 2 Pol. Ind. Mas Xirgu"],
["Catalan",	"Carretera C-260 de Besalú a Roses, 126"],
["Catalan",	"Comte d'Urgell, 259"],
["Catalan",	"Gran Vía de les Corts, 159"],
["Catalan",	"Calle Nicaragua, (Pça.Jardins de Málaga), 29"],
["Catalan",	"Calle Amadeu Torner, 60"],
["Catalan",	"Calle Travessera de les Corts, 251-253 "],
["Catalan", "Calle Gran de Sant Andreu, 410"],
["Catalan",	"Avenida  Francesc Macià, S/N"],
["Catalan",	"Passeig de la Vall d'Hebron, 130-134"],
["Catalan",	"Calle del Compte d'Urgell, 1"],
["Catalan",	"Calle Francesc Ferrer i Guardia, 24-48"],
["Catalan",	"Avenida  Can Montcau, 11"],
["Catalan",	"Rambla Fabra i Puig, 25 - 27"],
["Catalan",	"CalleTreball, 238"],
["Catalan",	"Avenida Josep Tarradellas, 12"],
["Catalan",	"Calle Sant Adrià, 154-162"],
["Castellano",	"Calle Cartagena, 210"],
["Castellano",	"Calle Vilallonga, 74-78"],
["Castellano",	"Calle Casanova, 77-79"],
["Castellano",	"Calle Bailén, 165-167"],
["Castellano",	"Calle Badal, 151"],
["Castellano",	"CalleGarbi, 2-8-Ctra.N-II"],
["Castellano",	"Calle Navas de Tolosa, 318"],
["Castellano",	"Avenida Alfonso XIII, 536-542"],
["Castellano",	"Calle Bac de Roda, 178"],
["Castellano",	"Ctra.N-II, km.673"],
["Castellano",	"Calle Lope de Vega,112-114"],
["Castellano",	"Ctra.de Barcelona, 180-196"],
["Castellano",	"Avenida  Europa, 36"],
["Castellano",	"Calle Balmes, 6"],
["Castellano",	"Calle Filosofía 6-8"],
["Castellano",	"Calle Industria, 1" ],
["Castellano",	"Carretera de Gualba, 45"],
["Castellano",	"Calle La Maquinista, 46-48"],
["Castellano",	"Calle Ortigosa, 14-16"],
]

for (let location of testData) {
  console.log(`\n${location[0]}: ${location[1]}\n\t==> ${JSON.stringify(catalan2ipa(location[0]))}`)
}
