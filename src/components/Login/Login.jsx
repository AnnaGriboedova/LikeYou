import style from "./Login.module.scss";
import AppInfo from "./AppInfo/AppInfo";
import Auth from "./Auth/Auth";

const Login= (props)=>{
    return <div className={style.div}>
        <AppInfo/>
        <Auth/>
    </div>
}

export default Login;