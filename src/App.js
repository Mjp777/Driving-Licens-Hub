import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Navbar from './Navbar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import HomePage from './pages/HomePage';
import LicenseApplication from './pages/LicenseApplication';
import LicenseStatus from './pages/LicenseStatus';
import RTOOfficerModule from './pages/RTOOfficerModule';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/apply-license" element={<LicenseApplication />} />
        <Route path="/license-status" element={<LicenseStatus />} />
        <Route path="/rto-officer" element={<RTOOfficerModule />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;