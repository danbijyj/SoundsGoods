import ArtistCategory from './artistcategory/ArtistCategory';
import ArtistGoods from './artistgoods/ArtistGoods';
import RecArtist from './recartist/RecArtist';
import './style.scss';

const ArtistWrap = () => {
    return (
        <section id="artistwrap">
            <div className="inner">
                <RecArtist />
                <ArtistCategory />
                <ArtistGoods />
            </div>
        </section>
    );
};

export default ArtistWrap;
