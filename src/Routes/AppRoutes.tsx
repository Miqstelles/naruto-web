import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Characters } from "../pages/Characters/characters";
import { CharacterDetails } from "../pages/CharacterDetails/characterDetails";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Characters/:afiliaton?" element={<Characters />} />
                <Route path="/Character/:id" element={<CharacterDetails />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes