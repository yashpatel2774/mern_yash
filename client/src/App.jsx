import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';
import Logout from './pages/Logout';
import AdminLayout from './components/layouts/AdminLayout';
import AdminUsers from './pages/AdminUsers';
import AdminContacts from './pages/AdminContacts';

function App() {
  return (
    <>
      <div className="flex flex-col bg-[#111111] text-white min-h-screen">
        <BrowserRouter>
          <Navbar />

          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Error />} />
              <Route path='/admin' element={<AdminLayout />}>
                  <Route path='users' element={<AdminUsers />} />
                  <Route path='contacts' element={<AdminContacts />} />
              </Route>
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
