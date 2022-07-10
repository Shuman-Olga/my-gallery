import {nameElement} from './nameElement.js'

export function arrImges(element, div) {
    const img = document.createElement('img')
    img.src = element.default;
    let src = img.src;
    div.appendChild(img)
    nameElement(src,div)
}
