import '../styles/main.scss'
import {reqArr} from './reqArr.js'
const reqImgs = require.context ( '../img', true, /\.(png|jpe?g|gif)$/ )
const reqSound = require.context ( '../sound', true, /\.mp3$/)
const reqVideo = require.context ( '../video', true, /\.(mov|mp4)$/)

window.onload = () => {
  reqArr(reqImgs)
  reqArr(reqSound)
  reqArr(reqVideo)
}
