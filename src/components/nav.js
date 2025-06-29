export const nav = () => {
    const navbar = document.createElement('nav')
        const publishedPostsButton = document.createElement('button')
        publishedPostsButton.textContent = 'Published Posts'
        const unpublishedPostsButton = document.createElement('button')
        unpublishedPostsButton.textContent = 'Unpublished Posts'
        const newPostButton = document.createElement('button')
        newPostButton.textContent = 'New'
    navbar.appendChild(publishedPostsButton)
    navbar.appendChild(unpublishedPostsButton)
    navbar.appendChild(newPostButton)
    return navbar
}