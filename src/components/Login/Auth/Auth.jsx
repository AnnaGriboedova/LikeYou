import style from "./Auth.module.scss";
import SignInForm from "./SignInForm/SignInForm";
import AuthConnections from "./AuthConnections/AuthConnections";

const Auth = (props) => {
    const submit = values => {
        // print the form values to the console
        console.log(values)
    }
    return <div className={style.content}>
        <div className={style.toSignUp}>Not a member? <a href='#'>Sign up now</a></div>
        <div className={style.container}>
            <h1>Sign in to LikeYou</h1>

            <AuthConnections onSubmit={submit}/>

            <hr className={style.divider}></hr>

            <SignInForm onSubmit={submit}/>
        </div>
    </div>
}

export default Auth;