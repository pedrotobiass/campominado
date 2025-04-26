function main() {
    const canvas = document.querySelector('#campominado')
    const ctx = canvas.getContext('2d')
    ctx.font = '20px Arial'
    ctx.fillText('Ola, Mundo!', canvas.width / 2, canvas.height / 2)
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