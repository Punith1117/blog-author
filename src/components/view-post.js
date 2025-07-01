import { handleDeletePost } from "../component-display-handlers/delete-post"
import { handleNewEditPost } from "../component-display-handlers/new-edit-post"
import { handlePostsDisplay } from "../component-display-handlers/posts"

export const viewPost = (post) => {
    let main = document.createElement('main')
    main.dataset.id = post.id
        let title = document.createElement('h3')
        title.textContent = post.title
        let content = document.createElement('p')
        content.innerHTML = post.content
        let publishStatus = document.createElement('p')
        publishStatus.textContent = 'Publish Status: ' + post.isPublished
        let utilities = document.createElement('div')
            let editButton = document.createElement('button')
            editButton.textContent = 'edit'
            editButton.addEventListener('click', () => handleNewEditPost(post.id))
            let deleteButton = document.createElement('button')
            deleteButton.textContent = 'delete'
            deleteButton.addEventListener('click', () => handleDeletePost(post.id, post.isPublished))
            let backButton = document.createElement('button')
            backButton.textContent = 'back'
            backButton.addEventListener('click', () => handlePostsDisplay(post.isPublished))
        utilities.appendChild(editButton)
        utilities.appendChild(deleteButton)
        utilities.appendChild(backButton)
    main.appendChild(title)
    main.appendChild(content)
    main.appendChild(utilities)
    return main
}