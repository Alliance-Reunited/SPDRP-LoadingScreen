/**
 * Texts to randomly display while loading.
 */
const texts = [
    `Cartman: “I am NOTHING like Family Guy! When I make jokes they are inherent to a story! Deep situational and emotional jokes based on what is relevant and has a point, not just one random interchangeable joke after another!”`,
    `“I am a cop, and you will respect my authoritah!” – Cartman`,
    `“Don’t you dare call me a Cartman!” – Stan`,
    `“Don’t lie, Stan. Lying makes you sterile.” – Mr. Garrison`,
    `“I’m not fat, I’m festively plump.” –Cartman`,
    `“Drugs are bad, mmkay?” –Mr. Mackey`,
    `“All animals kill, and the animals that don’t kill are stupid ones like cows and turtles and stuff.” –Kyle`,
    `“Screw you guys, I’m going home!” –Cartman`,
    `“Hell, everything’s legal in Mexico. It’s the American way!” –Jimbo`
];

/**
 * Backgrounds to randomly display while loading.
 */
const backgrounds = [
    `assets/img/background.jpg`,
    `assets/img/background2.jpg`,
    `assets/img/background3.jpg`,
    `assets/img/background4.jpg`,
    `assets/img/background5.jpg`,
    `assets/img/background6.jpg`
];

let curText = ``;
let curLetter = ``;

let textIndex = 0;
let letterIndex = 0;
let backgroundIndex = 0;

/**
 * Type out the current text.
 */
const type = () => {
    if (textIndex === texts.length) textIndex = 0;

    curText = texts[textIndex];
    curLetter = curText.slice(0, ++letterIndex);

    document.querySelector(`.tips`).textContent = curLetter;

    if (letter.length === currentText.length) {
        textIndex++;
        letterIndex = 0;

        setTimeout(type, 1e3);
        return;
    }

    setTimeout(type, 50);
};

/**
 * Cycle through the current background.
 */
const cycleBackground = () => {
    if (backgroundIndex === backgrounds.length) backgroundIndex = 0;

    document.body.style.background = `#f3f3f3 url('${backgrounds[backgroundIndex]}') no-repeat center center fixed`;
    document.body.style[`background-size`] = `cover`;

    backgroundIndex++;
};

// Initialize.
window.onload = () => {
    type();
    cycleBackground();

    setInterval(cycleBackground, 7e3);
};
