async function main() {
    await import('./canvas.js')
}

window.addEventListener('DOMContentLoaded', async() => {
    try {
        await main()
    } catch(error) {
        const tag = document.createElement('p')

        tag.innerText = error.message

        document.body.appendChild(tag)
    }
})