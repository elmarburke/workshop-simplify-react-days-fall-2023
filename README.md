# Working Repo for The ReactDays Berlin 2023 Workshop Simplify React

## Setup

Install dependencies with NPM

```bash
$ npm install
```

## Run

This will start the development server, consult the console for the URL to open in your browser.

```bash
$ npm run dev
```

## Tasks

### 🏗️ Baue eine wiederverwendbare `<Disclosure>` Komponente und implementier diese in der CoffeeList
    1. Verwende  [** github.com/elmarburke/workshop-simplify-react-days-fall-2023**](https://github.com/elmarburke/workshop-simplify-react-days-fall-2023) 
    2. **Wiederverwendbare Komponente**:
    Erstellen Sie eine React-Komponente namens Disclosure, die das details und summary Element kapselt.
    3. **Beliebiger Inhalt**: 
    Die Komponente sollte in der Lage sein, beliebigen Inhalt sowohl für die Zusammenfassung als auch für den aufklappbaren Inhalt zu akzeptieren.
    4. **Styling**:
    Verwende CSS oder TailwindCSS, um die Komponente zu stylen, je nachdem, was du bevorzugst.
    5. **Accessibility**:
    Stelle sicher, dass die Komponente barrierearm ist
    6. **Pfeil-Icon** (Bonus):
    Fügen Sie am Ende der summary ein Pfeil-Icon hinzu, das sich umdreht, wenn das details-Element geöffnet ist.
    7. **CoffeeList**:
    Verwenden Sie die Komponente in der CoffeeList, um die Beschreibung der Kaffees zu verbergen und anzuzeigen.



### 🏗️ Übung: Erstellung eines CreateCoffee-Formulars
	1. Erstelle ein Formular mit dem Namen `CreateCoffeeForm`
	2. **Felder**: Verwende die Felder die in der `db.json`` zu sehen sind.
	3. `Feldanzeige`:
		Die Felder sollen der Reihe nach angezeigt werden.
		Verwendet den Sibling-Selector (~) in eurem CSS o### 🏗️ Übung: Erstellung eines CreateCoffee-Formulars
	1. Erstelle ein Formular mit dem Namen `CreateCoffeeForm`
	2. **Felder**: Verwende die Felder die in der `db.json`` zu sehen sind.
	3. `Feldanzeige`:
		Die Felder sollen der Reihe nach angezeigt werden.
		Verwendet den Sibling-Selector (~) in eurem CSS oder den entsprechenden `peer:`-Modificator in TailwindCSS, um die Anzeige der Felder zu steuern.
	4. Platziert am Ende des Formulars einen Button mit dem Text "Create Coffee"
    5. **Validierung**:
        Validiert die Felder, bevor das Formular abgeschickt wird.
        Verwendet die `required`-Attribute der HTML-Input-Elemente und das pattern-Attribut.der den entsprechenden `peer:`-Modificator in TailwindCSS, um die Anzeige der Felder zu steuern.
	4. Platziert am Ende des Formulars einen Button mit dem Text "Create Coffee"
    5. **Validierung**:
        Validiert die Felder, bevor das Formular abgeschickt wird.
        Verwendet die `required`-Attribute der HTML-Input-Elemente und das pattern-Attribut.