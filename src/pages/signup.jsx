import '../pages_styles/signup.css'

function Signup() {

  return (
    <div className="wrapper">
        <h1 className="title">계정 생성</h1>
        <p className="subtitle">
            경상북도 여행지 추천 서비스를 이용하시려면<br />
            계정을 생성해 주세요!
        </p>

        <div className="input-container">
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <input type="password" placeholder="Confirm Password" className="input-field" />
        </div>

        <button className="submit-button">회원가입</button>

        <div className="bottom-text">
            이미 계정이 있습니다
        </div>
    </div>
  )
}

export default Signup;