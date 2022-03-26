import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Technology from './components/Technology/Technology'
import Vision from './components/Vision/Vision'

function App() {
  return (
    <div className="App">
    <Nav />
    <section id='home'><Home /></section>
    <section id='about'><About /></section>
    <section id='tech'><Technology /></section>
    <section id='vision'><Vision /></section>
    </div>
  );
}

export default App;
