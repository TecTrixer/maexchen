var augenzahl;
function wuerfeln() {
    var wuerfel1 = Math.floor(Math.random() * 6) + 1;
    var wuerfel2 = Math.floor(Math.random() * 6) + 1;
    if (wuerfel1 > wuerfel2){
        augenzahl = wuerfel1 + " | " + wuerfel2;
    }
    else {
        augenzahl = wuerfel2 + " | " + wuerfel1;
    }
    document.getElementById("augenzahlen").innerHTML = augenzahl;
    document.getElementById("wuerfeln").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"wuerfeln()\" id=\"wuerfeln\" disabled>Würfeln</button>";
    document.getElementById("naechster").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"naechster()\" id=\"naechster\">Nächster</button>";
    document.getElementById("aufdecken").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"aufdecken()\" id=\"aufdecken\" disabled>Aufdecken</button>";
}

function aufdecken() {
    document.getElementById("augenzahlen").innerHTML = augenzahl;
    document.getElementById("aufdecken").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"aufdecken()\" id=\"aufdecken\"  disabled>Aufdecken</button>";
}

function naechster() {
    document.getElementById("augenzahlen").innerHTML = "- | -";
    document.getElementById("aufdecken").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"aufdecken()\" id=\"aufdecken\">Aufdecken</button>";
    document.getElementById("naechster").outerHTML =  "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"naechster()\" id=\"naechster\" disabled>Nächster</button>"
    document.getElementById("wuerfeln").outerHTML = "<button class=\"btn btn-lg shadow btn-outline-primary\" onclick=\"wuerfeln()\" id=\"wuerfeln\">Würfeln</button>";
}
