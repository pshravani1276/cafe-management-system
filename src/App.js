import logo from './logo.svg';
import './App.css'
import Header from './components/Header'
import House from './components/House'
import About from './components/About'
import Footer from './components/Footer'
import Gallary from './components/Gallary'
import Additial from './components/Additial';
import Contact from './components/Contact';
import Service from './components/service';
import PaymentGatway from './components/PaymentGateway';
import JavaScript from './components/Javascript';
import Counter from './components/Counter';
import Layout from './admin/Layout';
import Dashboard from './admin/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './admin/AdminLogin';
import AllMenu from './functional components/AllMenu';
import AddMenu from './admin/AddMenu';
import Menu from './admin/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"element={<House/>}></Route>
        <Route path="/about"element={<About/>}></Route>
        <Route path="/gallery"element={<Gallary/>}></Route>
        <Route path="/allmenu"element={<AllMenu/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>
        <Route path="/adminlogin"element={<AdminLogin/>}></Route>
        <Route path="/admin/menu"element={<Menu/>}></Route>
        <Route path="/js"element={<JavaScript/>}/>
        <Route path="/whyus"element={<Additial/>}></Route>
        <Route path="/service"element={<Service/>}></Route>
        
        
        <Route path="/addmenu"element={<AddMenu/>}></Route>
        <Route path="/menu"element={<Menu/>}></Route>
        
        <Route path="/admin"element={<Layout/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        
        <Route path="/admin/addmenu"element={<AddMenu/>}></Route>



      </Routes>
      <Footer />
      
      </BrowserRouter>
      {/* <JavaScript></JavaScript> */}
      {/* <Counter></Counter> */}
     
    </div>
  );
}

export default App;



