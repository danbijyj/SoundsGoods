import { Link } from 'react-router-dom';
import './style.scss';

const StreamingMenu = () => {
    return (
        <section id="streamingmenu">
            <div className="menu_inner">
                <ul>
                    <li>
                        <Link to="/streaming/latestmusic">최신 음악</Link>
                    </li>
                    <li>
                        <Link to="/streaming/top100">인기 차트 100</Link>
                    </li>
                    <li>
                        <Link to="/streaming/genre">장르별 음악</Link>
                    </li>
                    <li>
                        <Link to="/streaming/artist">아티스트별 음악</Link>
                    </li>
                    <li>
                        <Link to="">최근 재생한 음악</Link>
                    </li>
                </ul>
                <ul className="streamingmenu_btt">
                    <li>
                        <Link to="">마이뮤직</Link>
                    </li>
                    <li className="btt_common">
                        <Link to="">설정</Link>
                    </li>
                    <li className="btt_common">
                        <Link to="">로그아웃</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default StreamingMenu;
