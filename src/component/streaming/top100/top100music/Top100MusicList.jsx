import './style.scss';
import Top100MusicItem from './Top100MusicItem';

const Top100MusicList = () => {
    return (
        <table>
            <colgroup>
                <col className="col-album" />
                <col className="col-title" />
                <col className="col-artist" />
                <col className="col-time" />
                <col className="col-release" />
                <col className="col-play" />
                <col className="col-like" />
                <col className="col-fav" />
            </colgroup>
            <thead>
                <tr>
                    <th></th>
                    <th>곡명</th>
                    <th>아티스트명</th>
                    <th>재생시간</th>
                    <th>발매일</th>
                    <th className="th-icon">재생</th>
                    <th className="th-icon">좋아요</th>
                    <th className="th-icon">찜하기</th>
                </tr>
            </thead>
            <tbody>
                <Top100MusicItem />
                <Top100MusicItem />
                <Top100MusicItem />
                <Top100MusicItem />
                <Top100MusicItem />
                <Top100MusicItem />
                <Top100MusicItem />
                <Top100MusicItem />
                <Top100MusicItem />
                <Top100MusicItem />
            </tbody>
        </table>
    );
};

export default Top100MusicList;
