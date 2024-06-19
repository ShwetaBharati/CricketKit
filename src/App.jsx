import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Category from "./components/Category";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App () {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Category />
            <Products />
            <Review />
            <Contact />
            <Blog />
            <Footer />

            {/* <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={Navbar} />
                    <Route exact path="/home" Component={Home} />
                    <Route exact path="/about" Component={About} />
                    <Route exact path="/category" Component={Category} />
                    <Route exact path="/products" Component={Products} />
                    <Route exact path="/contact" Component={Contact} />
                    <Route exact path="/blog" Component={Blog} />
                </Routes>
            </BrowserRouter> */}
        </>
    );
}

export default App;