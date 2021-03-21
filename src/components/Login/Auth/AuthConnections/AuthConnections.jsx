import {reduxForm} from "redux-form";
import style from "./AuthConnections.module.scss";
import cn from "classnames";


let AuthConnections = props =>{
    const { handleSubmit } = props
    return(
        <div className={style.wrapper}>

            <form className={style.form} onSubmit={handleSubmit} action="/auth/google" accept-charset="UTF-8" method="post">
                <input name="utf8" type="hidden" value="✓"/><input type="hidden" name="authenticity_token"
                                                            value="bE5rSvB1A6KJP6PaQ+uOEY0vaAIDsB6HlxKoE7EZkRu7eaxGmy6cZibJW5rfJ9QpkBGXVEu5Vk3XgGgMNCkNfA=="/>
                <button className={cn(style.button_google, style.button)} name="button" type="submit"
                        data-auth-action="Sign In">
                    Sign in with Google
                </button>
                <button className={cn(style.button_vk, style.button)} name="button" type="submit"
                        data-auth-action="Sign In">
                    Sign in with Google
                </button>
                <button className={cn(style.button_facebook, style.button)} name="button" type="submit"
                        data-auth-action="Sign In">
                    Sign in with Google
                </button>
            </form>
        </div>
    )
}

AuthConnections = reduxForm({
    form: 'auth-connections'
})(AuthConnections)

export default AuthConnections;