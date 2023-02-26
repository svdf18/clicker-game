"use strict"

const mainElementContainer1 = document.querySelector("#main_element_container1");
const mainElementContainer2 = document.querySelector("#main_element_container2");
const mainElementContainer3 = document.querySelector("#main_element_container3");
const mainElementContainer4 = document.querySelector("#main_element_container4");

const mainElementSprite1 = document.querySelector("#main_element_sprite1");
const mainElementSprite2 = document.querySelector("#main_element_sprite2");
const mainElementSprite3 = document.querySelector("#main_element_sprite3");
const mainElementSprite4 = document.querySelector("#main_element_sprite4");

const mainElementGif1 = document.querySelector("#main_element_sprite_dissolve1");
const mainElementGif2 = document.querySelector("#main_element_sprite_dissolve2");
const mainElementGif3 = document.querySelector("#main_element_sprite_dissolve3");
const mainElementGif4 = document.querySelector("#main_element_sprite_dissolve4");

const badElementContainer1 = document.querySelector("#bad_element_container1");
const badElementContainer2 = document.querySelector("#bad_element_container2");
const badElementContainer3 = document.querySelector("#bad_element_container3");
const badElementContainer4 = document.querySelector("#bad_element_container4");

const badElementSprite1 = document.querySelector("#bad_element_sprite1");
const badElementSprite2 = document.querySelector("#bad_element_sprite2");
const badElementSprite3 = document.querySelector("#bad_element_sprite3");
const badElementSprite4 = document.querySelector("#bad_element_sprite4");

const badElementGif1 = document.querySelector("#bad_element_sprite_dissolve1");
const badElementGif2 = document.querySelector("#bad_element_sprite_dissolve2");
const badElementGif3 = document.querySelector("#bad_element_sprite_dissolve3");
const badElementGif4 = document.querySelector("#bad_element_sprite_dissolve4");

const mainCharContainer1 = document.querySelector("#main_char_container1");
const mainCharContainer2 = document.querySelector("#main_char_container2");
const mainCharContainer3 = document.querySelector("#main_char_container3");

const elementCount = document.querySelector("#element_count");


let points = 0;
let lives=0;

window.addEventListener("load", start);

function start() {
    console.log("js running ye!");

    points = 0;
    lives = 3;

    mainElementContainer1.classList.add("move_center1");
    mainElementContainer2.classList.add("move_center2");
    mainElementContainer3.classList.add("move_center3");
    mainElementContainer4.classList.add("move_center4");

    badElementContainer1.classList.add("move_across1");
    badElementContainer2.classList.add("move_across2");
    badElementContainer3.classList.add("move_across3");
    badElementContainer4.classList.add("move_across4");

    mainCharContainer1.classList.add("pulse");
    mainCharContainer2.classList.add("pulse");
    mainCharContainer3.classList.add("pulse");

    
    mainElementContainer1.addEventListener("click", clickMe1);
    mainElementContainer2.addEventListener("click", clickMe2);
    mainElementContainer3.addEventListener("click", clickMe3);
    mainElementContainer4.addEventListener("click", clickMe4);

    badElementContainer1.addEventListener("click", clickBe1);
    badElementContainer2.addEventListener("click", clickBe2);
    badElementContainer3.addEventListener("click", clickBe3);
    badElementContainer4.addEventListener("click", clickBe4);

}

function clickMe1() {
    console.log("click me1");
    mainElementContainer1.removeEventListener("click", goneMe1);
    mainElementContainer1.classList.add("paused");
    mainElementSprite1.classList.add("dissolve");
    mainElementGif1.classList.remove("hidden");
    mainElementContainer1.addEventListener("animationend", goneMe1);
    incrementPoints();
}

//points/trace/slow down TIME ani

function goneMe1() {
    mainElementContainer1.removeEventListener("animationend", goneMe1)
    mainElementSprite1.classList.remove("dissolve");
    mainElementContainer1.classList.remove("paused");
    mainElementContainer1.classList.remove("move_center1");
    mainElementContainer1.offsetWidth;
    mainElementGif1.classList.add("hidden");
    mainElementContainer1.classList.add("move_center1");
    mainElementContainer1.addEventListener("click", clickMe1);
}

function clickMe2() {
    console.log("click me2");
    mainElementContainer2.removeEventListener("click", goneMe2);
    mainElementContainer2.classList.add("paused");
    mainElementSprite2.classList.add("dissolve");
    mainElementGif2.classList.remove("hidden");
    mainElementContainer2.addEventListener("animationend", goneMe2);
    incrementPoints();
}

//points/trace/slow down TIME ani

function goneMe2() {
    mainElementContainer2.removeEventListener("animationend", goneMe2)
    mainElementSprite2.classList.remove("dissolve");
    mainElementContainer2.classList.remove("paused");
    mainElementContainer2.classList.remove("move_center2");
    mainElementContainer2.offsetWidth;
    mainElementGif2.classList.add("hidden");
    mainElementContainer2.classList.add("move_center2");
    mainElementContainer2.addEventListener("click", clickMe2);
}

function clickMe3() {
    console.log("click me3");
    mainElementContainer3.removeEventListener("click", goneMe3);
    mainElementContainer3.classList.add("paused");
    mainElementSprite3.classList.add("dissolve");
    mainElementGif3.classList.remove("hidden");
    mainElementContainer3.addEventListener("animationend", goneMe3);
    incrementPoints();
}

//points/trace/slow down TIME ani

function goneMe3() {
    mainElementContainer3.removeEventListener("animationend", goneMe3)
    mainElementSprite3.classList.remove("dissolve");
    mainElementContainer3.classList.remove("paused");
    mainElementContainer3.classList.remove("move_center3");
    mainElementContainer3.offsetWidth;
    mainElementGif3.classList.add("hidden");
    mainElementContainer3.classList.add("move_center3");
    mainElementContainer3.addEventListener("click", clickMe3);
}

function clickMe4() {
    console.log("click me4");
    mainElementContainer4.removeEventListener("click", goneMe4);
    mainElementContainer4.classList.add("paused");
    mainElementSprite4.classList.add("dissolve");
    mainElementGif4.classList.remove("hidden");
    mainElementContainer4.addEventListener("animationend", goneMe4);
    incrementPoints();
}
//points/trace/slow down TIME ani

function goneMe4() {
    mainElementContainer4.removeEventListener("animationend", goneMe4)
    mainElementSprite4.classList.remove("dissolve");
    mainElementContainer4.classList.remove("paused");
    mainElementContainer4.classList.remove("move_center4");
    mainElementContainer4.offsetWidth;
    mainElementGif4.classList.add("hidden");
    mainElementContainer4.classList.add("move_center4");
    mainElementContainer4.addEventListener("click", clickMe4);
}

function clickBe1() {
    console.log("click be1")
    badElementContainer1.removeEventListener("click", clickBe1);
    badElementContainer1.classList.add("paused");
    badElementSprite1.classList.add("dissolve_up");
    badElementGif1.classList.remove("hidden");
    badElementContainer1.addEventListener("animationend", goneBe1);
    decrementLives();
}
//trace/decrement lives/speedup animation TIME

function goneBe1() {
    badElementContainer1.removeEventListener("animationend", goneBe1);
    badElementSprite1.classList.remove("dissolve_up");
    badElementContainer1.classList.remove("paused");
    badElementContainer1.classList.remove("move_across1");
    badElementContainer1.offsetWidth;
    badElementGif1.classList.add("hidden");
    badElementContainer1.classList.add("move_across1")
    badElementContainer1.addEventListener("click", clickBe1);
}

function clickBe2() {
    console.log("click be2")
    badElementContainer2.removeEventListener("click", clickBe2);
    badElementContainer2.classList.add("paused");
    badElementSprite2.classList.add("dissolve_up");
    badElementGif2.classList.remove("hidden");
    badElementContainer2.addEventListener("animationend", goneBe2);
    decrementLives();
}

//trace/decrement lives/speedup animation TIME

function goneBe2() {
    badElementContainer2.removeEventListener("animationend", goneBe2);
    badElementSprite2.classList.remove("dissolve_up");
    badElementContainer2.classList.remove("paused");
    badElementContainer2.classList.remove("move_across2");
    badElementContainer2.offsetWidth;
    badElementGif2.classList.add("hidden");
    badElementContainer2.classList.add("move_across2")
    badElementContainer2.addEventListener("click", clickBe2);
}

function clickBe3() {
    console.log("click be3")
    badElementContainer3.removeEventListener("click", clickBe3);
    badElementContainer3.classList.add("paused");
    badElementSprite3.classList.add("dissolve_up");
    badElementGif3.classList.remove("hidden");
    badElementContainer3.addEventListener("animationend", goneBe3);
    decrementLives();
}

//trace/decrement lives/speedup animation TIME

function goneBe3() {
    badElementContainer3.removeEventListener("animationend", goneBe3);
    badElementSprite3.classList.remove("dissolve_up");
    badElementContainer3.classList.remove("paused");
    badElementContainer3.classList.remove("move_across3");
    badElementContainer3.offsetWidth;
    badElementGif3.classList.add("hidden");
    badElementContainer3.classList.add("move_across3")
    badElementContainer3.addEventListener("click", clickBe3);
}

function clickBe4() {
    console.log("click be4")
    badElementContainer4.removeEventListener("click", clickBe4);
    badElementContainer4.classList.add("paused");
    badElementSprite4.classList.add("dissolve_up");
    badElementGif4.classList.remove("hidden");
    badElementContainer4.addEventListener("animationend", goneBe4);
    decrementLives();
}


//trace/decrement lives/speedup animation TIME

function goneBe4() {
    badElementContainer4.removeEventListener("animationend", goneBe4);
    badElementSprite4.classList.remove("dissolve_up");
    badElementContainer4.classList.remove("paused");
    badElementContainer4.classList.remove("move_across4");
    badElementContainer4.offsetWidth;
    badElementGif4.classList.add("hidden");
    badElementContainer4.classList.add("move_across4")
    badElementContainer4.addEventListener("click", clickBe4);
}

//////

function incrementPoints(){
    console.log("increment points");
    points++;
    console.log("har nu " + points + " points"); 
    displayPoints();
    if (points >= 3){
        levelComplete();
    }
}

function displayPoints(){
    console.log("show points")
    elementCount.textContent = points;
}

function decrementLives(){
    console.log("decrement lives");
    if (lives <= 1) {
        gameOver();
    }
    displayDecrementedLives();
    lives--;
}

function displayDecrementedLives(){
    console.log("decrement lives");
    document.querySelector("#life"+lives).classList.remove("active_life");
    document.querySelector("#life"+lives).classList.add("broken_life");
}

function gameOver(){
    console.log("game over");
    document.querySelector("#game_over").classList.remove("hidden");
    stop();
}

function levelComplete(){
    console.log("level complete");
    document.querySelector("#level_complete").classList.remove("hidden");
    stop();
}

function stop() {
    console.log("animation stop");

    mainElementContainer1.classList.remove("move_center1");
    mainElementContainer2.classList.remove("move_center2");
    mainElementContainer3.classList.remove("move_center3");
    mainElementContainer4.classList.remove("move_center4");

    mainElementContainer1.classList.add("hidden");
    mainElementContainer2.classList.add("hidden");
    mainElementContainer3.classList.add("hidden");
    mainElementContainer4.classList.add("hidden");

    badElementContainer1.classList.remove("move_across1");
    badElementContainer2.classList.remove("move_across2");
    badElementContainer3.classList.remove("move_across3");
    badElementContainer4.classList.remove("move_across4");

    badElementContainer1.classList.add("hidden");
    badElementContainer2.classList.add("hidden");
    badElementContainer3.classList.add("hidden");
    badElementContainer4.classList.add("hidden");

    mainCharContainer1.classList.add("hidden");
    mainCharContainer2.classList.add("hidden");
    mainCharContainer3.classList.add("hidden");

}

// const mainCharContainer1 = document.querySelector("#main_char_container1");
// const mainCharContainer2 = document.querySelector("#main_char_container2");
// const mainCharContainer3 = document.querySelector("#main_char_container3");

// const mainCharSprite1 = document.querySelector("#main_sprite_container1");
// const mainCharSprite2 = document.querySelector("#main_sprite_container2");
// const mainCharSprite3 = document.querySelector("#main_sprite_container3");


