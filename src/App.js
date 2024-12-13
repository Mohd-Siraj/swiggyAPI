import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import useOnline from "./utils/useOnline";
// import Instamart from './componets/Instamart';
import { lazy, Suspense } from "react";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/instamart"
          element={
            <Suspense>
              <Instamart />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
