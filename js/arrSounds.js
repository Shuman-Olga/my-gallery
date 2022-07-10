import {nameElement} from './nameElement.js'

export function arrSounds (element, div) {
    let src = element.default;
    let audio = new Audio(src);
    div.appendChild(audio)
    audio.setAttribute("controls","controls");
    nameElement(src,div)
}