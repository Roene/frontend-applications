# Risicotaxatie app
Dit project is opgesteld om de risicotaxatie app van Arjan te verbeteren. De applicatie kan worden gebruikt om de kans op een zware 
maatregel te berekenen.
Tijdens dit project was de voorwaarde dat er gewerkt wordt met een framework, in dit project is dat [Ember.js](https://www.emberjs.com/).

## Inhoud
* [To Do](#to-do)
* [Voorwaarden](#voorwaarden)
* [Installatie](#installatie)
* [Start](#start-project)
* [Proces](#proces)
* [Licentie](#licentie)

## To Do
Tijdens dit project wilde ik de volgende dingen doen
- [x] Ember installeren
- [x] Componenten & routes maken
- [x] Data inladen in een component
- [ ] Ingevulde data opslaan in localstorage 
- [ ] Helpers gebruiken

## Voorwaarden

Voor dit project moet je de volgende dingen geinstalleerd hebben op je computer : 

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (met npm)
* [Ember CLI](https://ember-cli.com/)

## Installatie

Om dit project te installeren ga je naar je _terminal:_
```
git clone https://github.com/Roene/tt-assessment-1
cd risicotaxatie
npm install
```
## Start project

* `ember serve`
* Bezoek de app op : [http://localhost:4200](http://localhost:4200). 👻
* Voor test kun je hier naar toe gaan : [http://localhost:4200/tests](http://localhost:4200/tests).

## Proces

In mijn proces ga ik de volgende dingen bespreken.

* Starten met Ember
* Het Concept
* Data laden
* Leerpunten
* Conclusie

### Starten met Ember
Tijdens het installeren van Ember liep ik al tegen problemen aan. Ik kreeg verschillende errors waardoor ik Ember niet kon installeren. 
Het fixen van deze errors was lastig omdat ik soms niet wist op welke errors ik moest zoeken. Uiteindelijk heeft dit mij 1 dag gekost voor ik het probleem
kon gaan oplossen.

Nadat ik Ember werkend had gekregen ben ik gestart met de [Ember quick start]('https://guides.emberjs.com/release/getting-started/quick-start/'). Vergolgens ben ik de [tutorial]('https://guides.emberjs.com/release/tutorial/ember-cli/') gaan maken zodat ik kennis kon gaan maken met Ember. 

### Het Concept
Voordat ik ben begonnen met het maken van een prototype heb ik eerst gekeken naar het bestaande prototype van Arjan en waar daar de ergernis zit. Dit zat vooral in het vele klikken naar verschillende tabbladen. Daarom heb ik gekozen voor een grid-view, zodat je alle categorieën al beschikbaar hebt in je scherm. 

### Data laden
De data kregen wij aangeleverd als Json file. De date moest worden uitgelezen en verwerkt worden zodat het in een werkbaar formaat kwam. Ook wilde ik de data weer categoriseren in mijn eigen gemaakte categorieën. Dit wordt gedaan met onderstaande code. Deze data wordt weer meegegeven in een Route zodat in het template de data gelijk goed is gesorteerd

```js 
// Bron Martijn Reeuwijk <3 | Datum 14-10-2018
var dataCombined = [];
for (var i = 0; i < data.length; i++) {

  var newCategory = true;
  for (var j = 0; j < dataCombined.length; j++) {
    if (dataCombined[j].Categorie === data[i].Categorie) {
      newCategory = false;
    }
  }

  if (newCategory) {
    dataCombined.push({
      'Categorie': data[i].Categorie,
      'Antwoorden': []
    });
  }

  for (var j = 0; j < dataCombined.length; j++) {
    if (dataCombined[j].Categorie === data[i].Categorie) {
      dataCombined[j].Antwoorden.push({
        'Coefficients': data[i].Coefficients,
        'Name': data[i].Name,
        'Gewicht': data[i].Gewicht,
      });
    }
  }
}

// Worked together with Jeroen van Berkum
var dataDoubleCombined = {
  algemeen: [],
  opleiding: [],
  huishouding: [],
  werk: [],
  justitie: []
}

for (var x = 0; x < dataCombined.length; x++) {
  switch(dataCombined[x].Categorie) {
    case 'Geslacht':
    case 'Herkomst':
    case 'Leeftijd moeder':
    case 'Leeftijd vader':
    case 'Leeftijdsverschil ouders':
      dataDoubleCombined.algemeen.push(dataCombined[x]);
      break; 
    case 'Voortijdig schoolverlaten':
    case 'Soort onderwijs':
    case 'Verandering onderwijs niveau':
    case 'Actueel onderwijs niveau':
    case 'Hoogst behaalde diploma vader':
    case 'Hoogst behaalde diploma moeder':
      dataDoubleCombined.opleiding.push(dataCombined[x]);
      break;
    case 'Soort woning':
    case 'Type huishouden':
      dataDoubleCombined.huishouding.push(dataCombined[x]);
      break;
    case 'Gescheiden ouders':
    case 'Werk vader':
    case 'Werk moeder':
      dataDoubleCombined.werk.push(dataCombined[x]);
      break;
    case 'Vader of moeder verdacht':
    case 'Kind verdacht':
    case 'Halt delict':
    case 'Slachtoffer':
    case 'Traject vooraf':
      dataDoubleCombined.justitie.push(dataCombined[x]);
      break;
  }
}
``` 
### Leerpunten


### Conclusie


## Licentie

MIT © [Roene Verbeek](https://github.com/Roene)