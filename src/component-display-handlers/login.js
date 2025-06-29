import { header } from "../components/header"
import { login } from "../components/login"

export const handleLoginDisplay = async (message) => {
    let body = document.querySelector('body')
    body.replaceChildren(header(), login(message))
}