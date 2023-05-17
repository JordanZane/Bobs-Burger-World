import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Pages/Home';
import Characters from './components/Pages/Characters';
import Episodes from './components/Pages/Episodes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/episodes" element={<Episodes />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
