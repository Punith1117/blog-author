import { getPostsQuery } from "../apiQueries"
import { header } from "../components/header"
import { displayLoading } from "../components/loading"
import { nav } from "../components/nav"
import { userPosts } from "../components/posts"
import { getJwt, getUsername } from "../utilities"
import { handleLoginDisplay } from "./login"
import htmlTruncate from 'html-truncate'

export const handlePostsDisplay = async (isPublished) => {
    displayLoading()
    const jwt = getJwt()
    if (jwt == undefined)
        handleLoginDisplay()
    try {
        let { posts } = await getPostsQuery(jwt, isPublished)
        posts = posts.map(post => {
            return {
                ...post,
                content: htmlTruncate(post.content, 100)
            }
        })
        let body = document.querySelector('body')
        body.replaceChildren(header(getUsername()), nav(isPublished), userPosts(posts))
    } catch(e) {
        if (e.message == 401)
            handleLoginDisplay('Session expired after 2 min. Login again')
    }
}