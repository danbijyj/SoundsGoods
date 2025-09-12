import { useEffect, useState } from 'react';
import ArtistGoodsItem from './ArtistGoodsItem';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import goods from '../../../../assets/api/goods';

const ArtistGoods = () => {
    const [goodsData] = useState(goods);
    const [sliceStart, setSliceStart] = useState(0);

    // 랜덤으로 5개 보여주는 함수
    useEffect(() => {
        const maxStart = goodsData.length - 5;
        const start = Math.floor(Math.random() * (maxStart + 1));
        setSliceStart(start);
    }, [goodsData]);

    return (
        <section id="artist-goods">
            <div>
                <h2>
                    새로 나온 아티스트 굿즈
                    <Link to="">
                        <img src="../../../../../public/images/streaming/more_color.png" alt="" />
                    </Link>
                </h2>
            </div>
            <div className="artist-goods-list">
                {goodsData.slice(sliceStart, sliceStart + 5).map((item) => (
                    <ArtistGoodsItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default ArtistGoods;
