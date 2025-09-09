import './style.scss';
import { useNavigate } from 'react-router-dom';
const LoginModal = () => {
    const navigate = useNavigate();
    const goToJoin = () => navigate('/join');
    return (
        <div className="login">
            <p className="close">
                <img src="./images/icons/close.png" alt="close" />
            </p>
            <h1>로고</h1>

            <div className="loginInput">
                <p>
                    <input type="email" name="email" placeholder="이메일" />
                </p>
                <p>
                    <input type="passowrd" name="password" placeholder="비밀번호" />
                </p>
            </div>

            {/* <p className="save-find">
                    <label>
                        <input type="checkbox" /> 아이디 저장
                    </label>
                </p> */}

            <div className="btn1">
                <button className="on" type="submit">
                    로그인
                </button>
            </div>

            <ul>
                <li>아이디 찾기</li>
                <li>비밀번호 찾기</li>
                <li onClick={goToJoin}>회원가입</li>
            </ul>
            <i className="snslogin">
                <p>
                    <img
                        src="./images/login/login01.png"
                        alt="googlelogin"
                        style={{ width: 32, height: 32 }}
                    />
                </p>
                <p>
                    <img
                        src="./images/login/login02.png"
                        alt="applelogin"
                        style={{ width: 32, height: 32 }}
                    />
                </p>
                <p>
                    <img
                        src="./images/login/login03.png"
                        alt="kakaologin"
                        style={{ width: 32, height: 32 }}
                    />
                </p>
            </i>
        </div>
    );
};

export default LoginModal;
