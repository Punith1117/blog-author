import { handlePostsDisplay } from "../component-display-handlers/posts"

export const newEditPostForm = (formData) => {
    let form = document.createElement('form')
    form.className = 'post'
        let heading = document.createElement('h1')
        heading.textContent = 'New post'
        let titleLabel = document.createElement('label')
        titleLabel.textContent = 'Title: '
            let title = document.createElement('input')
            title.type = 'text'
            title.required = 'true'
            title.name = 'title'
        titleLabel.appendChild(title)
        let content = document.createElement('div')
        content.className = 'content'
        let options = document.createElement('div')
        options.textContent = 'Publish Status: '
            let trueOptionLabel = document.createElement('label')
            trueOptionLabel.textContent = 'True'
                let trueOption = document.createElement('input')
                trueOption.type = 'radio'
                trueOption.name = 'isPublished'
                trueOption.value = true
            trueOptionLabel.appendChild(trueOption)
            let falseOptionLabel = document.createElement('label')
            falseOptionLabel.textContent = 'False'
                let falseOption = document.createElement('input')
                falseOption.type = 'radio'
                falseOption.name = 'isPublished'
                falseOption.value = false
            falseOptionLabel.appendChild(falseOption)
        options.appendChild(trueOptionLabel)
        options.appendChild(falseOptionLabel)
        let cancelButton = document.createElement('button')
        cancelButton.textContent = 'Cancel'
        cancelButton.type = 'button'
        cancelButton.addEventListener('click', () => handlePostsDisplay(formData?.isPublished))
        let submitButton = document.createElement('button')
        submitButton.textContent = 'Submit'
        submitButton.type = 'submit'
        if (formData != undefined) {
            form.dataset.postId = formData.id
            heading.textContent = 'Edit Post'
            title.value = formData.title
            content.value = formData.content
            if (formData.isPublished == true)
                trueOption.checked = true
            else
                falseOption.checked = true
        }
    form.appendChild(heading)
    form.appendChild(titleLabel)
    form.appendChild(content)
    form.appendChild(options)
    form.appendChild(cancelButton)
    form.appendChild(submitButton)
    return form
}