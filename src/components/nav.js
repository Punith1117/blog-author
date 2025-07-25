import { handleNewEditPost } from "../component-display-handlers/new-edit-post"
import { handlePostsDisplay } from "../component-display-handlers/posts"

export const nav = (isPublished) => {
    const navbar = document.createElement('nav')
        const publishedPostsButton = document.createElement('button')
        publishedPostsButton.addEventListener('click', () => handlePostsDisplay(true))
        publishedPostsButton.textContent = 'Published Posts'
        const unpublishedPostsButton = document.createElement('button')
        unpublishedPostsButton.textContent = 'Unpublished Posts'
        unpublishedPostsButton.addEventListener('click', () => handlePostsDisplay(false))
        const newPostButton = document.createElement('button')
        newPostButton.textContent = 'New'
        newPostButton.addEventListener('click', () => {
            handleNewEditPost()
        })
    if (isPublished)
        publishedPostsButton.className = 'current-tab'
    else
        unpublishedPostsButton.className = 'current-tab'
    navbar.appendChild(publishedPostsButton)
    navbar.appendChild(unpublishedPostsButton)
    navbar.appendChild(newPostButton)
    return navbar
}