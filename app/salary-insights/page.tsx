"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, DollarSign, Briefcase, GraduationCap, Clock, ArrowUpRight, Info, Cloud, Star } from "lucide-react"
import Link from "next/link"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts"

export default function SalaryInsightsPage() {
  // Salary data by role
  const salaryData = [
    { role: "Software Engineer", junior: 75000, mid: 110000, senior: 150000, change: 8.5 },
    { role: "Frontend Developer", junior: 70000, mid: 105000, senior: 140000, change: 7.2 },
    { role: "Backend Developer", junior: 80000, mid: 115000, senior: 155000, change: 9.1 },
    { role: "Full Stack Developer", junior: 85000, mid: 120000, senior: 160000, change: 10.3 },
    { role: "DevOps Engineer", junior: 90000, mid: 125000, senior: 165000, change: 12.5 },
    { role: "Data Scientist", junior: 95000, mid: 130000, senior: 175000, change: 14.2 },
    { role: "UI/UX Designer", junior: 65000, mid: 95000, senior: 130000, change: 6.8 },
    { role: "Product Manager", junior: 85000, mid: 120000, senior: 170000, change: 9.7 },
  ]

  // Salary trends over time
  const trendData = [
    { year: "2019", salary: 95000 },
    { year: "2020", salary: 102000 },
    { year: "2021", salary: 110000 },
    { year: "2022", salary: 121000 },
    { year: "2023", salary: 135000 },
    { year: "2024", salary: 148000 },
  ]

  // Salary by location
  const locationData = [
    { name: "San Francisco", salary: 160000 },
    { name: "New York", salary: 150000 },
    { name: "Seattle", salary: 145000 },
    { name: "Austin", salary: 130000 },
    { name: "Boston", salary: 135000 },
    { name: "Chicago", salary: 125000 },
    { name: "Denver", salary: 120000 },
    { name: "Atlanta", salary: 115000 },
  ]

  // Negotiation tips
  const negotiationTips = [
    {
      title: "Research Industry Standards",
      content:
        "Before entering negotiations, research salary ranges for your role, experience level, and location. Use resources like Glassdoor, LinkedIn Salary, and industry reports to gather data points.",
    },
    {
      title: "Highlight Your Value",
      content:
        "Prepare specific examples of how you've contributed to previous employers or projects. Quantify your achievements with metrics when possible to demonstrate your tangible value.",
    },
    {
      title: "Consider Total Compensation",
      content:
        "Look beyond base salary to evaluate the entire compensation package, including bonuses, equity, retirement benefits, health insurance, flexible work arrangements, and professional development opportunities.",
    },
    {
      title: "Practice Your Delivery",
      content:
        "Rehearse your negotiation conversation to build confidence. Prepare responses to potential objections and practice maintaining a professional, collaborative tone throughout the discussion.",
    },
    {
      title: "Be Patient and Flexible",
      content:
        "Negotiations may take time. Be prepared to have multiple conversations and consider creative solutions if there are constraints on base salary, such as performance bonuses or review timelines.",
    },
  ]

  // In-demand skills
  const inDemandSkills = [
    { skill: "Cloud Computing", demand: 95, growth: 15.3 },
    { skill: "AI/Machine Learning", demand: 92, growth: 18.7 },
    { skill: "DevOps", demand: 90, growth: 14.2 },
    { skill: "Cybersecurity", demand: 88, growth: 16.5 },
    { skill: "Data Science", demand: 85, growth: 13.8 },
    { skill: "React/Next.js", demand: 82, growth: 12.4 },
    { skill: "Mobile Development", demand: 80, growth: 10.9 },
    { skill: "Blockchain", demand: 75, growth: 9.6 },
  ]

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-sm p-4 border border-white/20 shadow-lg rounded-md">
          <p className="font-medium text-gray-800">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: ${entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

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
                    className={`relative group ${item.name === "Insights" ? "text-yellow-300 font-bold" : "text-white/90 hover:text-white"} transition-all duration-300 font-medium`}
                  >
                    <span style={{ animationDelay: `${index * 0.1}s` }}>{item.name}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-white group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Launch Career
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
                  <span className="block">Salary Insights</span>
                  <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
                    That Elevate Careers
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Comprehensive data and analysis to help you navigate your career path and maximize your earning
                potential
              </p>
            </div>
          </div>
        </section>

        {/* Salary Overview */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-white flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-yellow-400" />
                    Average IT Salary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end space-x-2">
                    <span className="text-3xl font-bold text-white">$125,000</span>
                    <span className="text-green-400 flex items-center text-sm font-medium pb-1">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      9.2%
                    </span>
                  </div>
                  <p className="text-sm text-blue-200 mt-1">Annual average across all roles</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-white flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-purple-400" />
                    Highest Paying Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end space-x-2">
                    <span className="text-3xl font-bold text-white">Data Scientist</span>
                  </div>
                  <p className="text-sm text-blue-200 mt-1">$175,000 average for senior positions</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-white flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                    Fastest Growing Field
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end space-x-2">
                    <span className="text-3xl font-bold text-white">AI/ML</span>
                    <span className="text-green-400 flex items-center text-sm font-medium pb-1">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      18.7%
                    </span>
                  </div>
                  <p className="text-sm text-blue-200 mt-1">Year-over-year growth in demand</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Salary by Role Chart */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Average Salaries by Role</h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Compare compensation across different IT positions and experience levels
                </p>
              </div>

              <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={salaryData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 70,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis
                          dataKey="role"
                          angle={-45}
                          textAnchor="end"
                          height={80}
                          tick={{ fontSize: 12, fill: "white" }}
                        />
                        <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} tick={{ fill: "white" }} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="junior" name="Junior" fill="#f97316" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="mid" name="Mid-Level" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="senior" name="Senior" fill="#0f766e" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trends and Projections */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Salary Trends & Projections</h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Historical data and future projections to help you understand market dynamics
                </p>
              </div>

              <Tabs defaultValue="trends" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-white/10 backdrop-blur-sm border border-white/20">
                  <TabsTrigger value="trends" className="text-white data-[state=active]:bg-white/20">
                    Historical Trends
                  </TabsTrigger>
                  <TabsTrigger value="location" className="text-white data-[state=active]:bg-white/20">
                    Salary by Location
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="trends">
                  <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={trendData}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 20,
                              bottom: 20,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis dataKey="year" tick={{ fill: "white" }} />
                            <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} tick={{ fill: "white" }} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <defs>
                              <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1} />
                              </linearGradient>
                            </defs>
                            <Area
                              type="monotone"
                              dataKey="salary"
                              name="Average IT Salary"
                              stroke="#0ea5e9"
                              fillOpacity={1}
                              fill="url(#colorSalary)"
                            />
                            <Line
                              type="monotone"
                              dataKey="salary"
                              name="Average IT Salary"
                              stroke="#0ea5e9"
                              strokeWidth={3}
                              dot={{ r: 6 }}
                              activeDot={{ r: 8 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-start">
                    <Info className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Projected Growth</h4>
                      <p className="text-blue-100 text-sm">
                        Based on current trends, IT salaries are projected to increase by 8-12% annually over the next
                        three years, with specialized roles in AI, cybersecurity, and cloud computing seeing the highest
                        growth rates.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="location">
                  <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={locationData}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 20,
                              bottom: 20,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis dataKey="name" tick={{ fill: "white" }} />
                            <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} tick={{ fill: "white" }} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Bar dataKey="salary" name="Average Salary" fill="#0f766e" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-start">
                    <Info className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Cost of Living Adjustment</h4>
                      <p className="text-blue-100 text-sm">
                        When comparing salaries across locations, consider the cost of living differences. A $120,000
                        salary in Austin may provide a higher standard of living than $150,000 in San Francisco or New
                        York.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* In-Demand Skills */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">In-Demand Skills</h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Skills that command premium salaries and are highly sought after in the current market
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inDemandSkills.map((skill, index) => (
                  <Card
                    key={index}
                    className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-white">{skill.skill}</h3>
                          <div className="flex items-center mt-1">
                            <span className="text-green-400 flex items-center text-sm font-medium">
                              <ArrowUpRight className="h-4 w-4 mr-1" />
                              {skill.growth}% growth
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                            {skill.demand}
                          </div>
                          <span className="text-xs text-blue-200 ml-2">
                            Demand
                            <br />
                            Score
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 w-full bg-white/20 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                          style={{ width: `${skill.demand}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Negotiation Tips */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Salary Negotiation Tips</h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Expert advice to help you maximize your compensation package
                </p>
              </div>

              <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {negotiationTips.map((tip, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                        <AccordionTrigger className="text-lg font-medium hover:text-yellow-300 text-white">
                          {tip.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-blue-100">{tip.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education and Experience Impact */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Impact of Education & Experience</h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  How qualifications and experience affect your earning potential
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Education</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-white">Bachelor's Degree</span>
                          <span className="text-blue-200">Base Salary</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-blue-500 h-2.5 rounded-full w-[70%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-white">Master's Degree</span>
                          <span className="text-blue-200">+15-20%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full w-[85%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-white">PhD</span>
                          <span className="text-blue-200">+25-35%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full w-[100%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-white">Certifications</span>
                          <span className="text-blue-200">+5-15%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-blue-500 h-2.5 rounded-full w-[78%]"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white mr-4">
                        <Clock className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Experience</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-white">Entry Level (0-2 years)</span>
                          <span className="text-blue-200">Base Salary</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-purple-500 h-2.5 rounded-full w-[60%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-white">Mid-Level (3-5 years)</span>
                          <span className="text-blue-200">+30-50%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full w-[80%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-white">Senior (6-9 years)</span>
                          <span className="text-blue-200">+70-100%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-pink-600 h-2.5 rounded-full w-[90%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-white">Lead/Architect (10+ years)</span>
                          <span className="text-blue-200">+100-150%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-pink-700 h-2.5 rounded-full w-[100%]"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Elevate Your Career?</h2>
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Let our experts help you navigate the IT job market and maximize your earning potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Schedule Career Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm"
                >
                  Download Salary Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-xl border-t border-white/20 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DH</span>
                  </div>
                  <span className="text-xl font-bold">DreamHigh</span>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Elevating careers through innovative IT solutions and comprehensive industry insights.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-blue-200">
                  <li>
                    <Link href="/services#custom-software" className="hover:text-white transition-colors">
                      Custom Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#web-development" className="hover:text-white transition-colors">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#mobile-development" className="hover:text-white transition-colors">
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#cloud-services" className="hover:text-white transition-colors">
                      Cloud Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-blue-200">
                  <li>
                    <Link href="/salary-insights" className="hover:text-white transition-colors">
                      Salary Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-white transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <p className="text-blue-200 mb-4">Stay updated with the latest IT trends and opportunities.</p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">Li</span>
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">Tw</span>
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">Gh</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-200">
              <p>&copy; 2024 DreamHigh. All rights reserved. Soaring to new heights through innovation.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
