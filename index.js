function main() {
    throw new Error('Hello, World!')
}

window.addEventListener('DOMContentLoaded', () => {
    try {
        main()
    } catch(error) {
        const tag = document.createElement('p')

        tag.innerText = error.message
    }
})