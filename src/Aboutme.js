import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


function Aboutme() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      
      <div className="container mt-4">
        <h1>About Me</h1><br/>
        <p>
        Jajaline merupakan perusahaan fashion yang masih masuk dalam kategori UKM (Usaha Kecil Menengah) 
        dan kami sampai sekarang masih menggunakan penjahit 100% orang Indonesia yang berada di Madiun, Solo, dan Jakarta.<br/>
        Kami selalu mencari pabrik atau konveksi yang juga memproduksi brand luar negeri kesayangan Anda 
        (Betul, banyak sekali label brand luar negeri yang sebenarnya diproduksinya di Indonesia). 
        Serta pendapatan para penjahit kami semuanya selalu melebihi Upah Rata-rata Minimum Provinsi agar mereka lebih setia 
        dan berhati-hati dalam membuat setiap pakaian yang Anda dapatkan.
        </p>
      </div>
      <br/>
      <Footer/>
    </div>
  );
}

export default Aboutme;
