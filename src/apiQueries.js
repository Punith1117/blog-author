export const loginQuery = async (username, password) => {
    const responseObject = fetch('http://localhost:3000/auth/login', {
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
            throw new Error('Invalid Credentials')
        }
        return res.json()
    })
    return responseObject
}