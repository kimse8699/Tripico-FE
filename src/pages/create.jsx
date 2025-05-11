import "../pages_styles/create.css";
import { useNavigate } from "react-router-dom";

function Create() {

  const navigate = useNavigate()

  return (
    <div className="create-container">
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
            {/* ... */}
          </select>
          <span className="colon">:</span>
          <select className="time-select">
            <option>0</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
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
          <div className="transport-item"><span className="dot" /> 도보</div>
          <div className="transport-item selected"><span className="dot blue" /> 대중교통</div>
          <div className="transport-item"><span className="dot" /> 차량</div>
        </div>
      </div>

      <div className="form-group">
        <label className="ai-parameter">원하는 여행을 간단하게 적어주세요!</label>
        <textarea className="input-box" rows="3" placeholder="예: 자연을 즐기고 싶어요"></textarea>
      </div>

      {/* 생성 버튼 */}
      <button onClick={()=>{navigate('/created')}}className="ai-create-button">일정 생성하기</button>
    </div>
  );
}

export default Create;
