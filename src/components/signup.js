import { signupQuery } from "../apiQueries"
import { handleLoginDisplay } from "../component-display-handlers/login"
import { header } from "./header"

export const signup = (err) => {
    const form = document.createElement('form')
        const error = document.createElement('p')
        if (error != undefined) {
            error.textContent = err
        }
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
        cancelButton.addEventListener('click', () => handleLoginDisplay())
        const submitButton = document.createElement('button')
        submitButton.type = 'submit'
        submitButton.textContent = 'Submit'
    form.addEventListener('submit', (e) => handleSignup(e))
    form.appendChild(heading)
    form.appendChild(error)
    form.appendChild(usernameLabel)
    form.appendChild(passwordLabel)
    form.appendChild(cancelButton)
    form.appendChild(submitButton)
    return form
}

const handleSignup = async (e) => {
    e.preventDefault()
    const form = e.target
    const username = form.elements['username'].value
    const password = form.elements['password'].value
    try {
        await signupQuery(username, password)
        await handleLoginDisplay()
    } catch (e) {
        const body = document.querySelector('body')
        body.replaceChildren(header(), signup(e.message))
    }
}