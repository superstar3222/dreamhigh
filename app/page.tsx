"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Globe, ArrowRight, Star, Cloud } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sky to Space Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-400 via-blue-600 via-purple-700 to-indigo-900">
        {/* Animated Clouds - Horizontal movement only */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <Cloud
              key={`cloud-${i}`}
              className="absolute text-white/15 animate-cloud-drift"
              size={30 + (i % 3) * 15} // More controlled sizing: 30, 45, or 60
              style={{
                top: `${15 + ((i * 8) % 30)}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: `${25 + (i % 3) * 10}s`, // 25s, 35s, or 45s
              }}
            />
          ))}
        </div>

        {/* Well-organized Constellation Patterns */}
        <div className="absolute inset-0">
          {/* Big Dipper - Top Left */}
          <div
            className="absolute top-[15%] left-[10%] animate-twinkle-slow"
            style={{ transform: `translateY(${scrollY * 0.01}px)` }}
          >
            <div className="relative">
              {/* Big Dipper Stars */}
              <Star className="absolute text-white fill-white" size={12} style={{ top: "0px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "15px", left: "35px" }} />
              <Star className="absolute text-white fill-white" size={12} style={{ top: "8px", left: "70px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "25px", left: "105px" }} />
              <Star className="absolute text-white fill-white" size={12} style={{ top: "50px", left: "115px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "75px", left: "95px" }} />
              <Star className="absolute text-white fill-white" size={12} style={{ top: "80px", left: "60px" }} />
              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="6" y1="6" x2="41" y2="21" stroke="white" strokeWidth="1" />
                <line x1="41" y1="21" x2="76" y2="14" stroke="white" strokeWidth="1" />
                <line x1="76" y1="14" x2="111" y2="31" stroke="white" strokeWidth="1" />
                <line x1="111" y1="31" x2="121" y2="56" stroke="white" strokeWidth="1" />
                <line x1="121" y1="56" x2="101" y2="81" stroke="white" strokeWidth="1" />
                <line x1="101" y1="81" x2="66" y2="86" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Orion's Belt - Center Right */}
          <div
            className="absolute top-[40%] right-[15%] animate-twinkle-slow"
            style={{
              animationDelay: "2s",
              transform: `translateY(${scrollY * 0.008}px)`,
            }}
          >
            <div className="relative">
              {/* Orion constellation */}
              <Star className="absolute text-white fill-white" size={10} style={{ top: "0px", left: "20px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "25px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={12} style={{ top: "25px", left: "40px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "50px", left: "15px" }} />
              <Star className="absolute text-white fill-white" size={13} style={{ top: "50px", left: "25px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "50px", left: "35px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "75px", left: "5px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "75px", left: "45px" }} />
              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="26" y1="6" x2="6" y2="31" stroke="white" strokeWidth="1" />
                <line x1="26" y1="6" x2="46" y2="31" stroke="white" strokeWidth="1" />
                <line x1="21" y1="56" x2="31" y2="56" stroke="white" strokeWidth="1" />
                <line x1="31" y1="56" x2="41" y2="56" stroke="white" strokeWidth="1" />
                <line x1="21" y1="56" x2="11" y2="81" stroke="white" strokeWidth="1" />
                <line x1="41" y1="56" x2="51" y2="81" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Cassiopeia - Top Right */}
          <div
            className="absolute top-[20%] right-[25%] animate-twinkle-slow"
            style={{
              animationDelay: "4s",
              transform: `translateY(${scrollY * 0.012}px)`,
            }}
          >
            <div className="relative">
              <Star className="absolute text-white fill-white" size={10} style={{ top: "0px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "20px", left: "25px" }} />
              <Star className="absolute text-white fill-white" size={12} style={{ top: "8px", left: "50px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "25px", left: "75px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "12px", left: "100px" }} />
              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="5" y1="5" x2="30" y2="25" stroke="white" strokeWidth="1" />
                <line x1="30" y1="25" x2="55" y2="13" stroke="white" strokeWidth="1" />
                <line x1="55" y1="13" x2="80" y2="30" stroke="white" strokeWidth="1" />
                <line x1="80" y1="30" x2="105" y2="17" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Leo - Left Center */}
          <div
            className="absolute top-[55%] left-[20%] animate-twinkle-slow"
            style={{
              animationDelay: "6s",
              transform: `translateY(${scrollY * 0.009}px)`,
            }}
          >
            <div className="relative">
              <Star className="absolute text-white fill-white" size={11} style={{ top: "0px", left: "30px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "15px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={12} style={{ top: "15px", left: "60px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "35px", left: "20px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "35px", left: "80px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "50px", left: "40px" }} />
              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="35" y1="5" x2="5" y2="20" stroke="white" strokeWidth="1" />
                <line x1="35" y1="5" x2="65" y2="20" stroke="white" strokeWidth="1" />
                <line x1="25" y1="40" x2="45" y2="55" stroke="white" strokeWidth="1" />
                <line x1="65" y1="20" x2="85" y2="40" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Cygnus (Northern Cross) - Center */}
          <div
            className="absolute top-[30%] left-[45%] animate-twinkle-slow"
            style={{
              animationDelay: "8s",
              transform: `translateY(${scrollY * 0.007}px)`,
            }}
          >
            <div className="relative">
              <Star className="absolute text-white fill-white" size={11} style={{ top: "0px", left: "25px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "25px", left: "25px" }} />
              <Star className="absolute text-white fill-white" size={12} style={{ top: "50px", left: "25px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "25px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "25px", left: "50px" }} />
              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="30" y1="5" x2="30" y2="55" stroke="white" strokeWidth="1" />
                <line x1="5" y1="30" x2="55" y2="30" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Lyra - Upper Center */}
          <div
            className="absolute top-[25%] left-[35%] animate-twinkle-slow"
            style={{
              animationDelay: "10s",
              transform: `translateY(${scrollY * 0.011}px)`,
            }}
          >
            <div className="relative">
              <Star className="absolute text-white fill-white" size={13} style={{ top: "0px", left: "15px" }} />
              <Star className="absolute text-white fill-white" size={9} style={{ top: "20px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={9} style={{ top: "20px", left: "30px" }} />
              <Star className="absolute text-white fill-white" size={8} style={{ top: "35px", left: "10px" }} />
              <Star className="absolute text-white fill-white" size={8} style={{ top: "35px", left: "20px" }} />
              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="20" y1="5" x2="5" y2="25" stroke="white" strokeWidth="1" />
                <line x1="20" y1="5" x2="35" y2="25" stroke="white" strokeWidth="1" />
                <line x1="5" y1="25" x2="15" y2="40" stroke="white" strokeWidth="1" />
                <line x1="35" y1="25" x2="25" y2="40" stroke="white" strokeWidth="1" />
                <line x1="15" y1="40" x2="25" y2="40" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Draco - Winding around */}
          <div
            className="absolute top-[10%] left-[60%] animate-twinkle-slow"
            style={{
              animationDelay: "12s",
              transform: `translateY(${scrollY * 0.006}px)`,
            }}
          >
            <div className="relative">
              <Star className="absolute text-white fill-white" size={10} style={{ top: "0px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={9} style={{ top: "15px", left: "20px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "30px", left: "35px" }} />
              <Star className="absolute text-white fill-white" size={9} style={{ top: "45px", left: "20px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "60px", left: "5px" }} />
              <Star className="absolute text-white fill-white" size={9} style={{ top: "75px", left: "25px" }} />
              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="5" y1="5" x2="25" y2="20" stroke="white" strokeWidth="1" />
                <line x1="25" y1="20" x2="40" y2="35" stroke="white" strokeWidth="1" />
                <line x1="40" y1="35" x2="25" y2="50" stroke="white" strokeWidth="1" />
                <line x1="25" y1="50" x2="10" y2="65" stroke="white" strokeWidth="1" />
                <line x1="10" y1="65" x2="30" y2="80" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Pegasus - Lower Right */}
          <div
            className="absolute top-[65%] right-[10%] animate-twinkle-slow"
            style={{
              animationDelay: "14s",
              transform: `translateY(${scrollY * 0.008}px)`,
            }}
          >
            <div className="relative">
              <Star className="absolute text-white fill-white" size={11} style={{ top: "0px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "0px", left: "40px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "40px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "40px", left: "40px" }} />
              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="5" y1="5" x2="45" y2="5" stroke="white" strokeWidth="1" />
                <line x1="45" y1="5" x2="45" y2="45" stroke="white" strokeWidth="1" />
                <line x1="45" y1="45" x2="5" y2="45" stroke="white" strokeWidth="1" />
                <line x1="5" y1="45" x2="5" y2="5" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Andromeda - Lower Left */}
          <div
            className="absolute top-[70%] left-[15%] animate-twinkle-slow"
            style={{
              animationDelay: "16s",
              transform: `translateY(${scrollY * 0.009}px)`,
            }}
          >
            <div className="relative">
              <Star className="absolute text-white fill-white" size={10} style={{ top: "0px", left: "20px" }} />
              <Star className="absolute text-white fill-white" size={11} style={{ top: "20px", left: "0px" }} />
              <Star className="absolute text-white fill-white" size={12} style={{ top: "20px", left: "40px" }} />
              <Star className="absolute text-white fill-white" size={10} style={{ top: "40px", left: "20px" }} />
              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="25" y1="5" x2="5" y2="25" stroke="white" strokeWidth="1" />
                <line x1="25" y1="5" x2="45" y2="25" stroke="white" strokeWidth="1" />
                <line x1="45" y1="25" x2="25" y2="45" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* Additional scattered stars for depth */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <Star
              key={`scattered-star-${i}`}
              className="absolute text-white fill-white animate-twinkle"
              size={4 + Math.random() * 6}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.3 + Math.random() * 0.5,
                transform: `translateY(${scrollY * (0.002 + Math.random() * 0.003)}px)`,
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        <div className="absolute inset-0">
          {[...Array(2)].map((_, i) => (
            <Star
              key={`shooting-star-${i}`}
              className="absolute text-white fill-white animate-shooting-star"
              size={12}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 40}%`,
                animationDelay: `${Math.random() * 30}s`,
                animationDuration: "4s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Artistic Navigation */}
        <nav className="fixed top-0 w-full z-50">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border-b border-white/20" />
          <div className="relative container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="group flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <span className="text-white font-bold text-lg">DH</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <span className="text-2xl font-black text-white">DreamHigh</span>
                  <div className="text-xs text-blue-100 -mt-1">Soaring to New Heights</div>
                </div>
              </Link>

              <div className="hidden lg:flex items-center space-x-8">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/services" },
                  { name: "Insights", href: "/salary-insights" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative group ${item.name === "Home" ? "text-yellow-300 font-bold" : "text-white/90 hover:text-white"} transition-all duration-300 font-medium`}
                  >
                    <span style={{ animationDelay: `${index * 0.1}s` }}>{item.name}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-white group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Take Flight
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section - Asymmetrical & Layered */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-12 gap-8 items-center min-h-screen">
              {/* Left Content - Offset and Layered */}
              <div className="col-span-12 lg:col-span-7 relative">
                {/* Floating Typography */}
                <div className="relative">
                  <div
                    className="absolute -top-8 -left-4 text-6xl font-black text-white/10 select-none"
                    style={{ transform: `translateY(${scrollY * 0.025}px)` }}
                  >
                    DREAM
                  </div>
                  <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8 relative z-10">
                    <span className="block text-white transform hover:scale-105 transition-transform duration-500">
                      Elevating
                    </span>
                    <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500 delay-100">
                      Your Career
                    </span>
                    <span className="block text-white/90 text-4xl lg:text-5xl mt-4 transform hover:scale-105 transition-transform duration-500 delay-200">
                      with Innovative
                    </span>
                    <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent text-4xl lg:text-5xl transform hover:scale-105 transition-transform duration-500 delay-300">
                      IT Solutions
                    </span>
                  </h1>
                  <div
                    className="absolute -bottom-4 -right-8 text-6xl font-black text-white/10 select-none"
                    style={{ transform: `translateY(${scrollY * -0.025}px)` }}
                  >
                    HIGH
                  </div>
                </div>

                {/* Floating Description */}
                <div className="relative mb-12">
                  <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-white rounded-full" />
                  <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed pl-8 max-w-2xl">
                    Transform your digital presence with{" "}
                    <span className="text-yellow-300 font-semibold">cutting-edge development</span> services and unlock
                    your potential in the <span className="text-white font-semibold">ever-evolving IT landscape</span>.
                  </p>
                </div>

                {/* Asymmetrical CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Begin Your Journey
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:border-white/50 hover:shadow-lg bg-white/10 backdrop-blur-sm"
                  >
                    Explore Dreams
                  </Button>
                </div>
              </div>

              {/* Right Visual Element - Floating and Interactive with Flutter Effect */}
              <div className="col-span-12 lg:col-span-5 relative">
                <div className="relative">
                  {/* Main Floating Card with Flutter Animation */}
                  <div
                    className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 animate-flutter transition-all duration-700"
                    style={{
                      transform: `translateY(${scrollY * -0.015}px)`,
                    }}
                  >
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse" />

                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-all duration-500">
                        <Code className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Innovation Hub</h3>
                      <p className="text-blue-100 mb-6">
                        Where dreams meet technology and possibilities become reality.
                      </p>
                      <div className="flex justify-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-orbit" />
                  <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-orbit-reverse" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Floating Services Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6">
            {/* Asymmetrical Header */}
            <div className="grid grid-cols-12 gap-8 mb-20">
              <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                <div className="text-center relative">
                  <div className="absolute -top-12 left-0 text-8xl font-black text-white/10 select-none">SERVICES</div>
                  <h2 className="text-5xl lg:text-6xl font-black mb-6 relative z-10">
                    <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                      Our Magical
                    </span>
                    <br />
                    <span className="text-white">Solutions</span>
                  </h2>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    Where innovation meets imagination, creating digital experiences that soar beyond expectations
                  </p>
                </div>
              </div>
            </div>

            {/* Asymmetrical Service Cards with Consistent Heights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1 - Offset */}
              <div className="lg:mt-16">
                <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 service-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10 service-card-content">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors">
                      Custom Software
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-6">
                      Tailored solutions that transform your unique vision into powerful, scalable applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "Python", "AWS"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Card 2 - Normal */}
              <div>
                <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:-rotate-1 service-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10 service-card-content">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors">
                      Web Development
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-6">
                      Modern, responsive websites that captivate users and drive exceptional experiences.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "React", "Tailwind", "Vercel"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Card 3 - Offset Down */}
              <div className="lg:mt-32">
                <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 service-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10 service-card-content">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Smartphone className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors">
                      Mobile Apps
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-6">
                      Native and cross-platform applications that engage users and elevate businesses.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React Native", "Flutter", "iOS", "Android"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Dreamy CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
              <div className="relative">
                <h2 className="text-5xl lg:text-7xl font-black mb-8 text-white leading-tight">
                  Ready to
                  <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    Reach New Heights?
                  </span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed">
                Join hundreds of visionaries who have transformed their dreams into digital reality with our innovative
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-10 py-5 text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 font-bold"
                >
                  Start Your Dream Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/20 px-10 py-5 text-xl rounded-full transition-all duration-500 hover:scale-105 hover:-translate-y-2 font-bold bg-white/10 backdrop-blur-sm"
                >
                  Explore Our Universe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with Artistic Touch */}
        <footer className="bg-black/20 backdrop-blur-xl border-t border-white/20 relative overflow-hidden">
          <div className="container mx-auto px-6 py-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DH</span>
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white">DreamHigh</span>
                    <div className="text-sm text-blue-200">Elevating Dreams to Reality</div>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed max-w-md">
                  Where innovation meets imagination, creating digital experiences that soar beyond the ordinary and
                  transform dreams into extraordinary realities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                <ul className="space-y-3 text-blue-200">
                  {["Services", "Portfolio", "About", "Contact"].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase()}`} className="hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Connect</h3>
                <div className="flex space-x-4">
                  {["Li", "Tw", "Gh", "In"].map((social, i) => (
                    <div
                      key={social}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
                    >
                      <span className="text-white font-bold text-sm">{social}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 mt-12 pt-8 text-center text-blue-200">
              <p>&copy; 2024 DreamHigh. All rights reserved. Soaring to new heights through innovation.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
