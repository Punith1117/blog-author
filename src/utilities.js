export const getJwtFromStorage = () => {
    const token = localStorage.getItem('jwt')
    return token
}