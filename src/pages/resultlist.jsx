import "../pages_styles/resultlist.css"
import PlaceCard from "../componenet/PlaceCard";
import { useNavigate } from "react-router-dom";

function ResultList() {

  const navigate = useNavigate()

  return (
    <div className="resultlist-container">
      {/* 상단 제목 */}
      <div className="resultlist-header">
        <div onClick={() => {navigate("/home")}} className="back-button"></div>
        <h2 className="resultlist-title">여행지 추천</h2>
      </div>
      <div className="divider" />
      <PlaceCard
        title="하회마을"
        description="안동 하회마을은 경상북도 안동시 풍천면에 있는 전통 민속마을이다."
        startAddr="경북 안동시 송천동 388"
        destAddr="경북 안동시 풍천면 하회리"
        busTime="1시간 18분"
        carTime="38분"
      />
      <PlaceCard
        title="만휴정"
        description="조선 중기의 문신 김계행이 지은 정자"
        startAddr="경북 안동시 송천동 388"
        destAddr="경북 안동시 길안면 묵계리"
        busTime="59분"
        carTime="24분"
      />
      <PlaceCard
        title="도산서원"
        description="조선시대 유학자 퇴계 이황 선생이 제자들을 가르치기 위해 세운 서원"
        startAddr="경북 안동시 송천동 388"
        destAddr="경북 안동시 도산면 토계리"
        busTime="1시간 23분"
        carTime="41분"
      />
    </div>
  )
}

export default ResultList;