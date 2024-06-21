"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Services from "@/components/home/Services";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import HeroSection from "@/components/home/HeroSection";
import Plans from "@/components/home/Plans";
import Reviews from "@/components/home/Reviews";
import HomeAbout from "@/components/home/HomeAbout";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollYProgress } = useScroll();
  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = video.currentSrc || video.src;
    console.log(video, src);

    const once = (
      el: EventTarget | null,
      event: string,
      fn: (e: Event) => void,
      opts?: boolean | AddEventListenerOptions
    ) => {
      function onceFn(e: Event) {
        el?.removeEventListener(event, onceFn);
        fn(e);
        // fn.apply(this:, arguments as any);
      }
      el?.addEventListener(event, onceFn, opts);
      return onceFn;
    };

    once(document.documentElement, "touchstart", (e: Event) => {
      video.play();
      video.pause();
    });

    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: video.duration || 1 }
      );
    });

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    setTimeout(() => {
      // if (window.fetch) {
      fetch(src)
        .then((response) => response.blob())
        .then((response) => {
          const blobURL = URL.createObjectURL(response);

          const t = video.currentTime;
          once(document.documentElement, "touchstart", (e: Event) => {
            video.play();
            video.pause();
          });

          video.setAttribute("src", blobURL);
          video.currentTime = t + 1;
        });
      // }
    }, 1);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 origin-left h-1 bg-orange-700 z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <video
        ref={videoRef}
        src="../output4.mp4"
        playsInline
        webkit-playsinline="true"
        preload="auto"
        muted
        className="video-background"
      />
      <div id="container">
        <HeroSection />
        <Services />
        <WhatWeOffer />
        <Plans />
        <Reviews />
        <HomeAbout />
      </div>
    </div>
  );
};

export default Home;
