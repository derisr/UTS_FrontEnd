import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      
      <div className="container mt-4">
        <h1>Selamat datang di Jajaline</h1><br/>
        <Content/>
      </div>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
