import { handleLoginDisplay } from "./component-display-handlers/login";
import { handlePostsDisplay } from "./component-display-handlers/posts";
import "./reset.css";
import "./style.css";
import { getJwt } from "./utilities";

export const initialRenderLogic = () => {
    if (getJwt() == null) {
        handleLoginDisplay()
    } else {
        handlePostsDisplay(false)
    }
}

initialRenderLogic()