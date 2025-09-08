import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Main, Oauth, Streaming } from './page';
import Layout from './common/Layout';
import './styled/reset.scss';
import Top100 from './component/streaming/top100/Top100';
import Artist from './component/streaming/artist/Artist';
import Genre from './component/streaming/genre/Genre';
import LatestMusic from './component/streaming/latestmusic/LatestMusic';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="login" element={<Login />} />
                        <Route path="oauth" element={<Oauth />} />

                        {/* <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="">
                            <Route index element={''} />
                            <Route path="" element={``} />
                        </Route> */}
                        <Route path="streaming">
                            <Route index element={<Streaming />} />
                            <Route path="artist" element={<Artist />} />
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
