import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './SignInForm.module.scss'
import cn from 'classnames'

let ContactForm = props => {
    const { handleSubmit } = props
    return (
        <div>


            <form className={style.form} onSubmit={handleSubmit}>
                {/*<Field name="utf8" component="input" type="hidden" value="✓"/>
                <Field component="input" type="hidden" name="authenticity_token"
                       value="bE5rSvB1A6KJP6PaQ+uOEY0vaAIDsB6HlxKoE7EZkRu7eaxGmy6cZibJW5rfJ9QpkBGXVEu5Vk3XgGgMNCkNfA=="/>
*/}
                <div className={style.fields}>
                    <fieldset>
                        <label className='label' htmlFor="login">Username or Email Address</label>
                        <Field component="input" type="text" name="login" id="login" tabIndex="1" className="text-input"
                               autoCorrect="off" autoCapitalize="off"/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="password" className={cn('label', style.label_password)}>
                            <span>Password</span>
                            <a href="">Forgot
                            password?</a>
                        </label>
                        <Field component="input" type="password" name="password" id="password" tabIndex="2"
                               className="text-input"/>
                    </fieldset>
                </div>

                <input className="button form-sub" type="submit" value="Sign In" tabIndex="3"/>
            </form>

        </div>
    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm)

export default ContactForm