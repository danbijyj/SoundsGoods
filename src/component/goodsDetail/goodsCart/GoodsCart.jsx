import './style.scss';
const GoodsCart = ({ data }) => {
    const {
        id,
        artist,
        title,
        category,
        price,
        release,
        cpn,
        imageM,
        imgaeS,
        remain,
        quantity,
        like,
        modal,
        chk,
        bookmark,
        count,
    } = data;
    return (
        <div className="goods_cart">
            <div className="cart_inner">
                <h2>{title}</h2>
                {/* title */}
                <div className="con con_1">
                    <ul className="artist_ganre">
                        <li>{artist}</li>
                        <li>댄스</li>
                    </ul>
                    <ul className="cpn_release">
                        <li>{cpn}</li>
                        <li>{release}</li>
                    </ul>
                </div>
                {/* div con con_1 */}
                <p className="price_cart">₩ {price.toLocaleString()}</p>
                {/* price_cart */}
                <div className="cart_form_chk">
                    <div className="form_con form_con1">
                        <input type="checkbox" name="chk2" id="" />
                        <label htmlFor=""></label>
                        <span>상세페이지 및 배송 일정 확인 후 구매 부탁드립니다</span>
                    </div>
                    <div className="form_con form_con2">
                        <input type="checkbox" name="chk1" id="" />
                        <label htmlFor=""></label>
                        <span>준비된 수량 소진 시 품절 될 수 있습니다.</span>
                    </div>
                    <div className="form_con form_con3">
                        <input type="checkbox" name="chk3" id="" />
                        <label htmlFor="" for="chk1"></label>
                        <span>해당 상품의 원활한 배송을 위하여 단독 구매 부탁드립니다.</span>
                    </div>
                    <div className="form_con form_con4 all_chk">
                        <input type="checkbox" name="chk3" id="" />
                        <label htmlFor=""></label>
                        <span>안내 사항을 모두 확인했습니다</span>
                    </div>
                </div>
            </div>
            {/* cart_inner */}
        </div>
    );
};

export default GoodsCart;
