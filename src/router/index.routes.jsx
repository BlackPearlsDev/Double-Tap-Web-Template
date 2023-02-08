import { Routes, Route } from "react-router-dom";
import HOC from "../Helpers/HOC";

// Import Pages
import Home from "../Components/Pages/Home/Index";
import Play from "../Components/Pages/Play/Index";
import News from "../Components/Pages/News/Index";
import Ladder from "../Components/Pages/Ladder/Index";
import Team from "../Components/Pages/Team/Index";
import Register from "../Components/Entry/Register/Index";
import Login from "../Components/Entry/Login/Index";
import Logout from "../Components/Entry/Logout/Index";
import Succes from "../Components/Entry/Succes/Index";
import Account from "../Components/Pages/Account/Index";
import NotFound from "../Components/Pages/NotFound/Index";
import Error from "../Components/Error";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="play" element={<Play />} />
            <Route path="news" element={<News />} />
            <Route path="team" element={<Team />} />
            <Route path="ladder" element={<HOC child={Ladder} />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<HOC child={Logout} isAuthRequired={true} />} />
            <Route path="success" element={<Succes />} />
            <Route path="Double-Tap-Web-Template" element={<Home />} /> {/* For GitHub Pages */}
            <Route path="account/:account/:id" element={<HOC child={Account} isAuthRequired={true} />} />
            <Route path="error" element={<Error />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}

export default Router;