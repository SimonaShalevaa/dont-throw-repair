import { Route, Routes } from "react-router";
import Atelier from "./components/atelier/Atelier";
import Catalogue from "./components/catalogue/Catalogue";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/home/Hero";
import Inquire from "./components/inquire/Inquire";
import MobileNavigation from "./components/navigation/MobileNavigation";
import Details from "./components/details/Details";
import Edit from "./components/edit/Edit";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import NotFound from "./components/not-found/NotFound";

function App() {
  return (
    <>
      <Header />
      <MobileNavigation />
      
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path="/repair-tips" element={<Atelier />} />
          <Route path="/create" element={<Inquire />} />
          <Route path="/items/:itemId" element={<Details />} />
          <Route path="/items/:itemId/edit" element={<Edit />} />
          <Route path="/users/:userId" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
