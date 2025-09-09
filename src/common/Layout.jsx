import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import MusicModal from '../page/musicModal';
import { usemainAlbumStore } from '../store';
import Login from '../page/login';
import Join from '../page/join';

const Layout = () => {
    const { musicOn } = usemainAlbumStore((state) => state.musicOn);
    return (
        <div id="wrap">
            <Header />
            <main>
                <Outlet />
                <MusicModal />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
