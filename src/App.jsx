import './style/style.css';
import Footer from './Components/UI/Footer/Index';
import Header from './Components/UI/Header/Index';
import Router from './router/index.routes';

function App() {
    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    );
}

export default App;