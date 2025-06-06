"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  Zap,
  Target,
  Heart,
  Lightbulb,
  Coffee,
  Gamepad2,
  Mountain,
  Sparkles,
  Video,
  Palette,
  Cloud,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const timelineEvents = [
    {
      year: "2018",
      title: "The Dream Begins",
      description: "Founded in a small coffee shop in San Francisco, fueled by endless espresso and big dreams.",
      icon: <Coffee className="h-6 w-6" />,
      mood: "excited",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2019",
      title: "First Major Win",
      description: "Celebrated our first enterprise client with a team pizza party that lasted until 3 AM.",
      icon: <Award className="h-6 w-6" />,
      mood: "celebrating",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2020",
      title: "Remote Revolution",
      description: "Adapted to remote work by hosting virtual coffee breaks and online game nights.",
      icon: <Users className="h-6 w-6" />,
      mood: "adaptive",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2021",
      title: "Innovation Explosion",
      description: "Launched our mobile division while the team was scattered across 3 time zones.",
      icon: <Zap className="h-6 w-6" />,
      mood: "energetic",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2022",
      title: "Cloud Nine",
      description: "Became cloud-native experts and celebrated with a team retreat in the mountains.",
      icon: <Lightbulb className="h-6 w-6" />,
      mood: "inspired",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2024",
      title: "Dream Realized",
      description: "200+ projects later, we're still the same passionate team, just with better coffee machines.",
      icon: <Target className="h-6 w-6" />,
      mood: "accomplished",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const companyValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Human-Centered",
      description: "We build technology for people, by people who care about making a difference.",
      story: "Every feature we build starts with a real human need, not a technical possibility.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Endlessly Curious",
      description: "We question everything, experiment fearlessly, and learn from every failure.",
      story: "Our Friday 'Failure Parties' celebrate what didn't work and what we learned.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Stronger Together",
      description: "Individual brilliance is great, but collective genius changes the world.",
      story: "Our best ideas come from our weekly 'Crazy Idea Fridays' where anything goes.",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Beautifully Crafted",
      description: "We believe that how something works is just as important as how it looks.",
      story: "We spend as much time on the details you'll never see as the ones you will.",
    },
  ]

  const teamMoments = [
    {
      title: "Remote First, Human Always",
      description:
        "Our distributed team connects from around the world, bringing diverse perspectives and endless creativity to every project.",
      image: "/images/team-video-calls.jpg",
      icon: <Video className="h-6 w-6" />,
      stats: "12 team members across 8 time zones",
      culture: "Daily standups, virtual coffee chats, and async collaboration",
    },
    {
      title: "Creative Chaos & Brilliant Ideas",
      description:
        "Our brainstorming sessions are legendary - where sticky notes fly, ideas collide, and magic happens on whiteboards.",
      image: "/images/team-creative-session.png",
      icon: <Palette className="h-6 w-6" />,
      stats: "200+ ideas generated monthly",
      culture: "Design thinking workshops, innovation sprints, and creative freedom",
    },
    {
      title: "Coffee, Code & Connection",
      description:
        "Whether it's our quarterly team retreats or spontaneous park meetups, we believe the best work happens when we're together.",
      image: "/images/team-outdoor-coffee.png",
      icon: <Coffee className="h-6 w-6" />,
      stats: "4 team retreats per year",
      culture: "Outdoor meetings, coffee walks, and genuine friendships",
    },
    {
      title: "Celebrating Every Victory",
      description:
        "From project launches to personal milestones, we find every reason to celebrate and support each other's journey.",
      image: "/images/team-park-gathering.png",
      icon: <Mountain className="h-6 w-6" />,
      stats: "Weekly celebration rituals",
      culture: "Success parties, milestone recognition, and team adventures",
    },
  ]

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
                    className={`relative group ${item.name === "About" ? "text-yellow-300 font-bold" : "text-white/90 hover:text-white"} transition-all duration-300 font-medium`}
                  >
                    <span style={{ animationDelay: `${index * 0.1}s` }}>{item.name}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-white group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Join Our Journey
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="relative mb-8">
                {/* Decorative background text - fixed position with circular horizontal flow animation */}
                <div
                  className="fixed top-30 text-9xl font-black text-white/20 select-none"
                  style={{
                    animation: "dreamHighFlow 25s linear infinite",
                    zIndex: -1,
                    left: "-200px",
                  }}
                >
                  DREAM
                </div>
                <div
                  className="fixed -bottom-2 text-9xl font-black text-white/20 select-none"
                  style={{
                    animation: "dreamHighFlow 30s linear infinite",
                    animationDelay: "5s",
                    zIndex: -1,
                    left: "-200px",
                  }}
                >
                  HIGH
                </div>

                <h1 className="text-6xl lg:text-8xl font-black leading-none relative z-10">
                  <span className="block text-white transform hover:scale-105 transition-transform duration-500 mb-4">
                    Meet the Humans
                  </span>
                  <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500 delay-100 mb-4">
                    Behind the Magic
                  </span>
                  <span className="block text-white/90 text-4xl lg:text-5xl transform hover:scale-105 transition-transform duration-500 delay-200">
                    Soaring Together
                  </span>
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                We're not just developers, designers, and strategists. We're dreamers, adventurers, coffee enthusiasts,
                and humans who happen to create amazing digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values with Stories */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                What Makes Us{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Tick</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Our values aren't just words on a wall - they're the heartbeat of everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {companyValues.map((value, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-tr ${value.title === "Human-Centered" ? "from-red-500 to-pink-500" : value.title === "Endlessly Curious" ? "from-yellow-500 to-orange-500" : value.title === "Stronger Together" ? "from-blue-500 to-purple-500" : "from-purple-500 to-pink-500"} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      >
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                        <p className="text-blue-100 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border-l-4 border-yellow-400">
                      <p className="text-blue-100 italic">"{value.story}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Life & Culture Moments */}
        <section className="py-20 bg-white/5 backdrop-blur-sm relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Life at{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  DreamHigh
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Peek behind the scenes and see how we blend work, creativity, and genuine human connection to create
                something extraordinary
              </p>
            </div>

            <div className="space-y-20">
              {teamMoments.map((moment, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative group">
                      <img
                        src={moment.image || "/placeholder.svg"}
                        alt={moment.title}
                        className="w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                            {moment.icon}
                          </div>
                          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                            {moment.stats}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-black mb-4 text-white">{moment.title}</h3>
                      <p className="text-xl text-blue-100 leading-relaxed">{moment.description}</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                        <h4 className="font-bold text-white">Our Culture</h4>
                      </div>
                      <p className="text-blue-100">{moment.culture}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Badge variant="outline" className="bg-white/10 border-blue-200 text-blue-200">
                        <Heart className="h-3 w-3 mr-1" />
                        Authentic
                      </Badge>
                      <Badge variant="outline" className="bg-white/10 border-purple-200 text-purple-200">
                        <Users className="h-3 w-3 mr-1" />
                        Collaborative
                      </Badge>
                      <Badge variant="outline" className="bg-white/10 border-green-200 text-green-200">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Creative
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline - The Journey */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Our{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                From coffee shop dreams to digital reality - here's how we grew from a crazy idea to a team that changes
                lives
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-xl z-10 group-hover:scale-110 transition-transform duration-300">
                      {event.icon}
                    </div>

                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden">
                        <div className="relative">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-32 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <Badge className="absolute top-2 left-2 bg-white/90 text-gray-800">{event.year}</Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-blue-100 leading-relaxed text-sm">{event.description}</p>
                          <div className="mt-4 flex items-center space-x-2">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                event.mood === "excited"
                                  ? "bg-yellow-400"
                                  : event.mood === "celebrating"
                                    ? "bg-green-400"
                                    : event.mood === "adaptive"
                                      ? "bg-blue-400"
                                      : event.mood === "energetic"
                                        ? "bg-orange-400"
                                        : event.mood === "inspired"
                                          ? "bg-purple-400"
                                          : "bg-pink-400"
                              }`}
                            />
                            <span className="text-xs text-blue-200 capitalize">{event.mood}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Culture & Life CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white leading-tight">
                Want to Be Part of
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Our Story?
                </span>
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                We're always looking for passionate humans who want to create meaningful technology and be part of a
                team that feels like family.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Coffee & Code</h3>
                  <p className="text-blue-100 text-sm">Daily coffee chats where our best ideas are born</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Gamepad2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Game Nights</h3>
                  <p className="text-blue-100 text-sm">Weekly team battles that bring out our competitive spirit</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mountain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Adventure Days</h3>
                  <p className="text-blue-100 text-sm">Quarterly team retreats to recharge and reconnect</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-5 text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 font-bold"
                >
                  Join Our Team
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-5 text-xl rounded-full transition-all duration-500 hover:scale-105 hover:-translate-y-2 font-bold"
                >
                  See Open Roles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-xl border-t border-white/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          </div>
          <div className="container mx-auto px-6 py-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DH</span>
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white">DreamHigh</span>
                    <div className="text-sm text-blue-200">Where Dreams Meet Reality</div>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed max-w-md">
                  We're not just building software - we're crafting experiences, nurturing dreams, and creating a future
                  where technology serves humanity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Connect</h3>
                <ul className="space-y-3 text-blue-200">
                  {["Careers", "Culture", "Blog", "Newsletter"].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase()}`} className="hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {["Li", "Tw", "Gh", "In"].map((social, i) => (
                    <div
                      key={social}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all cursor-pointer"
                    >
                      <span className="text-white font-bold text-sm">{social}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 mt-12 pt-8 text-center text-blue-200">
              <p>&copy; 2024 DreamHigh. All rights reserved. Made with ❤️ by humans who care.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
