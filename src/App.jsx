import { Router, BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Main } from './page';
import Layout from './common/Layout';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="login" element={<Login />} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="" element={``} />
                        <Route path="">
                            <Route index element={''} />
                            <Route path="" element={``} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
