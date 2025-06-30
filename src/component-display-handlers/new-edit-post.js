import { getPostQuery } from "../apiQueries"
import { newEditPostForm } from "../components/new-edit-post-form"
import { getJwt } from "../utilities"

export const handleNewEditPost = async (id) => {
    let nav = document.querySelector('nav')
    let nextChild = nav.nextSibling
    nav.parentNode.removeChild(nextChild)
    let body = nav.parentNode
    if (id == undefined) {
        body.appendChild(newEditPostForm())
    } else {
        const jwt = getJwt()
        let object, post
        try {
            object = await getPostQuery(jwt, id)
            post = object.posts
        } catch (e) {
            if (e.message == 401) {
                console.log('Login again')
            }
        }
        body.appendChild(newEditPostForm(post))
    }
}