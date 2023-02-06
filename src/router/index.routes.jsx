import { Routes, Route } from "react-router-dom";
import HOC from "../Helpers/HOC";

// Import Pages
import Home from "../Components/Pages/Home/Index";
import Play from "../Components/Pages/Play/Index";
import News from "../Components/Pages/News/Index";
import Ladder from "../Components/Pages/Ladder/Index";
import Team from "../Components/Pages/Team/Index";
import NotFound from "../Components/Pages/NotFound/Index";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/play" element={<Play />} />
            <Route path="/news" element={<News />} />
            <Route path="/team" element={<Team />} />
            <Route path="/ladder" element={<HOC child={Ladder} />} />
            <Route path="/Double-Tap-Web-Template" element={<Home />} /> {/* For GitHub Pages */}
            <Route path="*" element={<NotFound />}/>
            {/* <HOC child={} isAuthRequired={true} */}
        </Routes>
    );
}

export default Router;