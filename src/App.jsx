import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { authApi } from "./api";
import AuthContext from "./contexts/auth-context";
import PrivateRoute from "./guards/PrivateRoute";
import GuestRoute from "./guards/GuestRoute";
import Header from "./components/header/Header";
import MobileNavigation from "./components/navigation/MobileNavigation";
import Footer from "./components/footer/Footer";
import Hero from "./components/home/Hero";
import Catalogue from "./components/catalogue/Catalogue";
import RepairTips from "./components/repair-tips/RepairTips";
import Details from "./components/details/Details";
import Profile from "./components/profile/Profile";
import Inquire from "./components/inquire/Inquire";
import Edit from "./components/edit/Edit";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import NotFound from "./components/not-found/NotFound";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [auth, setAuth] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("auth"));

    if (!saved || saved.expiresAt < Date.now()) {
      return null;
    }

    return saved;
  });

  const saveAuth = (data) => {
    if (data) {
      localStorage.setItem("auth", JSON.stringify(data));
    } else {
      localStorage.removeItem("auth");
    }

    setAuth(data);
  };

  const createSession = (result) => {
    return {
      accessToken: result.access_token,
      refreshToken: result.refresh_token,
      expiresAt: Date.now() + result.expires_in * 1000,
      user: result.user,
    };
  };

  const register = async (userData) => {
    try {
      const result = await authApi.register(userData);

      if (!result.access_token) {
        alert("Please confirm your email and then log in.");
        return;
      }

      saveAuth(createSession(result));
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const login = async (userData) => {
    try {
      const result = await authApi.login(userData);

      saveAuth(createSession(result));
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const logout = async () => {
    try {
      await authApi.logout(auth?.accessToken);
    } catch (err) {
      alert(err.message);
    } finally {
      saveAuth(null);
    }
  };

  const contextValue = {
    accessToken: auth?.accessToken,
    user: auth?.user,
    isAuthenticated: !!auth,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <ScrollToTop />
      <Header
        isMenuOpen={isMenuOpen}
        onMenuClick={() => setIsMenuOpen((state) => !state)}
      />
      <MobileNavigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path="/repair-tips" element={<RepairTips />} />
          <Route path="/items/:itemId" element={<Details />} />
          <Route path="/users/:userId" element={<Profile />} />

          <Route element={<PrivateRoute />}>
            <Route path="/create" element={<Inquire />} />
            <Route path="/items/:itemId/edit" element={<Edit />} />
          </Route>

          <Route element={<GuestRoute />}>
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route
              path="/register"
              element={<Register onRegister={register} />}
            />
          </Route>

          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
