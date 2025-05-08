import '../pages_styles/home.css'

function Home() {
    return (
        <div className="wrapper">
            <div className="header">
                <h1 className="title">일정 목록</h1>
                <div className="menu-icon">
                    {/* 간단한 햄버거 메뉴 아이콘 */}
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            <hr className="divider" />

            <div className="schedule-card">
                <div className="circle"></div>
                <div className="schedule-info">
                    <span className="schedule-title">대구</span>
                    <span className="schedule-date">3 days ago</span>
                </div>
                <div className="check-icon">✔️</div>
            </div>

            <button className="create-button">일정 생성하기</button>
        </div>
    )
}

export default Home;