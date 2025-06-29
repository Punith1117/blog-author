export const userPosts = (posts) => {
    let main = document.createElement('main')
    posts.forEach(postDetails => {
        let post = document.createElement('div')
        post.id = postDetails.id
            let title = document.createElement('h4')
            title.textContent = postDetails.title
            let content = document.createElement('p')
            content.textContent = postDetails.content
            let utilities = document.createElement('div')
                let viewButton = document.createElement('button')
                viewButton.textContent = 'view'
                let editButton = document.createElement('button')
                editButton.textContent = 'edit'
                let deleteButton = document.createElement('button')
                deleteButton.textContent = 'delete'
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