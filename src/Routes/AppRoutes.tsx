import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Characters } from "../pages/Characters/characters";
import { CharacterDetails } from "../pages/CharacterDetails/characterDetails";
import { Clans } from "../pages/Clans/clans";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Characters/:afiliaton?" element={<Characters />} />
                <Route path="/Character/:id" element={<CharacterDetails />} />
                <Route path="Clans" element={<Clans />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes