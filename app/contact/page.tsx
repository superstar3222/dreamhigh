"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Cloud, Star } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        newsletter: false,
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Address",
      details: ["123 Innovation Drive", "Tech District, San Francisco", "CA 94105, United States"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Toll-free: 1-800-DREAMHI"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: ["hello@dreamhigh.com", "projects@dreamhigh.com", "careers@dreamhigh.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ]

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Tech District",
      phone: "+1 (555) 123-4567",
      isHeadquarters: true,
    },
    {
      city: "New York",
      address: "456 Broadway, Manhattan",
      phone: "+1 (555) 234-5678",
      isHeadquarters: false,
    },
    {
      city: "Austin",
      address: "789 Tech Boulevard, Downtown",
      phone: "+1 (555) 345-6789",
      isHeadquarters: false,
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
                    className={`relative group ${item.name === "Contact" ? "text-yellow-300 font-bold" : "text-white/90 hover:text-white"} transition-all duration-300 font-medium`}
                  >
                    <span style={{ animationDelay: `${index * 0.1}s` }}>{item.name}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-white group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Launch Project
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
                  <span className="block">Get in Touch</span>
                  <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
                    & Reach New Heights
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Ready to transform your ideas into reality? Let's start a conversation about your next project and soar
                together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>

                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                        <p className="text-gray-600">
                          Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              required
                              className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              required
                              className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company"
                            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="service">Service Interested In</Label>
                            <Select onValueChange={(value) => handleSelectChange("service", value)}>
                              <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="web-development">Web Development</SelectItem>
                                <SelectItem value="mobile-apps">Mobile App Development</SelectItem>
                                <SelectItem value="custom-software">Custom Software Development</SelectItem>
                                <SelectItem value="cloud-services">Cloud Services</SelectItem>
                                <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                <SelectItem value="consulting">Consulting</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="budget">Project Budget</Label>
                            <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                              <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-10k">Under $10,000</SelectItem>
                                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                <SelectItem value="over-100k">Over $100,000</SelectItem>
                                <SelectItem value="discuss">Let's Discuss</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Project Details *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your project, goals, and any specific requirements..."
                            rows={5}
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter"
                            name="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => handleSelectChange("newsletter", checked)}
                          />
                          <Label htmlFor="newsletter" className="text-sm text-gray-600">
                            Subscribe to our newsletter for IT insights and industry updates
                          </Label>
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 transition-all duration-300 hover:scale-105"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Sending Message...
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </div>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {contactInfo.map((info, index) => (
                      <Card
                        key={index}
                        className="border-0 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                              {info.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                              {info.details.map((detail, i) => (
                                <p key={i} className="text-gray-600 text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Office Locations */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Offices</h3>
                  <div className="space-y-4">
                    {officeLocations.map((office, index) => (
                      <Card key={index} className="border-0 bg-white hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center mb-1">
                                <h4 className="font-semibold text-gray-800">{office.city}</h4>
                                {office.isHeadquarters && (
                                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                    Headquarters
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                              <p className="text-gray-500 text-sm">{office.phone}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Find Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Visit our headquarters in San Francisco or connect with us virtually from anywhere in the world.
                </p>
              </div>

              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
                    <p className="text-gray-600 mb-4">
                      123 Innovation Drive, Tech District
                      <br />
                      San Francisco, CA 94105
                    </p>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
                <p className="text-gray-600">Quick answers to common questions about our services and process.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">How long does a typical project take?</h3>
                    <p className="text-gray-600 text-sm">
                      Project timelines vary based on complexity and scope. Simple websites take 4-6 weeks, while
                      complex applications can take 3-6 months. We provide detailed timelines during our initial
                      consultation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Do you provide ongoing support?</h3>
                    <p className="text-gray-600 text-sm">
                      Yes, we offer comprehensive maintenance and support packages. This includes security updates, bug
                      fixes, performance optimization, and feature enhancements to keep your solution running smoothly.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">What technologies do you specialize in?</h3>
                    <p className="text-gray-600 text-sm">
                      We work with modern technologies including React, Next.js, Node.js, Python, cloud platforms (AWS,
                      Azure), mobile frameworks (React Native, Flutter), and emerging technologies like AI/ML.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">How do you ensure project quality?</h3>
                    <p className="text-gray-600 text-sm">
                      We follow industry best practices including code reviews, automated testing, continuous
                      integration, and regular client feedback sessions. Our agile methodology ensures transparency and
                      quality throughout development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Build Something Amazing Together</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Ready to turn your vision into reality? Our team is here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Schedule Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Call Us Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DH</span>
                  </div>
                  <span className="text-xl font-bold">DreamHigh</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Elevating careers through innovative IT solutions and comprehensive industry insights.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
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
                <ul className="space-y-2 text-gray-400">
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
                <p className="text-gray-400 mb-4">Stay updated with the latest IT trends and opportunities.</p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">Li</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">Tw</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">Gh</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 DreamHigh. All rights reserved. Elevating careers through innovation.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
