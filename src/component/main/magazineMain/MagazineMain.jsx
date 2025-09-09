import MagazinItem from './magazinItem/MagazinItem';
import MagazinTidins from './magazinTidings/MagazinTidins';
import './style.scss';
const MagazineMain = () => {
    return (
        <section className="magazin_main">
            <div className="inner">
                <MagazinTidins />
                <MagazinItem />
            </div>
        </section>
    );
};

export default MagazineMain;
