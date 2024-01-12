const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const age = document.getElementById('age')
const password = document.getElementById('password')
const nationality = document.getElementById('nationality')
const buttonForm = document.getElementById('button-form')

const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name")
    const countriesResponse = await response.json()
    return countriesResponse
}

window.addEventListener('load', async () => {
    const countries = await getCountries()
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common)).forEach((country) => {
        nationality.innerHTML += `<option value=${country.name.common}>${country.name.common}</option>`
    })
})

const register = () => {
    getCountries()

    const newUser = {
        fullname: fullname.value,
        email: email.value,
        age: age.value,
        nationality: nationality.value,
        password: password.value,
    }

    const users = JSON.parse(localStorage.getItem('users'))
    
    if (users) {
        localStorage.setItem('users', JSON.stringify([...users, newUser])) 
    } else {
        localStorage.setItem('users', JSON.stringify([newUser]))
    }
    window.location.href = "iniciar-sesion.html"
}

buttonForm.addEventListener('click', (e) => {
    e.preventDefault()
    register()
})