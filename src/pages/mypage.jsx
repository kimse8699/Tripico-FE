import "../pages_styles/mypage.css";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="mypage-container">
        {/* 상단 타이틀 */}
        <div className="mypage-header">
          <div onClick={()=>{navigate('/')}}className="back-button"></div>
          <h2 className="mypage-title">MY</h2>
        </div>

        <hr className="top-divider" />

        {/* 인사말 */}
        <div className="welcome-text">
          <span className="username">김세훈님</span>{" "}
          <span className="welcome">WELCOME</span>
        </div>

        {/* 여행 카드 */}
        <div className="plan-box">
          <div className="plan-item1">
            <span>보유 여행</span> <span className="plan-count">1 PLAN</span>
          </div>
          <div className="plan-item2">
            <span>생성 가능 일정</span>{" "}
            <span className="plan-count">3 PLAN</span>
          </div>
        </div>

        {/* 계정 관리 */}
        <div className="section-title">계정 관리</div>
        <div className="row-menu">
          <div>회원정보 수정</div>
          <div>여행 계획 목록</div>
        </div>
        <hr className="divider" />

        {/* 이용 안내 */}
        <div className="section-title">이용안내</div>
        <div className="row-menu">
          <div>고객센터</div>
          <div>사용가이드</div>
        </div>

        <hr className="divider" />

        {/* ID + 로그아웃 */}
        <div className="footer-row">
          <div className="login-id">
            <span>User ID &nbsp;: &nbsp;</span>
            <span>tptpgnsgns12</span>
          </div>
          <button onClick={()=>{navigate('/welcome')}}className="logout-button">로그아웃</button>
        </div>

        {/* Tripico 로고 */}
        <div className="logo">Tripico</div>
      </div>
    </div>
  );
}

export default Mypage;
