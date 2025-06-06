"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  Globe,
  ArrowRight,
  Cloud,
  LineChart,
  Shield,
  Layers,
  Cpu,
  Server,
  Workflow,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeAccordion, setActiveAccordion] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-expand accordion items based on scroll position
  useEffect(() => {
    const accordionSections = document.querySelectorAll("[data-accordion-section]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.getAttribute("data-accordion-section")
            if (sectionId) {
              setActiveAccordion(sectionId)
            }
          }
        })
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -20% 0px",
      },
    )

    accordionSections.forEach((section) => observer.observe(section))

    return () => {
      accordionSections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const services = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your unique business requirements and drive operational efficiency.",
      icon: <Code className="h-10 w-10 text-white" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-blue-500 to-blue-600",
      features: [
        "Enterprise Applications",
        "API Development & Integration",
        "Database Design & Optimization",
        "Cloud-Native Solutions",
        "Legacy System Modernization",
        "DevOps Implementation",
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET", "AWS", "Azure"],
      process: [
        {
          id: "discovery",
          title: "Discovery & Planning",
          description: "We analyze your business needs and develop a comprehensive roadmap for your software solution.",
        },
        {
          id: "design",
          title: "Design & Architecture",
          description:
            "Our architects design a scalable, secure, and efficient system architecture tailored to your requirements.",
        },
        {
          id: "development",
          title: "Development & Testing",
          description:
            "Using agile methodologies, we develop and rigorously test your software to ensure quality and reliability.",
        },
        {
          id: "deployment",
          title: "Deployment & Support",
          description:
            "We handle deployment and provide ongoing maintenance and support to ensure optimal performance.",
        },
      ],
    },
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications that deliver exceptional user experiences across all devices.",
      icon: <Globe className="h-10 w-10 text-white" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-purple-500 to-purple-600",
      features: [
        "Responsive Web Design",
        "E-commerce Platforms",
        "Progressive Web Apps",
        "Content Management Systems",
        "SEO Optimization",
        "Web Performance Tuning",
      ],
      technologies: ["React", "Next.js", "Vue.js", "Angular", "WordPress", "Shopify", "Tailwind CSS"],
      process: [
        {
          id: "ux-design",
          title: "UX/UI Design",
          description:
            "We create intuitive, engaging user interfaces that align with your brand and business objectives.",
        },
        {
          id: "frontend",
          title: "Frontend Development",
          description:
            "Our developers build responsive, interactive frontends using modern frameworks and best practices.",
        },
        {
          id: "backend",
          title: "Backend Integration",
          description:
            "We develop robust backend systems that power your web application with security and scalability.",
        },
        {
          id: "testing",
          title: "Testing & Optimization",
          description:
            "Comprehensive testing ensures your website performs flawlessly across all devices and browsers.",
        },
      ],
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      icon: <Smartphone className="h-10 w-10 text-white" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-green-500 to-green-600",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
      process: [
        {
          id: "strategy",
          title: "App Strategy",
          description: "We define your app's core functionality, target audience, and competitive advantage.",
        },
        {
          id: "ui-design",
          title: "UI/UX Design",
          description: "Our designers create intuitive, engaging interfaces that follow platform-specific guidelines.",
        },
        {
          id: "app-development",
          title: "Development",
          description:
            "We build your app using either native or cross-platform technologies based on your requirements.",
        },
        {
          id: "app-testing",
          title: "Testing & Deployment",
          description:
            "Rigorous testing across devices ensures your app is ready for App Store and Google Play submission.",
        },
      ],
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      description: "Scalable, secure cloud solutions that optimize your infrastructure and reduce operational costs.",
      icon: <Cloud className="h-10 w-10 text-white" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-blue-400 to-cyan-500",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Serverless Architecture",
        "Microservices",
        "Containerization",
        "Cloud Cost Optimization",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CloudFormation"],
      process: [
        {
          id: "assessment",
          title: "Assessment",
          description:
            "We evaluate your current infrastructure and develop a cloud migration or optimization strategy.",
        },
        {
          id: "architecture",
          title: "Architecture Design",
          description: "Our cloud architects design a scalable, secure, and cost-effective cloud infrastructure.",
        },
        {
          id: "implementation",
          title: "Implementation",
          description: "We implement your cloud solution with minimal disruption to your business operations.",
        },
        {
          id: "monitoring",
          title: "Monitoring & Management",
          description: "Continuous monitoring and optimization ensure your cloud infrastructure performs optimally.",
        },
      ],
    },
    {
      id: "data-analytics",
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights that drive informed business decisions.",
      icon: <LineChart className="h-10 w-10 text-white" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-amber-500 to-orange-600",
      features: [
        "Data Warehousing",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization",
        "Big Data Processing",
        "Machine Learning Integration",
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "Hadoop", "Spark", "TensorFlow"],
      process: [
        {
          id: "data-assessment",
          title: "Data Assessment",
          description: "We analyze your data sources and requirements to develop a comprehensive analytics strategy.",
        },
        {
          id: "data-engineering",
          title: "Data Engineering",
          description: "Our engineers build robust data pipelines that transform raw data into structured formats.",
        },
        {
          id: "analytics-implementation",
          title: "Analytics Implementation",
          description:
            "We implement analytics solutions that provide meaningful insights into your business operations.",
        },
        {
          id: "visualization",
          title: "Visualization & Reporting",
          description: "Interactive dashboards and reports make complex data accessible and actionable.",
        },
      ],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security solutions and best practices.",
      icon: <Shield className="h-10 w-10 text-white" />,
      image: "/placeholder.svg?height=600&width=800",
      color: "from-red-500 to-red-600",
      features: [
        "Security Assessment",
        "Penetration Testing",
        "Compliance Management",
        "Security Architecture",
        "Incident Response",
        "Security Training",
      ],
      technologies: ["OWASP", "NIST", "ISO 27001", "SOC 2", "GDPR", "HIPAA"],
      process: [
        {
          id: "security-assessment",
          title: "Security Assessment",
          description: "We identify vulnerabilities and security gaps in your systems and processes.",
        },
        {
          id: "strategy-development",
          title: "Strategy Development",
          description:
            "Our security experts develop a comprehensive security strategy aligned with your business needs.",
        },
        {
          id: "security-implementation",
          title: "Implementation",
          description: "We implement security controls and technologies to protect your digital assets.",
        },
        {
          id: "security-monitoring",
          title: "Monitoring & Response",
          description: "Continuous monitoring and rapid incident response minimize the impact of security threats.",
        },
      ],
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
        {/* Navigation */}
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
                    className={`relative group ${item.name === "Services" ? "text-yellow-300 font-bold" : "text-white/90 hover:text-white"} transition-all duration-300 font-medium`}
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
                  <span className="block">Services That</span>
                  <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
                    Elevate Your Business
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Comprehensive IT solutions tailored to elevate your business and accelerate your career growth
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview with Consistent Heights */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Link key={index} href={`#${service.id}`} className="group">
                  <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-1 service-card">
                    <CardContent className="p-4 text-center service-card-content">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-white line-clamp-2">{service.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className={`mb-24 scroll-mt-24 ${index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}`}
                data-accordion-section={service.id}
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden group">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center m-6`}
                        >
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{service.title}</h2>
                    <p className="text-lg text-blue-100 mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-white">Key Features</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                            <span className="text-blue-100">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-white">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/20 text-white border-white/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className={`bg-gradient-to-r ${service.color} text-white hover:opacity-90`}>
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Our Process</h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    value={activeAccordion === service.id ? service.process[0]?.id : ""}
                    onValueChange={(value) => {
                      if (activeAccordion === service.id) {
                        // Find the next item in the process
                        const currentIndex = service.process.findIndex((step) => step.id === value)
                        const nextIndex = (currentIndex + 1) % service.process.length
                        setTimeout(() => {
                          setActiveAccordion(service.process[nextIndex]?.id || "")
                        }, 2000)
                      }
                    }}
                  >
                    {service.process.map((step, i) => (
                      <AccordionItem key={i} value={step.id} className="border-white/20">
                        <AccordionTrigger className="text-lg font-medium hover:text-yellow-300 text-white">
                          {step.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-blue-100">{step.description}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose DreamHigh</h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                We combine technical expertise with industry insights to deliver exceptional results that exceed
                expectations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 service-card">
                <CardContent className="p-6 text-center service-card-content">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <Layers className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">End-to-End Solutions</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    From concept to deployment and beyond, we handle every aspect of your technology needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 service-card">
                <CardContent className="p-6 text-center service-card-content">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <Cpu className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Technical Excellence</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Our team of experts stays at the forefront of technology to deliver cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 service-card">
                <CardContent className="p-6 text-center service-card-content">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <Server className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Scalable Solutions</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We build with growth in mind, ensuring your technology can scale with your business.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 service-card">
                <CardContent className="p-6 text-center service-card-content">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <Workflow className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Agile Methodology</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Our iterative approach ensures flexibility, transparency, and continuous improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready to Transform Your Digital Presence?
                </h2>
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Let's discuss how our services can help you achieve your business goals and elevate your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm"
                >
                  Schedule Consultation
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
