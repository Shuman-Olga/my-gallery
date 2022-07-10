import {nameElement} from './nameElement.js'

export function arrVideos (element, div) {
    const video = document.createElement('video')
    video.setAttribute("controls","controls");
    video.src = element.default;
    let src = element.default;
    console.log(element.default);
    div.appendChild(video)
    nameElement(src,div)
}