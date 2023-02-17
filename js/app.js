// -------------------- Start DarkMode Handle -------------------- //
var moon = document.querySelector('.moon')
var sun = document.querySelector('.sun')

if (localStorage.darkMode === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.setItem('darkMode', 'true')
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    moon.classList.add('hidden')
} else {
    localStorage.setItem('darkMode', 'false')
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    sun.classList.add('hidden')
}

function darkMode() {
    return {
        makeDark() {
            if (localStorage.darkMode === 'false') {
                localStorage.darkMode = 'true'
                document.documentElement.classList.remove('light')
                document.documentElement.classList.add('dark')
                moon.classList.add('hidden')
                sun.classList.remove('hidden')
                sun.classList.add('block')
            }
        },

        makeLight() {
            if (localStorage.darkMode === 'true') {
                localStorage.darkMode = 'false'
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
                sun.classList.add('hidden')
                moon.classList.remove('hidden')
                moon.classList.add('block')
            }
        }
    }
}
        // -------------------- End DarkMode Handle -------------------- //