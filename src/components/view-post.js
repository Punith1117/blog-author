export const viewPost = (post) => {
    let main = document.createElement('main')
    main.dataset.id = post.id
        let title = document.createElement('h3')
        title.textContent = post.title
        let content = document.createElement('p')
        content.textContent = post.content
        let publishStatus = document.createElement('p')
        publishStatus.textContent = 'Publish Status: ' + post.isPublished
        let utilities = document.createElement('div')
            let editButton = document.createElement('button')
            editButton.textContent = 'edit'
            let deleteButton = document.createElement('button')
            deleteButton.textContent = 'delete'
            let backButton = document.createElement('button')
            backButton.textContent = 'back'
        utilities.appendChild(editButton)
        utilities.appendChild(deleteButton)
        utilities.appendChild(backButton)
    main.appendChild(title)
    main.appendChild(content)
    main.appendChild(utilities)
    return main
}