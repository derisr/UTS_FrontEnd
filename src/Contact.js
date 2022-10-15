import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Form';

function Contact() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      
      <div className="container mt-4">
        <h1>Contact</h1><br/>
        <Form/>
      </div>
      <br/>
      <Footer/>
    </div>
  );
}

export default Contact;
