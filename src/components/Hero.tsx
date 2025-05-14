import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import career from "../animations/career2.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".bg-gradient-hero",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    tl.fromTo(
      ".hiring-badge",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out" },
      "-=1"
    );

    tl.fromTo(
      ".main-headline",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    tl.fromTo(
      ".subheadline",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

    tl.fromTo(
      ".cta-buttons",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    tl.fromTo(
      ".stat-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out",
      },
      "-=0.3"
    );

    gsap.to(".floating-circle-1", {
      y: 20,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".floating-circle-2", {
      y: -15,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });

    gsap.to(".pulse-dot", {
      scale: 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const stats: { value: string; label: string }[] = [
    { value: "32+", label: "Projects Completed" },
    { value: "50+", label: "Satisfied Client" },
    { value: "18+", label: "Experts" },
  ];

  return (
    <section className="relative bg-gradient-hero bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 z-0 pointer-events-none">
        <Lottie animationData={career} loop={true} className="w-full h-full" />
      </div>

      <div className="floating-circle-1 absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-700/10 blur-3xl"></div>
      <div className="floating-circle-2 absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-700/10 blur-3xl"></div>

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 0 L 40 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="hiring-badge inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
            <span className="pulse-dot w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="text-sm font-medium text-blue-100">
              WE'RE HIRING
            </span>
          </div>

          <h1 className="main-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Shape <span className="text-blue-300">Tomorrow's</span> Technology
          </h1>

          <p className="subheadline text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join MetaLogic's team of visionaries and build innovative solutions
            that transform businesses across Nepal.
          </p>

          <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="px-8 py-3.5 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Open Positions
            </a>
            <a
              href="#benefits"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-medium rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
            >
              Why Join Us?
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <p className="text-2xl font-bold text-blue-300">{stat.value}</p>
                <p className="text-xs text-blue-100 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
