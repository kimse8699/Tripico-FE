import "../pages_styles/create.css";
import { useNavigate } from "react-router-dom";

function Create() {

  const navigate = useNavigate()

  return (
    <div className="create-container">
      {/* 상단 제목 */}
      <div className="create-header">
        <div onClick={() => {navigate("/")}} className="back-button"></div>
        <h2 className="create-title">세부사항 입력</h2>
      </div>
      <div className="divider" />

      {/* 입력 필드 */}
      <div className="form-group">
        <label className="ai-parameter">여행가고 싶은 지역을 말해주세요</label>
        <input type="text" className="input-box" placeholder="예: 제주도" />
      </div>

      <div className="form-group">
        <label className="ai-parameter">여행 기간을 정해주세요</label>
        <div className="date-box">
          <input type="date" className="date-input" value="2025-04-14" />
          <span className="tilde">~</span>
          <input type="date" className="date-input" value="2025-04-17" />
        </div>
      </div>

      <div className="form-group">
        <label className="ai-parameter">여행가고 싶은 지역을 말해주세요</label>
        <input type="text" className="input-box" placeholder="예: 강릉" />
      </div>

      <div className="form-group">
        <label className="ai-parameter">가고싶은 곳을 선택해주세요</label>
        <div className="image-options">
          <div className="img-option" style={{ backgroundImage: `url('/img/img1.png')` }}></div>
          <div className="img-option" style={{ backgroundImage: `url('/img/img2.png')` }}></div>
          <div className="img-option" style={{ backgroundImage: `url('/img/img3.png')` }}></div>
          <div className="img-option" style={{ backgroundImage: `url('/img/img4.png')` }}></div>
        </div>
      </div>

      {/* 생성 버튼 */}
      <button className="ai-create-button">일정 생성하기</button>
    </div>
  );
}

export default Create;
