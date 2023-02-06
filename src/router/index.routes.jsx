import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "../Components/Pages/Home/Index";
import NotFound from "../Components/Pages/NotFound/Index";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}

export default Router;