import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Shirt from './Shirt';
import Pants from './Pants';
import Accessories from './Accessories';
import Allproducts from './Allproducts';
// import Signup from './Signup';
// import Login from './Login';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} Route/> 
            <Route path="home" element={<App />} Route/>
            <Route path="aboutme" element={<Aboutme />} Route/>
            <Route path="contact" element={<Contact />} Route/>
            <Route path="shirt" element={<Shirt />} Route/>
            <Route path="pants" element={<Pants />} Route/>
            <Route path="accessories" element={<Accessories />} Route/>
            <Route path="allproducts" element={<Allproducts />} Route/>
            {/* <Route path="signup" element={<Signup />} Route/>
            <Route path="login" element={<Login />} Route/> */}
        </Routes>
    </BrowserRouter>,
    rootElement
);