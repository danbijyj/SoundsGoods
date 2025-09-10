import ArtistITopMusicItem from './ArtistITopMusicItem';
import './style.scss';

const ArtistITopMusic = () => {
    return (
        <div id="artist-i-top-music">
            <h2>인기곡</h2>
            <table>
                {/* <caption>아티스트별 인기곡 리스트입니다.</caption> */}
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <tbody>
                    <ArtistITopMusicItem />
                    <ArtistITopMusicItem />
                    <ArtistITopMusicItem />
                    <ArtistITopMusicItem />
                    <ArtistITopMusicItem />
                </tbody>
            </table>
        </div>
    );
};

export default ArtistITopMusic;
