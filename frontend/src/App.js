import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PhotoApp } from './pages/PhotoApp';
import './assets/scss/global.scss';

function App() {
  return (
    <section className="main-app">
      <Header />
      <PhotoApp />
      <Footer />
    </section>
  );
}

export default App;
