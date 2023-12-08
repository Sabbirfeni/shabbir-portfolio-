// import React from "react";

import { Hero, Navbar, About, Experience, Tech, Works, Feedbacks, Contact } from "../components";

export default function RootLayout() {
  return (
        <div className="relative z-0 bg-primary">
            <div>
                <Navbar/>
                <Hero/>
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                <Feedbacks/>
                <Contact/>
            </div>
        </div>
    );
}
