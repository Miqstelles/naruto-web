import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Characters } from "../pages/Characters/characters";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Characters" element={<Characters />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes