import { handleLoginDisplay } from "./component-display-handlers/login";
import { handlePostsDisplay } from "./component-display-handlers/posts";
import "./styles/reset.css";
import "./styles/header.css";
import "./styles/nav.css";
import "./styles/posts.css";
import { getJwt } from "./utilities";

export const initialRenderLogic = () => {
    if (getJwt() == null) {
        handleLoginDisplay()
    } else {
        handlePostsDisplay(false)
    }
}

initialRenderLogic()