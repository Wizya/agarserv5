// ==UserScript==
// @name         Best Tricksplit, Doublesplit, and Feeding Macros + Auto Settings + Triplesplit Macro + Freeze Cell
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Sets show mass and dark theme to true, provides a tricksplit with E or 4, triplesplit with 3, doublesplit with D or 2, faster feeding with Q, and split with 1
// @author       Jacob
// @grant        none
// @run-at       document-end
// ==/UserScript==
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
var Feed = false;
var Dingus = false;
var imlost = 25;
var instructions = document.getElementById("instructions");
instructions.style.lineHeight = "1.15";
instructions.style.fontSize = "12.5px";
instructions.style.marginTop = "-30px";
instructions.innerHTML += "<center><span class='text-muted'><span data-itr='instructions_e'> Press <b>E</b> or <b>4</b> to split 4x</span></span></center>" +
	"<center><span class='text-muted'><span data-itr='instructions_3'> Press <b>3</b> to split 3x</span></span></center>" +
	"<center><span class='text-muted'><span data-itr='instructions_d'> Press <b>D</b> or <b>2</b> to split 2x</span></span></center>" +
	"<center><span class='text-muted'><span data-itr='instructions_q'> Press and hold <b>Q</b> for macro feed</span></span></center>";
function keydown(event) {
    if (event.keyCode == 81) {
        Feed = true;
        setTimeout(fukherriteindapussie, imlost);
    } // Tricksplit
    if (event.keyCode == 69 || event.keyCode == 52) { //( ͡° ͜ʖ ͡°)
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
    } // Triplesplit
    if (event.keyCode == 51 || event.keyCode == 65) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
    } // Doublesplit
    if (event.keyCode == 68 || event.keyCode == 50) {
        ilikedick();
        setTimeout(ilikedick, imlost);
    } // Split
    if (event.keyCode == 49) {
        ilikedick();
    }// When Player Lets Go Of Q, It Stops Feeding
    if (event.keyCode == 83) { //key S
        X = window.innerWidth/2;
        Y = window.innerHeight/2;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
    }// Freeze
}
function keyup(event) {
    if (event.keyCode == 81) {
        Feed = false;
    }
    if (event.keyCode == 79) {
        Dingus = false;
    }
}
// Feed Macro With Q
function fukherriteindapussie() {
    if (Feed) {
        window.onkeydown({keyCode: 87});
        window.onkeyup({keyCode: 87});
        setTimeout(fukherriteindapussie, imlost);
    }
}
function ilikedick() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
//Looking through the code now are we? ( ͡° ͜ʖ ͡°)