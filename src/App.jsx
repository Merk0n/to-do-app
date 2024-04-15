import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
