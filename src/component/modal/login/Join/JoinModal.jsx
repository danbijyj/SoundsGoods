import './style.scss';

const JoinModal = () => {
    return (
        <div className="join">
            <p className="close">
                <img src="./images/icons/close01.png" alt="" />
            </p>
            <h1>회원가입</h1>
            <div className="joinInput">
                <p>
                    <input type="email" name="email" placeholder="이메일" />
                </p>
                <p>
                    <input
                        type="passowrd"
                        name="password"
                        placeholder="비밀번호 ( 문자, 숫자, 특수문자 포함 8 ~ 20자 )"
                    />
                </p>
                <p>
                    <input type="paschk" name="paschk" placeholder="비밀번호" />
                </p>
            </div>

            <div className="agree">
                <p>
                    <input type="checkbox" name="" id="" style={{ width: 18, height: 18 }} />
                    서비스 약관 전체 동의
                </p>
                <p>
                    <img src="./images/icons/acodiun_down.png" alt="" />
                </p>
            </div>
            <div className="agreeDitaile">
                <p>
                    <input type="checkbox" name="" id="" style={{ width: 14, height: 14 }} />
                    서비스이용약관 관련 동의 (필수)
                </p>
                <p>
                    <input type="checkbox" name="" id="" style={{ width: 14, height: 14 }} />
                    쇼핑정보 수신 동의 (선택)
                </p>
            </div>
            <div className="btn2">
                <button className="on" type="submit">
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default JoinModal;
