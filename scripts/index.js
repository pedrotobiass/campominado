import "./canvas.js"

function main() {
}

window.addEventListener('DOMContentLoaded', () => {
    try {
        main()
    } catch(error) {
        const tag = document.createElement('p')

        tag.innerText = error.message

        document.body.appendChild(tag)
    }
})