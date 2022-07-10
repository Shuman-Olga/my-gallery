import {arrImges} from './arrImges.js'
import {arrSounds} from './arrSounds.js'
import {arrVideos} from './arrVideos.js'

export function itemReceive(reqArray) {
    for (const item in reqArray) {
        const div = document.createElement('div')
        div.classList.add('gallery__item')
        document.getElementById('gallery').appendChild(div)
        const p = document.createElement('p')
        const element = reqArray[item];
        console.log(item.split("/").pop().split('.')[1])
        if (item.split("/").pop().split('.')[1] ==="jpg") {
            arrImges(element, div)
        } else if (item.split("/").pop().split('.')[1] ==="mp3") {
            arrSounds(element, div)
        } else if (item.split("/").pop().split('.')[1] ==="mp4") {
            arrVideos(element, div)
        }
      }
}