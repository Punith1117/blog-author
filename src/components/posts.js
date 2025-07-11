import { handleDeletePost } from "../component-display-handlers/delete-post"
import { handleNewEditPost } from "../component-display-handlers/new-edit-post"
import { handleViewPost } from "../component-display-handlers/view-post"

export const userPosts = (posts) => {
    let main = document.createElement('main')
    main.className = 'posts'
    posts.forEach(postDetails => {
        let post = document.createElement('div')
        post.id = postDetails.id
        post.className = 'post'
            let title = document.createElement('h4')
            title.textContent = postDetails.title
            let content = document.createElement('p')
            content.innerHTML = postDetails.content
            let utilities = document.createElement('div')
            utilities.className = 'utilities'
                let viewButton = document.createElement('button')
                viewButton.textContent = 'view'
                viewButton.addEventListener('click', () => handleViewPost(postDetails.id))
                let editButton = document.createElement('button')
                editButton.textContent = 'edit'
                editButton.addEventListener('click', () => handleNewEditPost(postDetails.id))
                let deleteButton = document.createElement('button')
                deleteButton.className = 'delete'
                deleteButton.textContent = 'delete'
                deleteButton.addEventListener('click', () => handleDeletePost(postDetails.id, postDetails.isPublished))
            utilities.appendChild(viewButton)
            utilities.appendChild(editButton)
            utilities.appendChild(deleteButton)
        post.appendChild(title)
        post.appendChild(content)
        post.appendChild(utilities)
        main.appendChild(post)
    })
    return main
}