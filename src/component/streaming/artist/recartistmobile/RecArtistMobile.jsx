import RecArtistItemMobile from './RecArtistItemMobile';
import './style.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const RecArtistMobile = () => {
    return (
        <section id="rec-artist-mobile">
            <h2>
                추천 아티스트
                <Link to="">
                    <img src="/images/streaming/more.png" alt="" />
                </Link>
            </h2>
            <div className="rec-artist-list-mobile">
                <Swiper className="mySwiper" slidesPerView={5} spaceBetween={20}>
                    <SwiperSlide>
                        <RecArtistItemMobile />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RecArtistItemMobile />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RecArtistItemMobile />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RecArtistItemMobile />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RecArtistItemMobile />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RecArtistItemMobile />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RecArtistItemMobile />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RecArtistItemMobile />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default RecArtistMobile;
