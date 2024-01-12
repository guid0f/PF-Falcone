const signUp = document.getElementById('sign-up')
const signIn = document.getElementById('sign-in')
const signOut = document.getElementById('sign-out')

const user = JSON.parse(localStorage.getItem('user'))

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

const toggleClass = () => {
    if (user) {
        signUp.classList.add('d-none')
        signIn.classList.add('d-none')
        signOut.classList.remove('d-none')
        signOut.classList.add('d-flex')
        Toast.fire({
            icon: "success",
            title: "Inicio"
        });
    } else {
        signUp.classList.remove('d-none')
        signIn.classList.remove('d-none')
        signOut.classList.add('d-none')
        signOut.classList.remove('d-flex')
    }
}

window.addEventListener('load', () => {
    toggleClass()
})

const userSignOut = () => {
    localStorage.removeItem('user')
    toggleClass()
    Toast.fire({
        icon: "warning",
        title: "Cerrando Sesion"
    });
    setTimeout(() => {
        window.location.reload()
    }, 1500);
}

signOut.addEventListener('click', () => {
    userSignOut()
})