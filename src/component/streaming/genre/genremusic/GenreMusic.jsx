import GenreMusicList from './GenreMusicList';
import './style.scss';

const GenreMusic = ({ data }) => {
    return (
        <section id="genre-music">
            <h2>{data.genre} 카테고리의 모든 음악</h2>
            <div className="genre-music-top">
                <div className="genre-music-btn">
                    <button>전체 선택</button>
                    <button>전체 재생</button>
                </div>
                <div className="genre-music-sort">
                    <div className="sort-down">정렬</div>
                    <div className="sorting">
                        <ul>
                            <li className="sorting-title">정렬</li>
                            <li>최신순</li>
                            <li>인기순</li>
                            <li>이름순</li>
                        </ul>
                    </div>
                </div>
            </div>
            <GenreMusicList data={data} />
        </section>
    );
};

export default GenreMusic;
