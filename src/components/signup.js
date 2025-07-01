export const signup = () => {
    const form = document.createElement('form')
        const heading = document.createElement('h3')
        heading.textContent = 'Sign up'
        const usernameLabel = document.createElement('label')
        usernameLabel.textContent = 'Username: '
            const username = document.createElement('input')
            username.type = 'text'
            username.name = 'username'
        usernameLabel.appendChild(username)
        const passwordLabel = document.createElement('label')
        passwordLabel.textContent = 'Password: '
            const password = document.createElement('input')
            password.type = 'password'
            password.name = 'password'
        passwordLabel.appendChild(password)
        const cancelButton = document.createElement('button')
        cancelButton.type = 'button'
        cancelButton.textContent = 'Cancel'
        const submitButton = document.createElement('button')
        submitButton.type = 'submit'
        submitButton.textContent = 'Submit'
    form.appendChild(heading)
    form.appendChild(usernameLabel)
    form.appendChild(passwordLabel)
    form.appendChild(cancelButton)
    form.appendChild(submitButton)
    return form
}