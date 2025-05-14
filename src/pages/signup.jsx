import '../pages_styles/signup.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signup() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate ();

  const handleCreate = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false); // 로딩 종료
      navigate('/');
    }, 5000); // 예시: 2초간 로딩
  };
  
  return (
    <div className="wrapper">
        {/* 로딩 화면 */}
        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <p>계정 생성 중입니다...</p>
          </div>
        )}
        <h1 className="signup-title">계정 생성</h1>
        <p className="signup-subtitle">
            경상북도 여행지 추천 서비스를 이용하시려면<br />
            계정을 생성해 주세요!
        </p>

        <div className="signup-input-container">
            <input type="email" placeholder="User ID" className="signup-input-field" />
            <input type="password" placeholder="Password" className="signup-input-field" />
            <input type="password" placeholder="Confirm Password" className="signup-input-field" />
            <input type="name" placeholder="Your Name" spellCheck={false} className="signup-input-field" />
        </div>

        <button onClick={handleCreate} className="signup-submit-button">회원가입</button>

        <div onClick={()=>{navigate('/login')}}className="signup-bottom-text">
            이미 계정이 있습니다
        </div>
    </div>
  )
}

export default Signup;