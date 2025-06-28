export const login = () => {
    let loginForm = document.createElement('form')

        let heading = document.createElement('h3')
        heading.textContent = 'Login'

        let usernameLabel = document.createElement('label')
        usernameLabel.textContent = 'Username:'
            let username = document.createElement('input')
            username.type = 'text'
        usernameLabel.appendChild(username)

        let passwordLabel = document.createElement('label')
        passwordLabel.textContent = 'Password:'
            let password = document.createElement('input')
            password.type = 'password'
        passwordLabel.appendChild(password)

        let submit = document.createElement('button')
        submit.type = 'submit'
        submit.textContent = 'Login'
        let cancel = document.createElement('button')
        cancel.textContent = 'cancel'
    loginForm.appendChild(heading)
    loginForm.appendChild(usernameLabel)
    loginForm.appendChild(passwordLabel)
    loginForm.appendChild(cancel)
    loginForm.appendChild(submit)
    return loginForm
}