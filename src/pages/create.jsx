import "../pages_styles/create.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react"

function Create() {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  

  const handleCreate = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false); // 로딩 종료
      navigate('/resultlist');
    }, 8000); // 예시: 2초간 로딩
  };


  return (
    <div className="create-container">
      {/* 로딩 화면 */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>일정을 생성 중입니다...</p>
        </div>
      )}

      {/* 상단 제목 */}
      <div className="create-header">
        <div onClick={() => {navigate("/home")}} className="back-button"></div>
        <h2 className="create-title">세부사항 입력</h2>
      </div>
      <div className="divider" />

      {/* 입력 필드 */}
      <div className="form-group">
        <label className="ai-parameter">여행가고 싶은 지역을 말해주세요</label>
        <input type="text" className="input-box" placeholder="예: 안동" />
      </div>

      <div className="form-group">
        <label className="ai-parameter">이동 소요 시간 최대치를 설정해주세요</label>
        <div className="time-limit-box">
          <select className="time-select">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            {/* ... */}
          </select>
          <span className="colon">:</span>
          <select className="time-select">
            <option>0</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
            {/* ... */}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="ai-parameter">몇명이서 여행을 떠나나요?</label>
        <input type="text" className="input-box" placeholder="예: 8" />
      </div>

      <div className="form-group">
        <label className="ai-parameter">이동수단이 무엇인가요?</label>
        <div className="transport-options">
          <div className="transport-item selected"><span className={`dot1 ${isClicked1 ? "selected" : ""}`} 
          onClick={()=> !isClicked1 && setIsClicked1(true)}/> 대중교통</div>
          <div className="transport-item"><span className={`dot2 ${isClicked2 ? "selected" : ""}`} 
          onClick={()=> !isClicked2 && setIsClicked2(true)}/> 차량</div>
        </div>
      </div>

      <div className="form-group">
        <label className="ai-parameter">원하는 여행을 간단하게 적어주세요!</label>
        <textarea className="input-box" rows="3" placeholder="예: 자연을 즐기고 싶어요" spellCheck={false}></textarea>
      </div>

      {/* 생성 버튼 */}
      <button onClick={handleCreate}className="ai-create-button">여행지 추천 받기</button>
    </div>
  );
}

export default Create;
