import { handleLoginDisplay } from "../component-display-handlers/login"
import { destroyJwt, destroyUsername } from "../utilities"

export let header = (username) => {
    let header = document.createElement('header')
        let h1 = document.createElement('h1')
        h1.textContent = 'Blog Author'
        let websiteAuthor = document.createElement('a')
        websiteAuthor.href = 'https://github.com/Punith1117/blog-author'
        websiteAuthor.textContent = 'By Punith1117'
        let userGreeting
        let logoutButton
        if (username != undefined) {
            userGreeting = document.createElement('h2')
            userGreeting.textContent = 'Welcome, ' + username
            logoutButton = document.createElement('button')
            logoutButton.addEventListener('click', () => handleLogOut())
            logoutButton.textContent = 'Logout'
        }
    header.appendChild(h1)
    header.appendChild(websiteAuthor)
    if (username != undefined){
        header.appendChild(userGreeting)
        header.appendChild(logoutButton)
    }
    return header
}

const handleLogOut = async () => {
    destroyJwt()
    destroyUsername()
    await handleLoginDisplay()
}