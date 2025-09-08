import React, { useState } from 'react';
import './style.scss';
import IveList from './leftIveList/IveList';
import ivedata from '../../../assets/api/iveData';
const IveSecret = () => {
    const [data, setData] = useState(ivedata);
    const [musicVedio, setMusicVedio] = useState(ivedata[0]);
    return (
        <section className="ive_secret">
            <div className="music_video_right">
                <iframe
                    src="https://www.youtube.com/embed/B1ShLiq3EVc"
                    frameborder="0"
                    allowfullscreen
                    className="muvi"
                ></iframe>
            </div>
            <div className="left_ive_secret">
                <div className="left_ive_text">
                    <h2>{`NEw
IVE SECRET`}</h2>
                    <ul className="textBox">
                        <li>
                            <p>발매일</p>
                            <p>2025.08.25</p>
                        </li>
                        <li>
                            <p>장르</p>
                            <p>댄스 / 발라드</p>
                        </li>
                        <li>
                            <p>발매사</p>
                            <p>카카오엔터테인먼트</p>
                        </li>
                        <li>
                            <p>기획사</p>
                            <p>스타쉽엔터테인먼트</p>
                        </li>
                    </ul>
                    <div className="btn_more">
                        <button>
                            <img src="/images/icons/white_next.png" alt="" />
                        </button>
                        <span>앨범 구매하기</span>
                    </div>
                </div>
                <IveList data={data} />
            </div>
        </section>
    );
};

export default IveSecret;
