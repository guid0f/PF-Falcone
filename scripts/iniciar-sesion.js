const email = document.getElementById('email')
const password = document.getElementById('password')
const buttonForm = document.getElementById('button-form')

const login = () => {
    const user = {
        email: email.value,
        password: password.value,
    }

    const users = JSON.parse(localStorage.getItem('users'))

    const usuarioEncontrado = users.find((el) => user.email === el.email && user.password === el.password)

    if (usuarioEncontrado) {
        const stringify = JSON.stringify(user)
        localStorage.setItem("user", stringify)
        window.location.href = "../index.html"
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Usuario no encontrado',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
        })
    }
}

buttonForm.addEventListener('click', (e) => {
    e.preventDefault()
    login()
})