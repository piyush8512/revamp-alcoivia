"use client";
import React from "react";
import { CursorProvider } from "../components/CursorContext";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import ManifestoSection from "@/components/ManifestoSection";
import Footer from "@/components/Footer";
import SocialCards from "@/components/SocialCard";
import ParallaxFaceToggle from "@/components/ParallaxFaceToggle";
import OfferingsHorizontal from "@/components/offerings-horizontal";

const AlcoviaWebsite = () => {
  return (
    <CursorProvider>
      <div className="relative bg-[#f5f5f0] text-black overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <HeroSection />
        <ManifestoSection />
        {/* <ProblemSection /> */}
        <OfferingsHorizontal/>
        <ParallaxFaceToggle/>
        <SocialCards />
        <Footer />
      </div>
    </CursorProvider>
  );
};

export default AlcoviaWebsite;
