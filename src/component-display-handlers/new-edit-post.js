import { getPostQuery, modifyPostQuery, newPostQuery } from "../apiQueries"
import { newEditPostForm } from "../components/new-edit-post-form"
import { getJwt } from "../utilities"
import { handleLoginDisplay } from "./login"
import Quill from "quill"
import 'quill/dist/quill.snow.css'
import DOMPurify from 'dompurify'
import { handlePostsDisplay } from "./posts"
import { displayLoading } from "../components/loading"

export const handleNewEditPost = async (id) => {
    let nav = document.querySelector('nav')
    let nextChild = nav.nextSibling
    nav.parentNode.removeChild(nextChild)
    let body = nav.parentNode
    if (id == undefined) {
        body.appendChild(newEditPostForm())
        const quill = new Quill('.content', {
            theme: 'snow'
        })
        let form = document.querySelector('form')
        form.addEventListener('submit', (e) => handleSubmit(e, undefined, quill))
    } else {
        const jwt = getJwt()
        let object, post
        try {
            object = await getPostQuery(jwt, id)
            post = object.posts
            body.appendChild(newEditPostForm(post))
            const quill = new Quill('.content', {
                theme: 'snow'
            })
            quill.root.innerHTML = post.content
            let form = document.querySelector('form')
            form.addEventListener('submit', (e) => handleSubmit(e, id, quill))
        } catch (e) {
            if (e.message == 401) {
                handleLoginDisplay('Session expired after 2min. Login again')
            }
        }
    }
}

export const handleSubmit = async (e, id, quill) => {
    e.preventDefault()
    const form = e.target
    displayLoading()
    const title = form.elements['title'].value
    const content = DOMPurify.sanitize(quill.root.innerHTML, {
        ALLOWED_TAGS: ['b', 'em', 'i', 'strong', 'br', 'hr', 's', 'u']
    })
    const isPublished = (form.elements['isPublished'].value == 'true') ? true : false
    const jwt = getJwt()
    const formDetails = {
        title,
        content,
        isPublished
    }
    try {
        if (id == undefined)
            await newPostQuery(jwt, formDetails)
        else
            await modifyPostQuery(jwt, id, formDetails)
    } catch (e) {
        if (e.message == 401)
            handleLoginDisplay('Session expired after 2min. Login again')
        return
    }
    await handlePostsDisplay(isPublished)
}