// import React from "react";

import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from '../components/Navbar';
import Experience from '../components/Experience';

export default function RootLayout() {
  return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar/>
                <Hero/>
                <About/>
                <Experience/>
                <Experience/>
                <Experience/>
                <Experience/>
            </div>
        </div>
    );
}
