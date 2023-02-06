import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "../Components/Pages/Home/Index";
import Play from "../Components/Pages/Play/Index";
import News from "../Components/Pages/News/Index";


import Team from "../Components/Pages/Team/Index";
import NotFound from "../Components/Pages/NotFound/Index";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/play" element={<Play />} />
            <Route path="/news" element={<News />} />
            <Route path="/team" element={<Team />} />
            <Route path="/Double-Tap-Web-Template" element={<Home />} /> {/* For GitHub Pages */}
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}

export default Router;