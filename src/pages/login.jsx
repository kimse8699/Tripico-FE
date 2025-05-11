import '../pages_styles/login.css'
import { useNavigate  } from 'react-router-dom';

function Login() {
  const navigate = useNavigate ();
  return (
    <div className="wrapper">
        <h1 className="login-title">로그인</h1>
        <p className="login-subtitle">
            경상북도 여행지 추천 서비스에<br />
            오신걸 환영합니다.
        </p>

        <div className="input-container">
            <input type="email" placeholder="User ID" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
        </div>

        <div className="forgot-password">
            비밀번호를 잊어버렸나요?
        </div>

        <button onClick={()=>{navigate('/home')}}className="submit-button">로그인</button>

        <div onClick={()=>{navigate('/signup')}}className="bottom-text">
            새로운 계정을 만드세요!
        </div>
    </div>
  )
}

export default Login;