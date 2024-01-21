

let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Section d'erreur
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')
    // Je vide les erreurs avant la nouvelle verification et recache le message
    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')

    // Elements du formulaire
    let email = document.querySelector('#email')

    // Verif email
    if(email.value == '') {
        // Je rend visible la zone d'erreur et enleve le succes du mail s'il a existé
        errorContainer.classList.add('visible')
        email.classList.remove('message-success')

        // Creation du message d'erreur
        let err = document.createElement('li')
        err.innerText = "Le champ email ne peut pas être vide"

        // Ajout au container
        errorList.appendChild(err)
    } else {
        // Je met l'email en succès
        email.classList.add('message-success')
    }

    // Verif le pseudo
    let pseudo = document.querySelector('#pseudo')

    if(pseudo.value.length < 6) {
        // Je rend visible la zone d'erreur et enleve le succes du pseudo s'il a existé
        errorContainer.classList.add('visible')
        pseudo.classList.remove('message-success')

        // Création du message d'erreur
        let err = document.createElement('li')
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"

        // Ajout au container
        errorList.appendChild(err)
    } else {
        // Je met le pseudo en succès
        pseudo.classList.add('message-success')
    }

    // Verif mdp
    let password = document.querySelector('#password')
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    // Si le mdp n'a pas 10 caractères on ne respecte pas la regex
    if(password.value.length < 10 || passCheck.test(password.value) == false) {
        // Je rend visible la zone d'erreur et enleve le succes du pseudo s'il a existé
        errorContainer.classList.add('visible')
        password.classList.remove('message-success')

        // Création du message d'erreur
        let err = document.createElement('li')
        err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"

        // Ajout au container
        errorList.appendChild(err)
    } else {
        password.classList.add('message-success')
    }

    // Verif 2 mdp identique
    let passwordInitial = document.querySelector('#password')
    let passwordRepeat = document.querySelector('#password2')

    if(passwordInitial.value != passwordRepeat.value) {
        // Je rend visible la zone d'erreur et enleve le succes du mdp s'il a existé
        errorContainer.classList.add('visible')
        passwordRepeat.classList.remove('message-success')

        // Création du message d'erreur
        let err = document.createElement('li')
        err.innerText = "Les mots de passes sont différents"

        // Ajout au container
        errorList.appendChild(err)
    } else {
        passwordRepeat.classList.add('message-success')
    }

    let succesContainer = document.querySelector('.message-success')
    succesContainer.classList.remove('visible')

    if (
        pseudo.classList.contains('message-success') &&
        email.classList.contains('message-success') &&
        password.classList.contains('message-success') &&
        passwordRepeat.classList.contains('message-success')
    ) {
        succesContainer.innerHTML = "Formulaire envoyé !"
        succesContainer.classList.add('visible')
    }
})