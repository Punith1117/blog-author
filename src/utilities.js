export const getJwt = () => {
    const token = localStorage.getItem('jwt')
    return token
}

export const saveJwt = (jwt) => {
    localStorage.setItem('jwt', jwt)
}

export const saveUsername = (username) => {
    localStorage.setItem('username', username)
}

export const getUsername = () => {
    return localStorage.getItem('username')
}

export const destroyJwt = () => {
    localStorage.removeItem('jwt')
}

export const destroyUsername = () => {
    localStorage.removeItem('username')
}