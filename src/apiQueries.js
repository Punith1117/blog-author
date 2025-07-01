export const loginQuery = async (username, password) => {
    const responseObject = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(res => {
        if (!res.ok) {
            throw new Error('Invalid credentials')
        }
        return res.json()
    })
    return responseObject
}

export const signupQuery = async (username, password) => {
    await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(res => {
        if (!res.ok)
            throw new Error('Something went wrong')
    })
}

export const getPostsQuery = async (jwt, isPublished) => {
    const responseObject = await fetch(`http://localhost:3000/user/me/post?isPublished=${isPublished}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => {
        if (!res.ok)
            throw new Error(res.status)
        return res.json()
    })
    return responseObject
}

export const getPostQuery = async (jwt, id) => {
    const responseObject = await fetch(`http://localhost:3000/user/me/post/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => {
        if (!res.ok)
            throw new Error(res.status)
        return res.json()
    })
    return responseObject
}

export const modifyPostQuery = async (jwt, id, postDetails) => {
    const {title, content, isPublished} = postDetails
    await fetch(`http://localhost:3000/user/me/post/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content,
            isPublished
        })
    }).then(res => {
        if (!res.ok)
            throw new Error(res.status)
    })
}

export const newPostQuery = async (jwt, postDetails) => {
    const {title, content, isPublished} = postDetails
    await fetch(`http://localhost:3000/user/me/post/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content,
            isPublished
        })
    }).then(res => {
        if (!res.ok)
            throw new Error(res.status)
    })
}

export const deletePostQuery = async (jwt, id) => {
    await fetch(`http://localhost:3000/user/me/post/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${jwt}` 
        }
    }).then(res => {
        if (!res.ok)
            throw new Error(res.status)
    })
}