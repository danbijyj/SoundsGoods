import ArtistIAlbum from './artistialbum/ArtistIAlbum';
import ArtistIGoods from './artistigoods/ArtistIGoods';
import ArtistIImg from './artistiimg/ArtistIImg';
import ArtistITop from './artistitop/ArtistITop';
import ArtistIVideo from './artistivideo/ArtistIVideo';
import './style.scss';

const ArtistInfoWrap = () => {
    return (
        <section id="artist-info-wrap">
            <div className="artist-info-img">
                <ArtistIImg />
            </div>
            <div className="artist-info-con">
                <ArtistITop />
                <ArtistIAlbum />
                <ArtistIVideo />
                <ArtistIGoods />
            </div>
        </section>
    );
};

export default ArtistInfoWrap;
