import React from "react";
import Header from "../component/header";
import Slider from "@/component/slider";
import Countdown from "@/component/countdown";
import Important from "@/component/important";
import Contact from "@/component/contact";
import Footer from "@/component/footer"



export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Countdown />
      <Important />
      <Contact />
      <Footer />
      {/* Add your page content here */}
    </>
  );
}

    
    
    

