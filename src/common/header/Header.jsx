import React, { useRef, useState } from 'react';
import './style.scss';
import Nav from './nav/Nav';
import { Link } from 'react-router-dom';
import headerData from '../../assets/api/headerData';
import HeaderForm from './headerForm/HeaderForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const Header = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(headerData);
    const swiperRef = useRef();
    return (
        <header id="header" className={show ? 'active' : ''} onMouseLeave={() => setShow(false)}>
            <div className="header_top_menu">
                <ul>
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            </div>
            {/* <div className="header_top_menu">
                <ul>
                    <li>00님</li>
                    <li>로그아웃</li>
                    <li>장바구니</li>
                    <li>내 예약</li>
                </ul>
            </div> */}
            <div className="inner">
                <h1 className="logo">
                    <Link to="/">{/* <img src="" alt="" /> */}</Link>
                </h1>
                <HeaderForm />
                <Nav data={data} setShow={setShow} />
            </div>
            {data[2].isOn && (
                <div className="header_content">
                    <h2>
                        <strong>sounds goods</strong>
                        <p>pop-up store</p>
                    </h2>
                    <button className="swiper_next" onClick={() => swiperRef.current.slideNext()}>
                        <img src="/images/icons/icon-park-outline_right.png" alt="" />
                    </button>
                    <button className="swiper_prev" onClick={() => swiperRef.current.slidePrev()}>
                        <img src="/images/icons/icon-park-outline_left.png" alt="" />
                    </button>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mySwiper"
                        slidesPerView={3}
                        spaceBetween={50}
                        slidesPerGroup={3}
                    >
                        {data[2].onContent.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="swiper_content">
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <span>{item.desc}</span>
                                    <div className="bg"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            {data[1].isOn && <div className="header_content2"></div>}
        </header>
    );
};

export default Header;
