const handleGetTotal = () => {
    const total = localStorage.getItem("total"),
        container = document.querySelector('.container');

    document.querySelector(".total").innerText = total

    document.querySelector('.total')
        .style.fontSize = `${container.clientHeight / 4.7}px`

        document.querySelector('.intentos')
        .style.fontSize = `${container.clientHeight / 18.7}px`

    const lives = parseInt(localStorage.getItem('lives'))

    if (lives - 1 === 0) {
        document.querySelector('.intentos')
            .innerText = `Te quedan 0 intentos`

        localStorage.removeItem('lives');
        localStorage.setItem('block', new Date())
    } else {
        localStorage.setItem('lives', (lives - 1).toString())

        if (lives - 1 === 1) {
            document.querySelector('.intentos')
            .innerText = `Te quedan ${lives - 1} intento`
        } else {
            document.querySelector('.intentos')
            .innerText = `Te quedan ${lives - 1} intentos`
        }
    }

    localStorage.removeItem('responses')
    localStorage.removeItem('total')

}

document.addEventListener('DOMContentLoaded', handleGetTotal)