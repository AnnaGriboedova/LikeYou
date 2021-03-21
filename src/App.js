import './App.scss';
import {HashRouter,withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "./redux/redux-store";

function App() {
  return (

    <div className="App">

    </div>
  );
}
const mapStateToProps = (state) => ({

});
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {

    })
)(App);

const SocialNetworkApp = () => {
    //use BrowserRouter for hosting; if github page hosting - use HashRouter
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
};

export default SocialNetworkApp;
