//Javascript Hero Grundkenntnisse
//Start Vorlage Kenntnisse

//Funktions Grundbau:
var eins = function (name) {
  //Funktion
  return eins; //Methode
};

//Beispiele String ----

//Länge eines Strings/Eingabe = .length
//z.B
//eingabe = „Franz“;
var laenge = function () {
  var length = eingabe.length();
  return length;
};

//Console.log(Funktionsname) = Konsole loggen
//Beispiel log:
var rufe = function (name) {
  var ruf = name + name;
  console.log(ruf);
  return ruf;
};

//Upper lower Beispiel
var eingabe = "Ida";
var toCase = function (eingabe) {
  var lower = eingabe.toLowerCase();
  var upper = eingabe.toUpperCase();
  return lower + "-" + upper;
};

//Beispiel charAt
var abkuerzung = function (s1, s2) {
  var n1 = s1.charAt(0);
  var n2 = s2.charAt(0);
  return n1 + n2;
};
//Beispiel Trim
var firstChar = function (s1) {
  var tr = s1.trim();
  var n1 = tr.charAt();
  return n1;
};

//Beispiel IndexOf()
var indexOfIgnoreCase = function (s1, s2) {
  var s1Klein = s1.toLowerCase();
  var s2Klein = s2.toLowerCase();
  return s1Klein.indexOf(s2Klein);
};

//Beispiel IndexOf() mit Parametern
var secondIndexOf = function (s1, s2) {
  var firstIndex = s1.indexOf(s2);
  return s1.indexOf(s2, firstIndex + 1);
};

//Beispiel substr+IndexOf()
var firstWord = function (s) {
  var firstBlank = s.indexOf(" ");
  return s.substr(0, firstBlank);
};

//Beispiel Replace
var convert = function (dateEn) {
  var dateDe = dateEn.replace("-", ".");
  dateDe = dateDe.replace("-", ".");
  dateDe = dateDe.replace("/", ".");
  dateDe = dateDe.replace("/", ".");
  return dateDe;
};

/////////////////////////////////////////

//Beispiele Zahlen ------
var add = function (x, y) {
  return x + y;
};
//Modulo Beispiel
var einer = function (zahl) {
  return zahl % 10;
};
//Beispiel Mittelwert
var mittelwert = function (zahl1, zahl2) {
  return (zahl1 + zahl2) / 2;
};
//Beispiel Hypotenuse sqrt+pow
var hypotenuse = function (a, b) {
  var hypo = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(hypo);
};
//Beispiel min-max
var bereichsmittel = function (z1, z2, z3) {
  var min = Math.min(z1, z2, z3);
  var max = Math.max(z1, z2, z3);
  return (min + max) / 2;
};
//Fläche eines Kreises, PI+Math.pow
var flaeche = function (r) {
  return Math.PI * Math.pow(r, 2);
};
//Runden
var round100 = function (z) {
  return Math.round(z / 100) * 100; // /100 * 100, da sich die Aufgabe auf hunderterstelle bezog
};
//Roll a Dice
var dice = function () {
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
};
//String Calculation
var add = function (s1) {
  var n1 = parseInt(s1, 10);
  var pos = s1.indexOf("+");
  var calc = s1.substr(pos + 1);
  var n2 = parseInt(calc, 10);
  return n1 + n2;
};
//toString Operation + Länge
var digitLength = function (z) {
  var number = z.toString();
  var dnumber = number.replace(".", ",");
  var laenge = dnumber.length;
  return laenge;
};

///////////////////////////////////////////////

//Boolean Übungen
//Basic NAND Gatter
var nand = function (b1, b2) {
  var and = b1 && b2;
  return !and;
};
//NOR Gatter
var nor = function (b1, b2) {
  var or = b1 || b2;
  return !or;
};

//XOR Gatter
var xor = function (b1, b2) {
  var or = (b1 && !b2) || (!b1 && b2);
  return or;
};

//Strikte Gleichheit
var gleich = function (w1, w2) {
  return w1 === w2;
};
//Strikte Gleichheit+Boolsche Operatoren
var gleich = function (w1, w2, w3) {
  var wahr = w1 === w2 && w2 === w3;
  return wahr;
};

//Modulo + Strikte Gleichheit
var isEven = function (z1) {
  var wahr = z1 % 2 === 0;
  return wahr;
};
//Strikte Ungleichheit
var ungleich = function (w1, w2, w3) {
  return w1 !== w2 && w2 !== w3 && w1 !== w3;
};
//Vergleiche
var istDreistellig = function (z) {
  var wahr = z >= 100 && z < 1000;
  return wahr;
};
///////////////////////////////////////////
//Schleifen

//if & Strikt
var gleich = function (w1, w2) {
  if (w1 === w2) {
    return "GLEICH";
  }
  return "UNGLEICH";
};
//If & Math operanden
var schnapszahl = function (z) {
  var einer = z % 10;
  var zehner = Math.floor(z / 10);
  if (einer === zehner) {
    return "Schnaps!";
  }
  return "Kein Schnaps!";
};
//if mit else
var addiereMitZuschlag = function (b1, b2) {
  var zuschlag = 0;
  if (b1 <= 10) {
    zuschlag = zuschlag + 1;
  } else zuschlag = zuschlag + 2;
  if (b2 <= 10) {
    zuschlag = zuschlag + 1;
  } else zuschlag = zuschlag + 2;
  return b1 + b2 + zuschlag;
};
//Verschachtelte if
var addiereMitZuschlag = function (b1, b2) {
  var zuschlag = 0;
  if (b1 <= 10) {
    zuschlag = zuschlag + 1;
  } else if (b1 > 10 && b1 <= 20) {
    zuschlag = zuschlag + 2;
  } else if (b1 > 20 && b1 <= 30) {
    zuschlag = zuschlag + 3;
  }
  if (b2 <= 10) {
    zuschlag = zuschlag + 1;
  } else if (b2 > 10 && b2 <= 20) {
    zuschlag = zuschlag + 2;
  } else if (b2 > 20 && b2 <= 30) {
    zuschlag = zuschlag + 3;
  }
  return b1 + b2 + zuschlag;
};

///////////////////////////////////////////////
//Arrays
//Beispiel Array
var toArray = function (p1, p2) {
  var ar = [p1, p2];
  return ar;
};
//Index ausgeben
var getFirstElement = function (ar) {
  return ar[0];
};
//Index einsetzen
var setFirstElement = function (ar, z) {
  ar[0] = z;
  return ar;
};
//Letzte Stelle im Array auslesen
var getLastElement = function (ar) {
  var l = ar.length - 1;
  return ar[l];
};
//Sortieren
var sortiere = function (ar) {
  return ar.sort();
};
//Wechsel von Elemente mit shift&push
var rotiere = function (ar) {
  var ele0 = ar.shift();
  ar.push(ele0);
  return ar;
};

//Beeinhaltet z1, wenn nicht push
var add = function (a1, z1) {
  if (a1.includes(z1)) {
    return a1;
  } else {
    a1.push(z1);
    return a1;
  }
};
//Bedingungen mit concat
var concatUp = function (ar1, ar2) {
  var lar1 = ar1.length;
  var lar2 = ar2.length;
  var ar3 = [];
  if (lar1 < lar2) {
    ar3 = ar1.concat(ar2);
    return ar3;
  } else if (lar1 > lar2) {
    ar3 = ar2.concat(ar1);
    return ar3;
  } else if (lar1 == lar2) {
    ar3 = ar1.concat(ar2);
    return ar3;
  }
};
//Slice wenn gerade und slice +1 wenn ungerade
var halve = function (ar) {
  var arl = ar.length;
  var start = 0;
  if (arl % 2 == 0) {
    var end = arl / 2;
    var ar2 = ar.slice(start, end);
    return ar2;
  } else {
    var end = (arl + 1) / 2;
    var ar2 = ar.slice(start, end);
    return ar2;
  }
};
/*Eigenschaftenübersicht

String Eigenschaften

.length = Länge - strlaenge.length;
.toUpperCase() = Großschreiben alles
.toLowerCase() = Alles Kleinschreiben
.charAt(Position) = Zeichen an einer bestimmten Stelle, bei charAt() = Stelle 0
.trim() = entfernt Leerzeichen an beiden Ende eines Strings
.indexOf() = Position eines Strings innerhalb eines anderen Strings zu bestimmen
(Zählen ab stelle 0, nicht vorhanden = -1)
.indexOf() Kann zwei Parameter beeinhalten, wobei der zweite Parameter die Stelle ist.
somit ergibt sich .indexOf("wert", stelle); z.B .indexOf("e", 1);
.substr(Stelle, Zeichen) die Methode extrahiert aus einem String.
.replace(Zu ersetzen, neuer Wert) ersetzt einen Teilstring durch einen anderen
------------------------------------------------------------------------------------
Zahlen Eigenschaften
Normale Zahlen als 1 oder 1.0 dargestellt
Mit Ihnen lässt sich normal rechnen +, -, *(Multiplizieren), /(Dividieren)
Inkrementieren ist x++, also x = x + 1, gilt auch für x--, also x = x - 1
Fahrenheit(US Grad quasi)
Rechenart Modulo %, berechnet den Rest einer Division
Es gilt die Punkt vor Strich Regel
Math.sqrt(x) Die Quadratwurzel
Math.pow(x,y) die Potenz - x hoch y
Das Minimum und Maximum einer Reihe von Zahlen bestimmt man mit
Math.min(Zahlenreihe) und Math.max(Zahlenreihe)
Math.PI = Pi
Math.E = Eulersche Zahl
Auf-abrunden:
Math.round()=kaufmännisches Runden bezieht sich nur auf die erste Dezimale
Math.floor() rundet immer ab
Math.ceil() rundet immer auf
Math.random() erzeigt eine Zufallszahl zwischen 0(inklusive) und 1(exklusive), jeder
erneute Aufruf von Math.random() generiert eine neue Zufallszahl
parseInt(x,10) wandelt String in eine Zahl um(-,Grad,0,+) hierbei steht 10 für das Dezimalsystem
.tostring() Wandelt eine Zahl in den String um. Dezmalpunkt = .;
Wenn man die Zahl ins deutsche format mit komma bringen möchte nutze einfach
.replace('.',',')
-----------------------------------------------
Wahrheitswerte(Booleans) Eigenschaften
Kennen nur zwei Zustände(true & false) mit ihnen lässt sich ähnlich "rechnen" wie mit Zahlen
Booleans besitzen drei Operatoren
&& = und, verknüpft zwei Werte, sind beide Werte true, ist das Ergebnis true, sonst false.
||(alt Gr+< auf der Tastatur xD) = oder, wenn beide werte false sind, ist das Ergebnis false, sonst true.
! = nicht, wird nur auf einen Wert angewendet, somit wird aus true -> false und aus false ->true
Das Ergebnis ist imm ein Boolescher Wert
Es gibt mehrere Gatter:
NAND-Gatter(Not AND-nicht und)
NOR-Gatter(Not OR - nicht oder)
XOR-Gatter(X Or - entweder oder)

=== -> Strikte Gleichheit, vergleicht zwei Datentypen, hierbei gilt:
die Datentypen & Werte müssen gleich sein um ein true zu erhalten
!== -> Strikte Ungleichheit, hierbei ist auf groß-kleinschreibung und typen zu achten, beides anders = true

Zahlen vergleichen mit Hilfe von >,>=,<,<= (größer, größer gleich etc)
------------------------------------------------
Schleifen - Eigenschaften
Aufbau IF
wenn (Vergleich) { //Vergleich ist immer ein Boolean
  dann = ...
} sonst - oder wenn usw // else steht nur, wenn die If nicht erfüllt ist

Möchte man mehrere Fälle unterscheiden so lassen sich if Schleifen mit else if verschachteln

-------------------------------------------------
Arrays
Arrays sind Objekte zur Speicherung, vieler meist ähnlicher Werte.
Die Elemente eines Arrays, werden in der Reihe angelegt
z.B var a = [1, 2, 3]
Bei einem Array fängt man das Zahlen der Elemente bei 0 an.
so wäre 1 stelle 0, 2 stelle 1 usw..
Dieser Index lässt sich wie folgt aufrufen
var ind = a[1], würde 2 ausgeben
Man kann über den Index auch Arrays setzen so z.B
a[1] = 4;
.length gibt hier die Anzahl der Elemente zurück
.sort sortiert ein Array nach den Größen der Elemente
.shift() und .push() Methoden
.shift() Nimmt das 0te Element und schiebt es in ein anderes Array/Variable
.push() setzt ein Element in das Array ein, immer als nächstes
.indexOf('Elementname') kann man die Position des Elements innerhalb eines Arrays bestimmen
.includes() Checkt ob das Array das Element beeinhaltet
.concat() Mit der Concat Methode kann man zwei Arrays aneinanderhängen, verändert jedoch
nicht die ursprünglichen Arrays
.slice() kopiert aus einem Array einen Teilarray
.slice(x,y) der erste Parameter gibt den Startindex(einschließlich) und der zweite Parameter
gibt den Endindex(ausschlißelich) an. Das ursprüngliche Array bleibt unverändert.
.join() damit verbindet man alle Elemente eines Arrays zu einem String
Multidimensionale Arrays, man kann Arrays in Arrays speichern
Man kann in einem Array mit 3 Arrays auf array 0,0 zugreifen mit
var x = y[0][0];
*/
