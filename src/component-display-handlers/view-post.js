import { getPostQuery } from "../apiQueries"
import { header } from "../components/header"
import { nav } from "../components/nav"
import { viewPost } from "../components/view-post"
import { getJwt, getUsername } from "../utilities"
import { handleLoginDisplay } from "./login"

export const handleViewPost = async (id) => {
    const jwt = getJwt()
    let post
    try {
        const object = await getPostQuery(jwt, id)
        post = object.posts
    } catch (e) {
        if (e.message == 401)  {
            handleLoginDisplay('Session expired after 2min. Login again')
            return
        }
    }
    let body = document.querySelector('body')
    body.replaceChildren(header(getUsername()), nav(post.isPublished), viewPost(post))
}