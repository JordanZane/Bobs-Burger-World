import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Pages/Home';
import Characters from './components/Pages/Characters';
import Episodes from './components/Pages/Episodes';
import Footer from './components/Footer';
import Burger from './components/Pages/Burgers';
import TopPageLink from './components/TopPageLink';

function Reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', Reveal);

// To check the scroll position on page load
Reveal();

function App() {
  return (
    <BrowserRouter>
      <TopPageLink />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/episodes" element={<Episodes />}></Route>
        <Route path="/burgers" element={<Burger />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
