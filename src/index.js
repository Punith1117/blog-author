import { header } from "./components/header";
import { login } from "./components/login";
import "./reset.css";
import "./style.css";
import { getJwt } from "./utilities";

export const initialRenderLogic = () => {
    let body = document.querySelector('body')
    if (getJwt() == null) {
        body.replaceChildren(header(), login())
    }
}

initialRenderLogic()