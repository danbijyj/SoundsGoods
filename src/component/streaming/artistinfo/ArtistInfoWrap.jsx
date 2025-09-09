import ArtistIAlbum from './artist_i_album/ArtistIAlbum';
import ArtistIImg from './artist_i_img/ArtistIImg';
import ArtistITop from './artist_i_top/ArtistITop';
import './style.scss';

const ArtistInfoWrap = () => {
    return (
        <section id="artist-info-wrap">
            <div className="artist-info-box">
                <div className="artist-info-img">
                    <ArtistIImg />
                </div>
                <div className="artist-info-con">
                    <ArtistITop />
                    <ArtistIAlbum />
                </div>
            </div>
        </section>
    );
};

export default ArtistInfoWrap;
