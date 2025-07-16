"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import {
  Leaf,
  Brain,
  Globe,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  TreePine,
  Send,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Check on mount
    checkMobile()

    // Add event listener for resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const backgroundAttachment = isMobile ? "scroll" : "fixed"

  return (
    <div className="min-h-screen text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white text-sm sm:text-base">Avni Kandya</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden w-10 h-10 flex items-center justify-center text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Maximum Blur Background */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
        {/* Blurred Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: backgroundAttachment,
            filter: "blur(8px)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Clear Content */}
        <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto pt-16 sm:pt-0">
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
            <img
              src="/images/profile.jpg"
              alt="Avni Kandya - Software Engineer and AI/ML Researcher"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-wide">
                AI for Environmental Solutions
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg">
              Avni
              <span className="text-green-400"> Kandya</span>
            </h1>
            <h2 className="text-lg sm:text-2xl lg:text-3xl text-white font-light drop-shadow-md">
              Environmental AI/ML Researcher
            </h2>
            <p className="text-base sm:text-xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-md px-4">
              Computer Science Masters student at UC Davis developing innovative softwares and training AI and machine learning solutions for
              climate change, environmental monitoring, and sustainable technology applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-lg">
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 rounded-lg backdrop-blur-sm bg-white/5"
            >
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section - Reduced Blur */}
      <section id="education" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        {/* Blurred Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: backgroundAttachment,
            filter: "blur(6px)",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Clear Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Card className="bg-white/10 border-white/20 shadow-lg backdrop-blur-md">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          Master of Science in Computer Science
                        </h3>
                        <p className="text-green-400 font-medium text-sm sm:text-base">
                          University of California, Davis
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm">Sep 2024 - Mar 2026</p>
                        <p className="text-white/80 text-xs sm:text-sm mt-2">
                          Specializing in AI/ML for Environmental Applications
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 shadow-lg backdrop-blur-md">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          Bachelor of Science in Computer Science Engineering
                        </h3>
                        <p className="text-green-400 font-medium text-sm sm:text-base">
                          Rajiv Gandhi Institute of Research and Technology
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm">Aug 2019 - Jun 2023</p>
                        <p className="text-white/80 text-xs sm:text-sm mt-2">
                          Class Representative | State Level Gymnast
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-3xl transform rotate-3 sm:rotate-6"></div>
              <div className="relative bg-white/10 rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 backdrop-blur-md">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Academic Excellence</h3>
                    <p className="text-white/80 text-sm sm:text-base">Pursuing advanced research in environmental AI</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-green-400">2</div>
                      <div className="text-xs sm:text-sm text-white/70">Degrees</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-green-400">4+</div>
                      <div className="text-xs sm:text-sm text-white/70">Years Study</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Medium Blur */}
      <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        {/* Blurred Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: backgroundAttachment,
            filter: "blur(4px)",
          }}
        />
        <div className="absolute inset-0 bg-black/25" />

        {/* Clear Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Visual */}
            <div className="lg:order-1 order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white/10 rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 backdrop-blur-md">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm sm:text-base">Current Role</h3>
                        <p className="text-green-400 text-xs sm:text-sm">Graduate Research Assistant</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm sm:text-base">Specialization</h3>
                        <p className="text-green-400 text-xs sm:text-sm">Environmental AI/ML</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm sm:text-base">Impact</h3>
                        <p className="text-green-400 text-xs sm:text-sm">Climate Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:order-2 order-1 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Card className="bg-white/10 border-white/20 shadow-lg backdrop-blur-md">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 space-y-1 sm:space-y-0">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">Graduate Research Assistant</h3>
                        <p className="text-green-400 font-medium text-sm sm:text-base">Pasternack Lab, UC Davis</p>
                      </div>
                      <span className="text-xs sm:text-sm text-white/70">Jan 2025 - Present</span>
                    </div>
                    <p className="text-white/80 text-xs sm:text-sm mb-3">
                      Developing AI-enhanced modules for River Architect Project using Python and ArcGIS Pro for
                      environmental restoration planning.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge className="bg-green-500/20 text-green-400 text-xs border-green-400/30">Python</Badge>
                      <Badge className="bg-green-500/20 text-green-400 text-xs border-green-400/30">ArcGIS Pro</Badge>
                      <Badge className="bg-green-500/20 text-green-400 text-xs border-green-400/30">ML</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 shadow-lg backdrop-blur-md">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 space-y-1 sm:space-y-0">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">Operations VC Intern</h3>
                        <p className="text-green-400 font-medium text-sm sm:text-base">Solar Union</p>
                      </div>
                      <span className="text-xs sm:text-sm text-white/70">Jun 2025 - Aug 2025</span>
                    </div>
                    <p className="text-white/80 text-xs sm:text-sm mb-3">
                      Supported technical research and patent investigations for AI-driven robotic systems in solar
                      technology.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge className="bg-green-500/20 text-green-400 text-xs border-green-400/30">AI Research</Badge>
                      <Badge className="bg-green-500/20 text-green-400 text-xs border-green-400/30">Patents</Badge>
                      <Badge className="bg-green-500/20 text-green-400 text-xs border-green-400/30">Solar Tech</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 shadow-lg backdrop-blur-md">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 space-y-1 sm:space-y-0">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">Software Engineer</h3>
                        <p className="text-green-400 font-medium text-sm sm:text-base">Prema Software Solutions</p>
                      </div>
                      <span className="text-xs sm:text-sm text-white/70">Aug 2023 - Jul 2024</span>
                    </div>
                    <p className="text-white/80 text-xs sm:text-sm mb-3">
                      Developed Android app for ICAR across 21 languages for agricultural data collection and analysis.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge className="bg-green-500/20 text-green-400 text-xs border-green-400/30">Java</Badge>
                      <Badge className="bg-green-500/20 text-green-400 text-xs border-green-400/30">Android</Badge>
                      <Badge className="bg-green-500/20 text-green-400 text-xs border-green-400/30">SQLite</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Light Blur */}
      <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        {/* Blurred Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: backgroundAttachment,
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Clear Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>
          </div>

          <div className="space-y-12 sm:space-y-20">
            {/* Project 1 - Left Content, Right Visual */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3">
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">EcoSwap AI</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Developed an image classification model at 'Tech for Good Hackathon' during San Francisco Climate Week
                  that identifies consumer products and recommends eco-friendly, sustainable alternatives for home
                  goods.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">Python</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">TensorFlow</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">ResNet50</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">Computer Vision</Badge>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl transform -rotate-3"></div>
                <Card className="relative bg-white/10 border-white/20 shadow-xl backdrop-blur-md">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-lime-500/20 rounded-lg flex items-center justify-center">
                      <Leaf className="w-16 h-16 sm:w-20 sm:h-20 text-green-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Project 2 - Right Content, Left Visual */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="lg:order-2 space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3">
                  <TreePine className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Forest Fire Predictor</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Built a neural network model for forecasting forest fires using data preprocessing, feature
                  engineering, and environmental data analysis. Utilized diverse datasets including real-time and
                  historical data from NOAA Weather Stations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">Python</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">R</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">PyTorch</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">NOAA Data</Badge>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Research Paper
                  </Button>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-2xl transform rotate-3"></div>
                <Card className="relative bg-white/10 border-white/20 shadow-xl backdrop-blur-md">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-yellow-500/20 rounded-lg flex items-center justify-center">
                      <TreePine className="w-16 h-16 sm:w-20 sm:h-20 text-green-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Project 3 - Left Content, Right Visual */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">River Architect Enhancement</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Enhanced open-access GIS-based software for river restoration planning with machine learning
                  algorithms. Improved hydrodynamic modeling and data visualization capabilities for habitat enhancement
                  projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">Python</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">ArcGIS Pro</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">GIS</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">
                    Environmental Modeling
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Documentation
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl transform -rotate-3"></div>
                <Card className="relative bg-white/10 border-white/20 shadow-xl backdrop-blur-md">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-16 h-16 sm:w-20 sm:h-20 text-green-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - No Blur */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
        {/* Clear Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: backgroundAttachment,
          }}
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Clear Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8 sm:space-y-12 py-16 sm:py-0">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 sm:space-x-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 backdrop-blur-md border border-white/20">
                <Github className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <p className="text-white/80 mt-2 text-xs sm:text-sm">GitHub</p>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 backdrop-blur-md border border-white/20">
                <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <p className="text-white/80 mt-2 text-xs sm:text-sm">LinkedIn</p>
            </a>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 border-white/20 shadow-xl backdrop-blur-md">
            <CardContent className="p-6 sm:p-8">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 backdrop-blur-sm text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 backdrop-blur-sm text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 backdrop-blur-sm resize-none text-sm sm:text-base"
                    placeholder="Let's discuss environmental AI projects or collaboration opportunities..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 sm:py-3 shadow-lg text-sm sm:text-base">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-white/60 text-xs sm:text-sm">
              © 2024 Avni Kandya. Developing AI solutions for environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
        <Button
          size="sm"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-0 shadow-lg backdrop-blur-sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
        </Button>
      </div>
    </div>
  )
}
