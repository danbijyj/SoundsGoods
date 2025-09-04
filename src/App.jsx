import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Main, Oauth } from './page';
import Layout from './common/Layout';
import './styled/reset.scss';
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
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
