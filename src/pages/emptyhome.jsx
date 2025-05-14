import '../pages_styles/home.css'
import { useNavigate } from 'react-router-dom';

function EmptyHome() {
    const navigate = useNavigate ();
    return (
        <div className="schedule-container">
        {/* 상단 바 */}
        <div className="schedule-header">
            <h2 className="schedule-title">여행지 목록</h2>
            <button onClick={()=>{navigate('/mypage')}}className="menu-icon"></button>
        </div>
        <div className="schedule-underline"></div>

        <p style={{
          textAlign: 'center',
          color: '#888',
          fontSize: '16px',
          marginTop: '40px'
        }}>생성된 여행지가 없습니다</p>

        {/* 일정 생성 버튼 */}
        <button onClick={()=>{navigate('/create')}}className="create-button">여행지 생성하기</button>
        </div>
    )
}

export default EmptyHome;
