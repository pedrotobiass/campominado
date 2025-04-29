const canvas = document.querySelector('#campominado')

/** @type {undefined|WebGL2RenderingContext} */
const gl = canvas.getContext('webgl2')

const p = document.querySelector('#gl')

if(!gl) {
    alert('Your browser does not support webgl')
} else {
    p.innerText = 'Using webgl2'
}