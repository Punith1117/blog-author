import { getPostsQuery } from "../apiQueries"
import { header } from "../components/header"
import { nav } from "../components/nav"
import { userPosts } from "../components/posts"
import { getJwt, getUsername } from "../utilities"
import { handleLoginDisplay } from "./login"

export const handlePostsDisplay = async (isPublished) => {
    const jwt = getJwt()
    if (jwt == undefined)
        handleLoginDisplay()
    try {
        let { posts } = await getPostsQuery(jwt, isPublished)
        let body = document.querySelector('body')
        body.replaceChildren(header(getUsername()), nav(), userPosts(posts))
    } catch(e) {
        if (e.message == 401)
            handleLoginDisplay('Session expired after 2 min. Login again')
    }
}