import { header } from "./components/header";
import { login } from "./components/login";
import "./reset.css";
import "./style.css";
import { getJwtFromStorage } from "./utilities";

export const initialRenderLogic = () => {
    let body = document.querySelector('body')
    if (getJwtFromStorage() == null) {
        body.replaceChildren(header(), login())
    }
}

initialRenderLogic()