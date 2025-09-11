import './style.scss';

const GoodsSideBar = () => {
    return (
        <div className="goods_side_bar">
            <div className="side_inner">
                <h2>굿즈 찾기</h2>
                <div className="side_sort">
                    <div className="sort_text">
                        <p>정렬</p>
                        <img src="images/icons/black_top.png" alt="" />
                    </div>
                    <div className="side_sort_btns">
                        <button>
                            <span>최근순</span>
                        </button>
                        <button>
                            <span>인기순</span>
                        </button>
                        <button>
                            <span>기본순</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoodsSideBar;
