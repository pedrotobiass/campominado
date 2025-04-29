const canvas = document.querySelector('#campominado')

/** @type {undefined|WebGL2RenderingContext} */
const gl = canvas.getContext('webgl2')

const span = document.querySelector('#gl')

if(!gl) {
    alert('Your browser does not support webgl')
} else {
    span.innerText = 'Using webgl2'
}