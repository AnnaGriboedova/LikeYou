import style from "./AppInfo.module.scss";
import logo from "../../../logo.svg"

const AppInfo= (props)=>{
    return <div className={style.div}>
        <img className={style.logo} src={logo}/>
        <h1>Discover the world’s top Designers & Creatives.</h1>
    </div>
}

export default AppInfo;