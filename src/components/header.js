export let header = (username) => {
    let header = document.createElement('header')
        let h1 = document.createElement('h1')
        h1.textContent = 'Blog Author'
        let websiteAuthor = document.createElement('a')
        websiteAuthor.href = 'https://github.com/Punith1117/blog-author'
        websiteAuthor.textContent = 'By Punith1117'
        let userGreeting
        if (username != undefined) {
            userGreeting = document.createElement('h2')
            userGreeting.textContent = 'Welcome, ' + username
        }
    header.appendChild(h1)
    header.appendChild(websiteAuthor)
    if (username != undefined)
        header.appendChild(userGreeting)
    return header
}