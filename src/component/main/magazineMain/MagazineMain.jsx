import MagazinItem from './magazinItem/MagazinItem';
import './style.scss';
const MagazineMain = () => {
    return (
        <section className="magazin_main">
            <div className="inner">
                <MagazinItem />
            </div>
        </section>
    );
};

export default MagazineMain;
