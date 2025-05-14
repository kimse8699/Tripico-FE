import { useParams, useNavigate } from "react-router-dom";
import "../pages_styles/result.css";

function Result() {
  const { placeName } = useParams('하회마을');
  const navigate = useNavigate();

  return (
    <div className="result-container">
      {/* 상단 헤더 */}
      <div className="result-header">
        <button className="back-button" onClick={() => navigate(-1)}>
        </button>
        <h2 className="result-title-header">여행지 소개</h2>
      </div>
      <div className="divider" />

      {/* 본문 */}
      <div className="result-name-line">
        <span className="blue-dot" />
        <h3 className="result-name">하회마을</h3>
      </div>

      <div className="result-image"></div>

      <h4 className="result-subtitle">
        우리나라 고유의 전통과 역사가 <br /> 그대로 살아 숨쉬는 전통 마을
      </h4>

      <p className="result-description">
        하회마을은 경상북도 안동시에 위치한 전통 한옥 마을로, 낙동강이 마을을 감싸 흐르는 지형 때문에 ‘물돌이마을’이라는 뜻의 ‘하회’라는 이름이 붙었습니다.
        <br /><br />
        이 마을은 약 600년 전부터 풍산 류씨 가문이 대대로 살아온 동성마을이며, 유교 문화와 조선 시대 양반 문화를 고스란히 간직하고 있습니다.
      </p>

      <h4 className="section-title">기본 정보</h4>
      <div className="info-box">
        <p><strong>주소</strong> &nbsp;&nbsp; 경상북도 안동시 풍천면 전서로 186</p>
        <p><strong>전화</strong> &nbsp;&nbsp; +82548530109</p>
        <p><strong>홈페이지</strong> &nbsp;&nbsp; <a href="http://www.hahoe.or.kr" target="_blank" rel="noreferrer">www.hahoe.or.kr</a></p>
      </div>
    </div>
  );
}

export default Result;