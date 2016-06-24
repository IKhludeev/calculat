var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";
function NumPressed (Num) {
        if (FlagNewNum)
        {
            Fcalc.line.value = Num;
            FlagNewNum = false;
        }  
        else
        {
            if (Fcalc.line.value == "0")
                Fcalc.line.value = Num;
            else
                Fcalc.line.value += Num;
        }
}
function Operation (Op) {
        var line = Fcalc.line.value;
        if (FlagNewNum && PendingOp != "=")
        {
            Fcalc.line.value = Currents;
        }
        else
        {
            FlagNewNum = true;
            if ( '+' == PendingOp )
                Currents += parseFloat(line);
            else if ( '-' == PendingOp )
                Currents -= parseFloat(line);
            else if ( '/' == PendingOp )
                Currents /= parseFloat(line);
            else if ( '*' == PendingOp )
                Currents *= parseFloat(line);
            else
                Currents = parseFloat(line);
            Fcalc.line.value = Currents;
            PendingOp = Op;
        }      
}
function Clear () {
        Fcalc.line.value = "";
        FlagNewNum = true;
}
function Point () {
        var curline = Fcalc.line.value;
        if (FlagNewNum)
        {
            curline = "0.";
            FlagNewNum = false;
        }
        else
        {
            if (curline.indexOf(".") == -1)
                curline += ".";
        }
        Fcalc.line.value = curline;
}
function Neg () {
        Fcalc.line.value =
        parseFloat(Fcalc.line.value) * -1;
}
function addNumber (number) {
    var inp = document.getElementById("line");
    inp.value = inp.value + number;
}
var b7 = document.getElementById("b7");
b7.onclick = function () {
    addNumber(7);
}
var b8 = document.getElementById("b8");
b8.onclick = function () {
    addNumber(8);
}
var b9 = document.getElementById("b9");
b9.onclick = function () {
    addNumber(9);
}
var b4 = document.getElementById("b4");
b4.onclick = function () {
    addNumber(4);
}
var b5 = document.getElementById("b5");
b5.onclick = function () {
    addNumber(5);
}
var b6 = document.getElementById("b6");
b6.onclick = function () {
    addNumber(6);
}
var b1 = document.getElementById("b1");
b1.onclick = function () {
    addNumber(1);
}
var b2 = document.getElementById("b2");
b2.onclick = function () {
    addNumber(2);
}
var b3 = document.getElementById("b3");
b3.onclick = function () {
    addNumber(3);
}
var zerro = document.getElementById("zerro");
zerro.onclick = function () {
    addNumber(0);
}