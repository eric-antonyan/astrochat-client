import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'auth'}>
                    <Route path={'login'} element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;