# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Edward van Vliet

#### Je startniveau:
Blauw

#### Je focus:
Surface plane (kies uit responsive óf surface plane)
 
</details>





## Je website

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://www.virgin.com/  

&  

https://www.virgin.com/about-virgin/our-story

#### Screenshot(s) van de eerste pagina (small screen): 
Homepage Virgin  
<img src="images/homepage_virgin.jpg" width="375px" alt="Homepage Virgin">

#### Screenshot(s) van de tweede pagina (small screen):
About Virgin - Our Story  
<img src="images/ourstory_aboutvirgin.jpg" width="375px" alt="Over ons pagina Virgin">
 
</details>



## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>
 
### Pagina 1: Homepagina
 
### de hele pagina: 
<img src="images/bdschets1_homepagina_virgin.png" width="375px" alt="breakdown van de hele homepagina">

### dynamisch deel (bijv menu): 
<img src="images/hoofdmenu_virgin.png" width="375px" alt="breakdown van een dynamisch deel">

### wellicht nog een dynamisch deel (bijv filter): 
# -

### Pagina 2: About Us - Our Story
 
### de hele pagina: 
<img src="images/bdschets2_ourstory_virgin.png" width="375px" alt="breakdown van de hele pagina">

### dynamisch deel (bijv menu): 
<img src="images/hoofdmenu2_virgin.png" width="375px" alt="breakdown van een dynamisch deel">

### wellicht nog een dynamisch deel (bijv filter): 
# -
 
</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
 
Het plaatsen en positioneren van de content voor de 1e pagina ging over het algemeen wel goed. Ik wilde alleen nog weten hoe je een (foto)carousel kan maken.


### Agenda voor meeting
samen met je groepje opstellen

| Cera           | Noor               | Xavier                | Edward                       |
| ---            | ---                | ---                   | ---                          |
| Hamburgermenu  | (Foto)carousel     | Icoontjes toevoegen   | Ook een (lange) fotocarousel |
| ...            | ...                | ...                   | ...                          |
| ...            | ...                | ...                   | ...                          |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Niet te veel divs en/of classes gebruiken, weghalen
- Een H1 ontbrak nog in de HTML, ik heb van één van de H2's maar een H1 gemaakt.
- Er stond ook een beetje code uit mijn body, wat er juist wel in hoort (verkeerd genest), meteen aangepast.

</details>





## Voortgang 2 (week 3)

<details open>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
 
De content is grotendeels geplaatst in de HTML, begint er een beetje op te lijken. Wel nog veel te doen in de styling (CSS). Ik moet natuurlijk ook nog beginnen aan mijn 2e pagina, al zal veel code waarschijnlijk op de 1e pagina lijken.

### Agenda voor meeting
samen met je groepje opstellen

| Cera           | Noor                                | Xavier                                        | Edward                  |
| ---            | ---                                 | ---                                           | ---                     |
| Scrollbar      | Vragen over het (on)zichtbaar maken | Achtergrond footer in verschillende kleuren   | Dark mode toepassen     |
| ...            | van de H1                           | ...                                           | ...                     |
| ...            | ...                                 | ...                                           | ...                     |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- De dark mode was (onverwacht) best simpel om te maken. Maar omdat ik mijn CSS nog niet helemaal af heb, zal ik dit later toepassen (ook de kleuren bepalen).
- Let op hoe je jouw sections indeelt, waar begint en waar stopt een section.
- Het hamburger menuutje werkt nog niet goed, kijk hoe je dit op kan lossen.

</details>





## Toegankelijkheidstest (week 4)

<details open>
<summary>Afwezig tijdens de les, vanwege een thuisquarantaine. Thuis wel getest met toetsenbord, screen reader en dark mode (handicap).</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Dark mode (Handicap - Zichtbaarheid)

De gekozen kleuren voor de knoppen en typografie (in dark mode) lijken te veel op de achtergrondkleur, slecht contrast (niet goed leesbaar).
Ik kan hiervoor dus beter andere kleuren gebruiken, die wel goed te zien zijn / leesbaar zijn.


#### Besturing met toetsenbord

De states (met name de active en focus state) zijn qua contrast in dark mode slecht te zien, ook een slecht contrast.
Hier moet dus in de CSS qua kleurgebruik (van de shadows en/of borders bijv.) ook nog aan gesleuteld worden.

</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
 
Het hamburgermenuutje schuift wel uit, maar vult niet het gehele scherm op (wat wel moet).
Verder begint de CSS erg veel te worden, ziet er nogal rommelig uit, kan wel wat ordening en netheid gebruiken.

### Agenda voor meeting
samen met je groepje opstellen

| Cera                          | Noor                                  | Xavier                           | Edward (Afwezig --> Individueel met Yunus)                     |
| ---                           | ---                                   | ---                              | ---                                                            |
| Ruimte tussen foto's          | Formulier positioneren.               | Probleem met de footer op        | Bij het uitschuiven/klikken op het hamburgermenu wordt         |
| gelijk maken.                 | ---                                   | de 2e pagina, plakt niet.        | niet het hele scherm opgevuld, alleen een gedeelte ervan.      |
| Code checken.                 | Code checken.                         | Code checken.                    | Code checken of het semantisch goed genest is.                 |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- De CSS voor na het klikken op het hamburgermenu aanpassen, zodat hij het hele scherm opvult.
- Let op de netheid van mijn CSS, orden het netjes.
- Ook soms letten op de inspringing van mijn code.

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Screenshot(s)

hier screenshot(s) van je eindresultaat

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. Dropdown menu's: https://css-tricks.com/solved-with-css-dropdown-menus/ (ook een beetje gekeken naar de code van mijn Internetstandaarden website van jaar 1);
2. Licht en donker: https://codepen.io/shooft/pen/NWaqZOB;
3. Dark mode: https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode;
4. Flexbox: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox & https://css-tricks.com/snippets/css/a-guide-to-flexbox/;
5. CSS Gradient op de achtergrond: https://codepen.io/shooft/pen/yLzNmoN;
6. CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/.

</details>
