import { loginQuery } from "../apiQueries"
import { handleLoginDisplay } from "../component-display-handlers/login"
import { handlePostsDisplay } from "../component-display-handlers/posts"
import { destroyJwt, destroyUsername, saveJwt, saveUsername } from "../utilities"
import { header } from "./header"
import { displayLoading } from "./loading"
import { signup } from "./signup"

export const login = (error) => {
    let loginForm = document.createElement('form')
    loginForm.className = 'login-signup'
        let heading = document.createElement('h3')
        heading.textContent = 'Login'

        let errorMessage = document.createElement('p')
        errorMessage.textContent = error
        let usernameLabel = document.createElement('label')
        usernameLabel.textContent = 'Username:'
            let username = document.createElement('input')
            username.type = 'text'
            username.name = 'username'
            username.required = 'true'
        usernameLabel.appendChild(username)
            let passwordLabel = document.createElement('label')
            passwordLabel.textContent = 'Password:'
            let password = document.createElement('input')
            password.type = 'password'
            password.name = 'password'
            password.required = 'true'
        passwordLabel.appendChild(password)

        let submit = document.createElement('button')
        submit.type = 'submit'
        submit.textContent = 'Login'
        let signupButton = document.createElement('button')
        signupButton.textContent = 'Sign up'
        signupButton.addEventListener('click', () => handleSignupFormDisplay())
    loginForm.appendChild(heading)
    loginForm.appendChild(errorMessage)
    loginForm.appendChild(usernameLabel)
    loginForm.appendChild(passwordLabel)
    loginForm.appendChild(submit)
    loginForm.appendChild(signupButton)
    loginForm.addEventListener('submit', handleFormSubmit)
    return loginForm
}

const handleFormSubmit = async (e) => {
    e.preventDefault()
    const form = document.querySelector('form')
    displayLoading()
    const username = form.elements['username'].value
    const password = form.elements['password'].value
    try {
        const responseObject = await loginQuery(username, password)
        saveJwt(responseObject.token)
        saveUsername(responseObject.user.username)
        handlePostsDisplay(false)
    } catch(e) {
        destroyJwt()
        destroyUsername()
        console.warn(e.message)
        handleLoginDisplay(e.message)
    }
}

const handleSignupFormDisplay = () => {
    const body = document.querySelector('body')
    body.replaceChildren(header(), signup())
}