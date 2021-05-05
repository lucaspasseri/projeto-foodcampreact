import Overlay from './Overlay';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

export default function App() {
    return(
        <>
            <Overlay />
            <Header titulo="FoodCamp" subtitulo="Sua comida em 6 minutos"/>
            <Menu />
            <Footer />
        </>
    );
}