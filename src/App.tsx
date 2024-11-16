import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'auth'}>
                    <Route path={'login'} element={<Login />} />
                    <Route path={'reg'} element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;