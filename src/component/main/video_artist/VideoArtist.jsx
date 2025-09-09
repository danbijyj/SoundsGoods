import { Link } from 'react-router-dom';
import MainAlbumList from './albumList/MainAlbumList';
import ArtistList from './artist/ArtistList';
import './style.scss';
import TopList from './topMusicList/TopList';
import NewList from './newMusic/NewList';
import { useEffect, useState } from 'react';
import MainAlbumMobileItem from './albumListMobile/MainAlbumMobileItem';
import MainAlbumMobileList from './albumListMobile/MainAlbumMobileList';
import ArtistMobileList from './artistMobile/ArtistMobileList';

const VideoArtist = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <section id="video_artist">
            <div className="inner">
                <h2>지금 뜨고있는 Video</h2>
                {width > 1024 ? <MainAlbumList /> : <MainAlbumMobileList />}
                <h2 className="artist_title">Artists</h2>
                <strong className="artist_sub_title">
                    일상 속 작은 순간까지 특별하게 채워드립니다.
                </strong>
                {width ? <ArtistList /> : <ArtistMobileList />}
                <div className="more_main_artist">
                    <Link to="/">
                        <button>
                            <img src="/images/icons/main_next.png" alt="" />
                        </button>
                        더 많은 장르 찾아보기
                    </Link>
                </div>

                {/* <div className="top_new_list">
                    <div className="main_artist_left">
                        <strong>지금 사람들이 많이 찾고 있는 곡들이에요</strong>
                        <TopList />
                        <button>
                            <img src="/images/icons/white_next.png" alt="" />
                            플레이하기
                        </button>
                    </div>
                    <div className="main_artist_right">
                        <strong>최신 앨범을 소개해드려요</strong>
                        <NewList />
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default VideoArtist;
