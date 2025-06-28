export let header = () => {
    let header = document.createElement('header')
        let h1 = document.createElement('h1')
        h1.textContent = 'Blog Author'
        let websiteAuthor = document.createElement('a')
        websiteAuthor.href = 'https://github.com/Punith1117/blog-author'
        websiteAuthor.textContent = 'By Punith1117'
    header.appendChild(h1)
    header.appendChild(websiteAuthor)
    return header
}