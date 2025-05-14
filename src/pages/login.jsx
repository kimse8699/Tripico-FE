import '../pages_styles/login.css'
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate ();

  const handleCreate = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false); // 로딩 종료
      navigate('/home');
    }, 2000); // 예시: 2초간 로딩
  };
  
  return (
    <div className="wrapper">
        {/* 로딩 화면 */}
        {isLoading && (
        <div className="loading-overlay">
            <div className="spinner"></div>
            <p>로그인 중...</p>
        </div>
        )}
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

        <button onClick={handleCreate} className="submit-button">로그인</button>

        <div onClick={()=>{navigate('/signup')}}className="bottom-text">
            새로운 계정을 만드세요!
        </div>
    </div>
  )
}

export default Login;