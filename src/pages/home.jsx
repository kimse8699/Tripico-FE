import '../pages_styles/home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate ();
    return (
        <div className="schedule-container">
        {/* 상단 바 */}
        <div className="schedule-header">
            <h2 className="schedule-title">여행지 목록</h2>
            <button onClick={()=>{navigate('/mypage')}}className="menu-icon"></button>
        </div>
        <div className="schedule-underline"></div>

        {/* 일정 카드 */}
        <div onClick={()=>{navigate('/resultlist')}} className="schedule-card">
            <div className="schedule-circle" />
            <div className="schedule-text">
            <div className="schedule-name">안동</div>
            <div className="schedule-date">1 minute ago</div>
            </div>
            <div className="check-icon">✔</div>
        </div>

        {/* 일정 생성 버튼 */}
        <button onClick={()=>{navigate('/create')}}className="create-button">여행지 생성하기</button>
        </div>
    )
}

export default Home;