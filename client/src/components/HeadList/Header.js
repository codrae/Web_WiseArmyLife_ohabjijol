import React, {useState ,useEffect} from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
 import Login from './Login';
import DetailHome from "./DetailHome";
import Community from './Community';
import Assess from "./Assess";
import './Header.css';
import My from "./My";
import AuthRoute from "../../Custom/AuthRoute";
import LogoutButton from "./LogoutButton";
import PublicRoute from "../../Custom/PublicRoute";


const Header = () => {

    
    const [isLogin, setIsLogin] = useState(false)
    
    // 경고 무시하세요
    useEffect(() => {
        if(sessionStorage.getItem('user_id') === null){
        // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
          console.log('isLogin ?? :: ', isLogin)
        } else {
        // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
        // 로그인 상태 변경
          setIsLogin(true)
          console.log('isLogin ?? :: ', isLogin)
        }
    })

    
    const headrStyle = {
        fontSize: "32px",
        textAlign: "center",
        paddingBottom: "20px"
    };

    return (
        <React.Fragment>

            <div className="Header" style={headrStyle}>
                <h1>슬기로운 병영생활</h1>
            </div>
            <Router>
                <div className="container">
                    <Link to="/">
                        <div>홈</div>
                    </Link>
                    <Link to="/assess">
                        <div>병기본평가</div>
                    </Link>
                    <Link to="/community">
                        <div>커뮤니티</div>
                    </Link>
                    <Link to="/my">
                        <div>마이페이지</div>
                    </Link>
                    {isLogin ? 
                    (
                        <LogoutButton auth={isLogin} />
                    ) : 
                    (<Link to="/login">
                        <button>로그인</button>
                    </Link>)}
                    <Link to="/auth">
                        <div>회원가입</div>
                    </Link>
                </div>
                
                <Switch>
                    <PublicRoute exact path="/" restricted={false} auth={isLogin} component={DetailHome} />
                    <Route path="/login" render={(props) => (
                        <Login />
                        )}
                    />
                    <PublicRoute path="/community" restricted={false} auth={isLogin}  component={Community} />
                    <PublicRoute path="/assess" restricted={false} auth={isLogin} component={Assess} />
                    <AuthRoute path="/my" auth={isLogin} render={ () => <My />} />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default Header;