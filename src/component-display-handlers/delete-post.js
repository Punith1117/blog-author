import { deletePostQuery } from "../apiQueries"
import { getJwt } from "../utilities"
import { handleLoginDisplay } from "./login"
import { handlePostsDisplay } from "./posts"

export const handleDeletePost = async (id, isPublished) => {
    const jwt = getJwt()
    try {
        await deletePostQuery(jwt, id)
        await handlePostsDisplay(isPublished)
    } catch (e) {
        if(e.message == 401)
            handleLoginDisplay('Session expired after 2min. Login again')
    }
}