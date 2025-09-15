import { useEffect, useState } from 'react';
import RecArtistItem from './RecArtistItem';
import './style.scss';
import { Link } from 'react-router-dom';


const RecArtist = ({ data }) => {
    const [sliceStart, setSliceStart] = useState(0);

    useEffect(() => {
        const maxStart = data.length - 5;
        const start = Math.floor(Math.random() * (maxStart + 1));
        setSliceStart(start);
    }, [data]);

const RecArtist = () => {
    const itemCount = 8;

    return (
        <section id="rec-artist">
            <div>
                <h2>
                    추천 아티스트
                    <Link to="">
                        <img src="/images/streaming/more.png" alt="" />
                    </Link>
                </h2>
            </div>
            <ul className="rec-artist-list">

                {data.slice(sliceStart, sliceStart + 8).map((item) => (
                    <RecArtistItem key={item.id} item={item} />
                ))}

                {Array(itemCount)
                    .fill(0)
                    .map((_, i) => (
                        <RecArtistItem key={i} />
                    ))}

            </ul>
        </section>
    );
};

export default RecArtist;
