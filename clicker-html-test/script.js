"use strict"

const mainCharContainer1 = document.querySelector("#main_char_container1");
const mainCharContainer2 = document.querySelector("#main_char_container2");
const mainCharContainer3 = document.querySelector("#main_char_container3");

const mainSpriteContainer1 = document.querySelector("#main_sprite_container1");
const mainSpriteContainer2 = document.querySelector("#main_sprite_container2");
const mainSpriteContainer3 = document.querySelector("#main_sprite_container3");

const mainElementContainer1 = document.querySelector("#main_element_container1");
const mainElementContainer2 = document.querySelector("#main_element_container2");
const mainElementContainer3 = document.querySelector("#main_element_container3");
const mainElementContainer4 = document.querySelector("#main_element_container4");

const mainElementSprite1 = document.querySelector("#main_element_sprite1");
const mainElementSprite2 = document.querySelector("#main_element_sprite2");
const mainElementSprite3 = document.querySelector("#main_element_sprite3");
const mainElementSprite4 = document.querySelector("#main_element_sprite4");

const badElementContainer1 = document.querySelector("#bad_element_container1");
const badElementContainer2 = document.querySelector("#bad_element_container2");
const badElementContainer3 = document.querySelector("#bad_element_container3");
const badElementContainer4 = document.querySelector("#bad_element_container4");

const badElementSprite1 = document.querySelector("#bad_element_sprite1");
const badElementSprite2 = document.querySelector("#bad_element_sprite2");
const badElementSprite3 = document.querySelector("#bad_element_sprite3");
const badElementSprite4 = document.querySelector("#bad_element_sprite4");

window.addEventListener("load", start);

function start() {
    console.log("script running");
}

//ani start
mainElementContainer1.classList.add("move_center1");
mainElementContainer2.classList.add("move_center2");
mainElementContainer3.classList.add("move_center3");
mainElementContainer4.classList.add("move_center4");

badElementContainer1.classList.add("move_across1");
badElementContainer2.classList.add("move_across2");
badElementContainer3.classList.add("move_across3");
badElementContainer4.classList.add("move_across4");

//reg click

mainElementContainer1.classList.addEventListener("click", clickMe1);
mainElementContainer2.classList.addEventListener("click", clickMe2);
mainElementContainer3.classList.addEventListener("click", clickMe3);
mainElementContainer4.classList.addEventListener("click", clickMe4);

badElementContainer1.classList.addEventListener("click", clickBe1);
badElementContainer2.classList.addEventListener("click", clickBe2);
badElementContainer3.classList.addEventListener("click", clickBe3);
badElementContainer4.classList.addEventListener("click", clickBe4);




