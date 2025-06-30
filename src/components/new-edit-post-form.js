import { modifyPostQuery } from "../apiQueries"
import { handleLoginDisplay } from "../component-display-handlers/login"
import { handlePostsDisplay } from "../component-display-handlers/posts"
import { getJwt } from "../utilities"

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
        let contentLabel = document.createElement('label')
        contentLabel.textContent = 'Content: '
            let content = document.createElement('textarea')
            content.required = 'true'
            content.name = 'content'
        contentLabel.appendChild(content)
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
            form.addEventListener('submit', (e) => handleEditPost(e, formData.id))
        }
    form.appendChild(heading)
    form.appendChild(titleLabel)
    form.appendChild(contentLabel)
    form.appendChild(options)
    form.appendChild(cancelButton)
    form.appendChild(submitButton)
    return form
}

const handleEditPost = async (e, id) => {
    e.preventDefault()
    const form = e.target
    const title = form.elements['title'].value
    const content = form.elements['content'].value
    const isPublished = (form.elements['isPublished'].value == 'true') ? true : false
    const jwt = getJwt()
    const formDetails = {
        title,
        content,
        isPublished
    }
    try {
        await modifyPostQuery(jwt, id, formDetails)
    } catch (e) {
        if (e.message == 404)
            handleLoginDisplay('Session expired after 2min. Login again')
        return
    }
    setTimeout(async () => {// For reason unknown, the un-modified posts were fetched(The api and front end handles asynchronous code fine). To fix this, setTimeOut has been used
        await handlePostsDisplay(isPublished)
    }, 200)
}