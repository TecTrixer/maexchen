var imgsrc = {
    1: "pic/dice-six-faces-one.png",
    2: "pic/dice-six-faces-two.png",
    3: "pic/dice-six-faces-three.png",
    4: "pic/dice-six-faces-four.png",
    5: "pic/dice-six-faces-five.png",
    6: "pic/dice-six-faces-six.png",
}
var augenzahl1;
var augenzahl2;
function wuerfeln() {
    var wuerfel1 = Math.floor(Math.random() * 6) + 1;
    var wuerfel2 = Math.floor(Math.random() * 6) + 1;
    if (wuerfel1 > wuerfel2){
        augenzahl1 = imgsrc[wuerfel1];
        augenzahl2 = imgsrc[wuerfel2];
    }
    else {
        augenzahl1 = imgsrc[wuerfel2];
        augenzahl2 = imgsrc[wuerfel1];
    }
    document.getElementById("augenzahl1").outerHTML = "<img id=\"augenzahl1\" src=\"" + augenzahl1 + "\" width=\"100\" height=\"100\">";
    document.getElementById("augenzahl2").outerHTML = "<img id=\"augenzahl2\" src=\"" + augenzahl2 + "\" width=\"100\" height=\"100\">";
    document.getElementById("wuerfeln").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"wuerfeln()\" id=\"wuerfeln\" disabled>Würfeln</button>";
    document.getElementById("naechster").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"naechster()\" id=\"naechster\">Nächster</button>";
    document.getElementById("aufdecken").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"aufdecken()\" id=\"aufdecken\" disabled>Aufdecken</button>";
}

function aufdecken() {
    document.getElementById("augenzahl1").outerHTML = "<img id=\"augenzahl1\" src=\"" + augenzahl1 + "\" width=\"100\" height=\"100\">";
    document.getElementById("augenzahl2").outerHTML = "<img id=\"augenzahl2\" src=\"" + augenzahl2 + "\" width=\"100\" height=\"100\">";
    document.getElementById("aufdecken").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"aufdecken()\" id=\"aufdecken\"  disabled>Aufdecken</button>";
}

function naechster() {
    document.getElementById("augenzahl1").outerHTML = "<img id=\"augenzahl1\" src=\"pic/dice-unknown.png\" width=\"100\" height=\"100\">";
    document.getElementById("augenzahl2").outerHTML = "<img id=\"augenzahl2\" src=\"pic/dice-unknown.png\" width=\"100\" height=\"100\">";
    document.getElementById("aufdecken").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"aufdecken()\" id=\"aufdecken\">Aufdecken</button>";
    document.getElementById("naechster").outerHTML =  "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"naechster()\" id=\"naechster\" disabled>Nächster</button>"
    document.getElementById("wuerfeln").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"wuerfeln()\" id=\"wuerfeln\">Würfeln</button>";
}
