
var seed = Math.floor(Math.random() * 200);
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
var imgsrc = {
    1: "pic/dice-six-faces-one.png",
    2: "pic/dice-six-faces-two.png",
    3: "pic/dice-six-faces-three.png",
    4: "pic/dice-six-faces-four.png",
    5: "pic/dice-six-faces-five.png",
    6: "pic/dice-six-faces-six.png",
}
var reihenfolge = {
    "2 1": 0,
    "6 6": 1,
    "5 5": 2,
    "4 4": 3,
    "3 3": 4,
    "2 2": 5,
    "1 1": 6,
    "6 5": 7,
    "6 4": 8,
    "6 3": 9,
    "6 2": 10,
    "6 1": 11,
    "5 4": 12,
    "5 3": 13,
    "5 2": 14,
    "5 1": 15,
    "4 3": 16,
    "4 2": 17,
    "4 1": 18,
    "3 2": 19,
    "3 1": 20,
}
var augenzahl1;
var augenzahl2;
var zahl;
var fakezahl1;
var fakezahl2;
var fakeaugenzahl1;
var fakezahl;
var fakeaugenzahl2;
var letztezahl = "3 1";

function wuerfeln() {
    document.getElementById("maexchen").outerHTML = "<h2 class=\"text-success\" id=\"maexchen\"></h2>";
    var wuerfel1 = Math.floor(random() * 6) + 1;
    var wuerfel2 = Math.floor(random() * 6) + 1;
    if (wuerfel1 > wuerfel2){
        zahl = wuerfel1 + " " + wuerfel2;
        augenzahl1 = imgsrc[wuerfel1];
        augenzahl2 = imgsrc[wuerfel2];
    }
    else {
        zahl = wuerfel2 + " " + wuerfel1;
        augenzahl1 = imgsrc[wuerfel2];
        augenzahl2 = imgsrc[wuerfel1];
    }
    document.getElementById("augenzahl1").outerHTML = "<img id=\"augenzahl1\" src=\"" + augenzahl1 + "\" width=\"100\" height=\"100\">";
    document.getElementById("augenzahl2").outerHTML = "<img id=\"augenzahl2\" src=\"" + augenzahl2 + "\" width=\"100\" height=\"100\">";
    document.getElementById("wuerfeln").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"wuerfeln()\" id=\"wuerfeln\" disabled>Würfeln</button>";
    document.getElementById("naechster").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"naechster()\" id=\"naechster\">Nächster</button>";
    document.getElementById("aufdecken").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"aufdecken()\" id=\"aufdecken\" disabled>Aufdecken</button>";
    if (zahl == "2 1") {
        document.getElementById("maexchen").outerHTML = "<h2 class=\"text-success\" id=\"maexchen\">Mäxchen !!!</h2>";
    }
    if (reihenfolge[zahl] > reihenfolge[letztezahl]) {
        input = prompt("Sie haben " + zahl + " gewürfelt. Ihr Vorgänger hat " + fakezahl + " gewürfelt. Was ist deine Lüge?)
        fakezahl1 = input.split("")[0]
        fakezahl2 = input.split("")[1]
        if (fakezahl1 > fakezahl2){
            fakezahl = fakezahl1 + " " + fakezahl2;
            fakeaugenzahl1 = imgsrc[fakezahl1];
            fakeaugenzahl2 = imgsrc[fakezahl2];
        }
        else {
            fakezahl = fakezahl2 + " " + fakezahl1;
            fakeaugenzahl1 = imgsrc[fakezahl2];
            fakeaugenzahl2 = imgsrc[fakezahl1];
        }
    }
    else {
        fakezahl = zahl;
        fakezahl1 = wuerfel1;
        fakezahl2 = wuerfel2;
        fakeaugenzahl1 = augenzahl1;
        fakeaugenzahl2 = augenzahl2;
    }
}

function aufdecken() {
    document.getElementById("augenzahl1").outerHTML = "<img id=\"augenzahl1\" src=\"" + augenzahl1 + "\" width=\"100\" height=\"100\">";
    document.getElementById("augenzahl2").outerHTML = "<img id=\"augenzahl2\" src=\"" + augenzahl2 + "\" width=\"100\" height=\"100\">";
    document.getElementById("aufdecken").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"aufdecken()\" id=\"aufdecken\"  disabled>Aufdecken</button>";
    if (zahl == fakezahl) {
        document.getElementById("maexchen").outerHTML = "<h2 class=\"text-success\" id=\"maexchen\"> Leider verloren, bitte trinken.</h2>";
        letztezahl = "3 1";
    }
    else {
        document.getElementById("maexchen").outerHTML = "<h2 class=\"text-success\" id=\"maexchen\">Ihr Vorgänger hat gelogen, er muss trinken.</h2>";
        letztezahl = "3 1";
    }
}

function naechster() {
    if (zahl == "2 1") {
        document.getElementById("maexchen").outerHTML = "<h2 class=\"text-success\" id=\"maexchen\"></h2>";
        letztezahl = "3 1";
        fakezahl = "3 1";
    }
    else {
        letztezahl = fakezahl;
    }
    document.getElementById("augenzahl1").outerHTML = "<img id=\"augenzahl1\" src=\"pic/dice-unknown.png\" width=\"100\" height=\"100\">";
    document.getElementById("augenzahl2").outerHTML = "<img id=\"augenzahl2\" src=\"pic/dice-unknown.png\" width=\"100\" height=\"100\">";
    document.getElementById("aufdecken").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"aufdecken()\" id=\"aufdecken\">Aufdecken</button>";
    document.getElementById("naechster").outerHTML =  "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"naechster()\" id=\"naechster\" disabled>Nächster</button>"
    document.getElementById("wuerfeln").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"wuerfeln()\" id=\"wuerfeln\">Würfeln</button>";
}
