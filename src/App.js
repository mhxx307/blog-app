import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import config from '~/configs';
import { TopBar } from '~/layouts';
import Login from '~/pages/Login';
import Register from '~/pages/Registers';
import Home from '~/pages/Home';
import Single from '~/pages/Single';
import Write from '~/pages/Write';
import Settings from '~/pages/Settings';
import Context from './storage/Context';

function App() {
    const { user } = useContext(Context);
    return (
        <Router>
            <>
                <TopBar />
                <Routes>
                    <Route exact path={config.routes.home} element={<Home />} />
                    <Route
                        path={config.routes.login}
                        element={user ? <Home /> : <Login />}
                    />
                    <Route
                        path={config.routes.register}
                        element={user ? <Home /> : <Register />}
                    />
                    <Route
                        path={config.routes.write}
                        element={user ? <Write /> : <Register />}
                    />
                    <Route
                        path={config.routes.settings}
                        element={user ? <Settings /> : <Register />}
                    />
                    <Route path={config.routes.post} element={<Single />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
