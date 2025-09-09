import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    Main,
    Oauth,
    Streaming,
    Artist,
    ArtistInfo,
    Genre,
    LatestMusic,
    Top100,
    Mymusic,
    Magazine,
} from './page';
// wntjr
import Layout from './common/Layout';
import './styled/reset.scss';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
<<<<<<< Updated upstream
=======

                        <Route path="login" element={<Login />} />
                        <Route path="join" element={<Join />} />

>>>>>>> Stashed changes
                        <Route path="oauth" element={<Oauth />} />
                        <Route path="mymusic" element={<Mymusic />} />
                        <Route path="magazine" element={<Magazine />} />
                        <Route path="streaming">
                            <Route index element={<Streaming />} />
                            <Route path="artist" element={<Artist />} />
                            <Route path="artistinfo" element={<ArtistInfo />} />
                            <Route path="genre" element={<Genre />} />
                            <Route path="latestmusic" element={<LatestMusic />} />
                            <Route path="top100" element={<Top100 />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default App;
