import PopupMainList from './popupList/PopupMainList';
import './style.scss';

const PopupMain = () => {
    return (
        <section className="popup_main">
            <h2>최근 팝업 / 이벤트 소개</h2>
            <div className="popup_main_sub">
                <div className="popup_left">
                    <img src="/images/main/main_con5_01.jpg" alt="" />
                </div>
                <div className="popup_right">
                    <PopupMainList />
                </div>
            </div>
        </section>
    );
};

export default PopupMain;
