// app/page.tsx
'use client'

/* eslint-disable @next/next/no-img-element, react-hooks/set-state-in-effect */

import { useRef, useState, useEffect, CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { IconType } from 'react-icons'
import { FiMenu, FiX, FiCode, FiBriefcase, FiAward, FiCpu, FiEye, FiBookOpen, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import {
  SiHtml5, SiCss, SiJavascript, SiFastapi, SiTensorflow, SiPython, SiCplusplus, SiGit, SiGithub
} from 'react-icons/si'

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  darkColor?: string;
}

type Theme = {
  name: string;
  image: string;
  accent: string;
  accentStrong: string;
  accentSoft: string;
  accent10: string;
  accent20: string;
  accent30: string;
  accentGlow: string;
  accent2: string;
  accent2_20: string;
}

type Experience = {
  title: string;
  company: string;
  period: string;
  desc: string;
  detailedDesc: string;
  image: string;
  icon: IconType;
  accent: string;
  accentStrong: string;
  accentSoft: string;
  glow: string;
  tint: string;
}

type Achievement = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
}

const skills: Skill[] = [
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss, color: "text-[#1572B6]" },
  { name: "Machine Learning", icon: SiTensorflow, color: "text-[#FF6F00]" },
  { name: "Deep Learning", icon: SiTensorflow, color: "text-[#FF6F00]" },
  { name: "Computer Vision", icon: SiTensorflow, color: "text-[#06B6D4]" },
  { name: "Object Detection", icon: SiTensorflow, color: "text-[#8B5CF6]" },
  { name: "OCR Systems", icon: SiTensorflow, color: "text-[#10B981]" },
  { name: "Multimodal AI", icon: SiTensorflow, color: "text-[#EC4899]" },
  { name: "PyTorch", icon: SiTensorflow, color: "text-[#EE4C2C]" },
  { name: "OpenCV", icon: SiTensorflow, color: "text-[#5C3EE8]" },
  { name: "EasyOCR", icon: SiTensorflow, color: "text-[#14B8A6]" },
  { name: "YOLO", icon: SiTensorflow, color: "text-[#F97316]" },
  { name: "Flask", icon: SiFastapi, color: "text-[#009688]" },
  { name: "NumPy", icon: SiPython, color: "text-[#4DABCF]" },
  { name: "Pandas", icon: SiPython, color: "text-[#150458]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-black",
    darkColor: "text-white",
  },
  { name: "VS Code", icon: SiJavascript, color: "text-[#007ACC]" },
  { name: "Research", icon: SiGithub, color: "text-black", darkColor: "text-white" },
]

const experiences: Experience[] = [
  {
    title: "Researcher - Deep Learning & Computer Vision",
    company: "Bahria University Islamabad",
    period: "2025 - Present",
    desc: "Conducting AI research focused on accessibility, intelligent perception, OCR, object detection, and assistive computer vision systems.",
    detailedDesc: `Focus Areas:
- Model training and evaluation for real-world computer vision problems.
- Dataset preparation, data augmentation, and experiment tracking.
- Object detection, OCR systems, depth estimation, and environmental understanding.
- Human-centered AI and assistive technologies for visually impaired users.
- Multimodal AI systems that combine perception, language, and voice guidance.`,
    image: "ieee-shield.jpeg",
    icon: FiCpu,
    accent: "#06b6d4",
    accentStrong: "#0891b2",
    accentSoft: "#67e8f9",
    glow: "rgba(34, 211, 238, 0.45)",
    tint: "rgba(6, 182, 212, 0.12)",
  },
  {
    title: "AI Lens Project Lead",
    company: "IEEE Department Innovation Challenge",
    period: "2026",
    desc: "Built the AI Lens for Visually Impaired Navigation project with object detection, OCR, depth estimation, weather recognition, and conversational AI.",
    detailedDesc: "Designed and developed an AI-powered navigation assistant for visually impaired individuals. The system provides real-time environmental awareness using computer vision, OCR, object detection, object tracking, obstacle detection, weather classification, depth estimation, voice guidance, and conversational AI. The project won the IEEE Department Innovation Challenge 2026.",
    image: "ieee-certificate.jpeg",
    icon: FiEye,
    accent: "#f97316",
    accentStrong: "#ea580c",
    accentSoft: "#fdba74",
    glow: "rgba(249, 115, 22, 0.45)",
    tint: "rgba(249, 115, 22, 0.12)",
  },
  {
    title: "AI & Computer Vision Developer",
    company: "Academic and Personal Projects",
    period: "2024 - Present",
    desc: "Building practical AI systems with Python, PyTorch, OpenCV, EasyOCR, YOLO, Scikit-Learn, Flask, Ollama, and related ML tooling.",
    detailedDesc: "Developed project pipelines for OCR, image preprocessing, football event analysis, predictive modeling, and multimodal AI prototypes. I focus on transforming research ideas into practical applications, validating models with real data, and presenting results through clear interfaces and usable workflows.",
    image: "me.jpeg",
    icon: FiCode,
    accent: "#10b981",
    accentStrong: "#059669",
    accentSoft: "#6ee7b7",
    glow: "rgba(16, 185, 129, 0.45)",
    tint: "rgba(16, 185, 129, 0.12)",
  },
]

const socials = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/AbdulWasay0", handle: "AbdulWasay0" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/abdulwasay012", handle: "abdulwasay012" },
  { name: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/923175753036", handle: "+92 317 575 3036" },
  { name: "Email", icon: FaEnvelope, url: "mailto:wasayxd001@gmail.com", handle: "wasayxd001@gmail.com" },
]

const themes: Theme[] = [
  {
    name: "cyan",
    image: "me.jpeg",
    accent: "#06b6d4",
    accentStrong: "#0891b2",
    accentSoft: "#22d3ee",
    accent10: "rgba(6, 182, 212, 0.10)",
    accent20: "rgba(6, 182, 212, 0.20)",
    accent30: "rgba(6, 182, 212, 0.30)",
    accentGlow: "rgba(34, 211, 238, 0.55)",
    accent2: "#a855f7",
    accent2_20: "rgba(168, 85, 247, 0.20)",
  },
  {
    name: "darkGrey",
    image: "me.jpeg",
    accent: "#64748b",
    accentStrong: "#475569",
    accentSoft: "#94a3b8",
    accent10: "rgba(100, 116, 139, 0.10)",
    accent20: "rgba(100, 116, 139, 0.20)",
    accent30: "rgba(100, 116, 139, 0.30)",
    accentGlow: "rgba(148, 163, 184, 0.50)",
    accent2: "#1f2937",
    accent2_20: "rgba(31, 41, 55, 0.20)",
  },
  {
    name: "zinc",
    image: "me.jpeg",
    accent: "#8591aa",
    accentStrong: "#4f6587",
    accentSoft: "#a1a1aa",
    accent10: "rgba(113, 113, 122, 0.10)",
    accent20: "rgba(113, 113, 122, 0.20)",
    accent30: "rgba(113, 113, 122, 0.30)",
    accentGlow: "rgba(161, 161, 170, 0.45)",
    accent2: "#3f3f46",
    accent2_20: "rgba(63, 63, 70, 0.20)",
  },
  {
    name: "bottleGreen",
    image: "me.jpeg",
    accent: "#10b981",
    accentStrong: "#059669",
    accentSoft: "#34d399",
    accent10: "rgba(16, 185, 129, 0.10)",
    accent20: "rgba(16, 185, 129, 0.20)",
    accent30: "rgba(16, 185, 129, 0.30)",
    accentGlow: "rgba(52, 211, 153, 0.55)",
    accent2: "#0f766e",
    accent2_20: "rgba(15, 118, 110, 0.20)",
  },
  {
    name: "navyBlue",
    image: "me.jpeg",
    accent: "#3b82f6",
    accentStrong: "#2563eb",
    accentSoft: "#60a5fa",
    accent10: "rgba(59, 130, 246, 0.10)",
    accent20: "rgba(59, 130, 246, 0.20)",
    accent30: "rgba(59, 130, 246, 0.30)",
    accentGlow: "rgba(96, 165, 250, 0.55)",
    accent2: "#1e3a8a",
    accent2_20: "rgba(30, 58, 138, 0.20)",
  },
]

const projects = [
  {
    title: "AI Lens for Visually Impaired Navigation",
    desc: "An AI-powered navigation assistant designed to improve independent mobility for visually impaired individuals through real-time environmental awareness and voice guidance.",
    tech: ["Python", "PyTorch", "YOLOv8", "OpenCV", "EasyOCR", "Ollama"],
    image: "Ai Lens for visually Impaired .png",
    live: "",
    github: "https://github.com/AbdulWasay0",
  },
  {
    title: "AI OCR Reader",
    desc: "An OCR application capable of detecting and extracting text from images using image preprocessing, deep learning, and computer vision techniques.",
    tech: ["Python", "EasyOCR", "OpenCV", "PyTorch"],
    image: "OCR Reader .png",
    live: "",
    github: "https://github.com/AbdulWasay0",
  },
  {
    title: "Football Analysis, Event Detection & Future Prediction System",
    desc: "A football analytics platform for player analysis, event detection, statistics, visualization, and predictive modeling using machine learning.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
    image: "Football Analysis System .png",
    live: "",
    github: "https://github.com/AbdulWasay0",
  },
]

const achievements: Achievement[] = [
  {
    title: "Winner - IEEE Department Innovation Challenge",
    issuer: "IEEE",
    year: "2026",
    description: "Won the IEEE Department Innovation Challenge 2026 for AI Lens for Visually Impaired Navigation, an assistive AI system built around computer vision, OCR, object detection, depth estimation, and voice guidance.",
    image: "ieee-shield.jpeg",
  },
  {
    title: "UI/UX Designing at Khuda Hafiz",
    issuer: "Khuda Hafiz",
    year: "2025",
    description: "UI/UX Design Certification earned during internship at Khuda Hafiz, demonstrating expertise in user-centered design principles and interface development.",
    image: "khuda hafiz.jpeg",
  },
]

export default function Home() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState<Theme>(themes[0])
  const [activeExperience, setActiveExperience] = useState<number | null>(null)
  const expScrollRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Get initial theme preference (fallback to system preference)
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored === 'dark' ? true : (stored === 'light' ? false : prefersDark)
    setDark(isDark)

    // Apply theme to HTML element
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    setMounted(true)
    
    return () => {
    }
  }, [])

  // Track mobile breakpoint for infinite scroll
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Keep DOM in sync with `dark` state and persist preference
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      if (dark) {
        document.documentElement.classList.add('dark')
        document.body.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.body.classList.remove('dark')
      }
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      // ignore
    }
  }, [dark])


  const sections = {
    home: 'home',
    about: 'about',
    research: 'research',
    skills: 'skills',
    projects: 'projects',
    achievements: 'achievements',
    education: 'education',
    contact: 'contact',
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  // Infinite scroll for Experience section
  useEffect(() => {
    const container = expScrollRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth
      const cardWidth = clientWidth < 768 ? clientWidth : 0 // Mobile only
      
      if (cardWidth === 0) return // Desktop view, no looping needed
      
      // Get one card width worth of scroll distance
      const oneCardScroll = cardWidth + 24 // 24px is the gap
      // When scrolled to near the end, jump back to the beginning
      if (scrollLeft >= scrollWidth - clientWidth - 100) {
        container.scrollLeft = oneCardScroll
      }
      
      // When scrolled to the beginning, jump to near the end
      if (scrollLeft <= 100) {
        container.scrollLeft = scrollWidth - clientWidth - oneCardScroll
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const themeStyle = {
    '--accent': activeTheme.accent,
    '--accent-strong': activeTheme.accentStrong,
    '--accent-soft': activeTheme.accentSoft,
    '--accent-10': activeTheme.accent10,
    '--accent-20': activeTheme.accent20,
    '--accent-30': activeTheme.accent30,
    '--accent-glow': activeTheme.accentGlow,
    '--accent-2': activeTheme.accent2,
    '--accent-2-20': activeTheme.accent2_20,
  } as CSSProperties

  const activeExp = activeExperience !== null ? experiences[activeExperience] : null
  const ActiveExperienceIcon = activeExp?.icon ?? FiBriefcase

  const contactCards: Array<{
    type: string
    href?: string
    icon: IconType | null
    title: string
    text: string
    delay: number
    external?: boolean
    isDiv?: boolean
  }> = [
    {
      type: 'email',
      href: 'mailto:wasayxd001@gmail.com',
      icon: FaEnvelope,
      title: 'Email',
      text: 'wasayxd001@gmail.com',
      delay: 0.1,
    },
    {
      type: 'whatsapp',
      href: 'https://wa.me/923175753036',
      icon: FaWhatsapp,
      title: 'WhatsApp',
      text: '+92 317 575 3036',
      delay: 0.2,
      external: true,
    },
    {
      type: 'location',
      icon: FiMapPin,
      title: 'Location',
      text: 'Islamabad, Pakistan',
      delay: 0.3,
      isDiv: true,
    },
  ]

  return (
    <div className="bg-white dark:bg-[#0f172a] text-black dark:text-white transition duration-500" style={themeStyle}>
      {mounted && (
        <>
          <style jsx global>{`
            .exp-scroll {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .exp-scroll::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
            /* Hide scrollbars for horizontal scroll */
            [class*="overflow-x-auto"] {
              scroll-behavior: smooth;
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            [class*="overflow-x-auto"]::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
          `}</style>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/30">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">Abdul Wasay Portfolio</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(sections).filter(([key]) => key !== 'contact').map(([key, ref]) => (
              <button key={key} onClick={() => scrollTo(ref)} className="capitalize hover:text-[color:var(--accent-soft)] transition text-sm font-medium">
                {key}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo(sections.contact)} className="hidden sm:block bg-[color:var(--accent)] px-4 py-2 rounded-full hover:scale-105 transition font-semibold text-sm">
              Contact
            </button>

            {/* Hamburger Menu */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-[#1a1f3a] border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {Object.entries(sections).filter(([key]) => key !== 'contact').map(([key, ref]) => (
                <button key={key} onClick={() => scrollTo(ref)} className="capitalize hover:text-[color:var(--accent-soft)] transition text-left font-medium py-2">
                  {key}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section id={sections.home} className="pt-20 h-screen flex flex-col md:flex-row items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex-1">
          <h2 className="text-2xl">Hello, It&apos;s Me</h2>
          <h1 className="text-5xl font-bold mt-2" style={{ textShadow: '0 0 12px var(--accent-glow)' }}>Abdul Wasay</h1>
          <h3 className="text-2xl text-[color:var(--accent)] mt-2 h-12">
            <TypeAnimation
              sequence={[
                'AI Engineer', 2000,
                'Deep Learning Researcher', 2000,
                'Computer Vision Researcher', 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={80}
              className="text-[color:var(--accent-soft)]"
              style={{ textShadow: '0 0 8px var(--accent-glow)' }}
            />
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
            Computer Science undergraduate passionate about building intelligent AI systems that solve real-world problems, with interests in machine learning, deep learning, computer vision, multimodal AI, and human-centered assistive technologies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => scrollTo(sections.projects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] px-6 py-3 rounded-full font-semibold transition shadow-lg"
            >
              View Projects
            </motion.button>
            <motion.a
              href="/Abdul-Wasay-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition shadow-lg border border-[color:var(--accent-30)] text-[color:var(--accent-soft)]"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="relative">
            {/* Behind shadow effect */}
            <div className="absolute inset-0 -inset-3 rounded-full bg-gradient-to-br from-[color:var(--accent-glow)] to-transparent opacity-60 blur-2xl z-0" />
            
            {/* Profile image container */}
            <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-[color:var(--accent-20)] shadow-[0_0_60px_var(--accent-glow),_inset_0_0_30px_rgba(0,0,0,0.3)]">
              <img src={activeTheme.image} alt="Abdul Wasay portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id={sections.about} className="py-20 px-6 bg-gray-50 dark:bg-[#0a0e27]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-4"
          >
            <p>
              I am a BS Computer Science student at Bahria University Islamabad with a strong passion for Artificial Intelligence and research. My primary interests include Deep Learning, Computer Vision, Machine Learning, OCR Systems, Large Language Models, and Assistive Technologies.
            </p>
            <p>
              I enjoy solving real-world problems using AI and have built intelligent systems focused on accessibility, automation, and multimodal learning.
            </p>
            <p>
              I continuously explore emerging AI technologies and enjoy working on projects that combine research with practical implementation.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                ["Location", "Islamabad, Pakistan"],
                ["University", "Bahria University Islamabad"],
                ["Degree", "BS Computer Science"],
                ["CGPA", "3.44 / 4.00"],
                ["Expected Graduation", "2027"],
                ["Interests", "AI, Computer Vision, Deep Learning"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-[color:var(--accent-20)] bg-white/60 dark:bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">{label}</p>
                  <p className="mt-2 font-semibold text-gray-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research */}
      <section
        id={sections.research}
        className="py-20 px-6"
        onClick={() => setActiveExperience(null)}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Research Experience</h2>

          {activeExperience === null ? (
            <div ref={expScrollRef} className="flex md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none py-4 px-2 -mx-2">
              {(isMobile ? [...experiences, ...experiences, ...experiences] : experiences).map((exp, i) => {
                const actualIndex = i % experiences.length
                const Icon = exp.icon ?? FiBriefcase
                return (
                  <motion.button
                    type="button"
                    key={`exp-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (i % experiences.length) * 0.08 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveExperience(actualIndex)
                    }}
                    className="flex-shrink-0 snap-start w-full md:w-auto text-left rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${exp.tint}, rgba(255,255,255,0.92))`,
                      borderColor: exp.accent,
                      boxShadow: `0 0 0 1px ${exp.tint}, 0 18px 50px rgba(15, 23, 42, 0.08)`,
                    }}
                  >
                    <div
                      className="flex items-start justify-between gap-4 rounded-xl p-4 transition"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.55)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white shadow-lg"
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${exp.accent}, ${exp.accentStrong})`,
                            boxShadow: `0 0 18px ${exp.glow}`,
                          }}
                        >
                          <Icon />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            {exp.title}
                          </h3>
                          <p className="text-xs text-gray-600">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-gray-700">
                      {exp.desc.length > 160 ? `${exp.desc.slice(0, 160)}...` : exp.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[11px] text-gray-700">{exp.period}</span>
                      <span
                        className="text-[11px] font-semibold"
                        style={{ color: exp.accentStrong }}
                      >
                        Tap to expand
                      </span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          ) : (
            <motion.div
              key={activeExp!.company}
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => {
                e.stopPropagation()
                setActiveExperience(null)
              }}
              className="min-h-[420px] rounded-[2rem] border p-6 md:p-10 shadow-2xl cursor-pointer overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, ${activeExp!.tint}, rgba(255,255,255,0.98) 55%)`,
                borderColor: activeExp!.accent,
                boxShadow: `0 0 0 1px ${activeExp!.tint}, 0 30px 80px rgba(15, 23, 42, 0.18)`,
              }}
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white shadow-2xl"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${activeExp!.accent}, ${activeExp!.accentStrong})`,
                        boxShadow: `0 0 24px ${activeExp!.glow}`,
                      }}
                    >
                      <ActiveExperienceIcon />
                    </div>
                    <div>
                      <p
                        className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.8)',
                          color: activeExp!.accentStrong,
                        }}
                      >
                        Active Experience
                      </p>
                      <h3 className="mt-4 text-2xl font-bold text-gray-950">
                        {activeExp!.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-gray-800">
                        {activeExp!.company}
                      </p>
                      <p className="mt-2 text-sm text-gray-900">{activeExp!.period}</p>
                    </div>
                  </div>
                  <div
                    className="rounded-2xl px-4 py-3 text-sm font-semibold"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.72)',
                      color: activeExp!.accentStrong,
                    }}
                  >
                    Click anywhere to return
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.4fr_0.6fr]">
                  <div className="text-base leading-8 text-gray-900 whitespace-pre-line">
  {activeExp!.detailedDesc}
</div>
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(180deg, ${activeExp!.accent}, ${activeExp!.accentStrong})`,
                      boxShadow: `0 0 30px ${activeExp!.glow}`,
                    }}
                  >
                    <img 
                      src={activeExp!.image} 
                      alt={activeExp!.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-1.5 w-6 rounded-full bg-gray-300 dark:bg-gray-700" />
            <span className="h-1.5 w-3 rounded-full bg-[color:var(--accent)]" />
            <span className="h-1.5 w-3 rounded-full bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id={sections.skills} className="py-15 px-6 text-center">
        <h2 className="text-3xl font-bold">Skills and Frameworks</h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            const iconColor = dark && skill.darkColor ? skill.darkColor : skill.color
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className={`text-6xl ${iconColor}`} />
                </motion.div>
                <p className="font-medium text-sm">{skill.name}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Projects */}
      <section id={sections.projects} className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[color:var(--accent-20)] to-[color:var(--accent-2-20)] backdrop-blur border border-white/10 shadow-lg hover:shadow-xl transition group flex flex-col h-full"
            >
              {/* Image Preview */}
              <motion.a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="w-full h-40 bg-black/50 relative overflow-hidden cursor-pointer flex-shrink-0"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-semibold text-sm">View Project</span>
                </div>
              </motion.a>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3 flex-1">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-[color:var(--accent-10)] border border-[color:var(--accent-20)] rounded-full text-[color:var(--accent-soft)]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 items-center">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-1 px-3 bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] text-white font-semibold rounded-lg text-center transition text-xs"
                    >
                      Live
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${project.live ? 'flex-1' : 'w-full'} py-1 px-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg text-center transition text-xs`}
                  >
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section id={sections.achievements} className="py-20 px-6 bg-gray-50 dark:bg-[#0a0e27]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[color:var(--accent-10)] border border-[color:var(--accent-30)] flex items-center justify-center text-3xl text-[color:var(--accent)]">
              <FiAward />
            </div>
            <h2 className="text-4xl font-bold mb-4">Achievements & Certificates</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A curated collection of certificates and recognitions that reflect my work across AI research, accessibility, and practical project development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl bg-white dark:bg-[#020617] border border-[color:var(--accent-30)] shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-52 overflow-hidden bg-black/10">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white">
                    <FiAward />
                    <span>{achievement.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)] mb-2">
                    {achievement.issuer}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id={sections.education} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[color:var(--accent-10)] border border-[color:var(--accent-30)] flex items-center justify-center text-3xl text-[color:var(--accent)]">
              <FiBookOpen />
            </div>
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Academic foundation behind my AI, computer vision, and research work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[color:var(--accent-30)] bg-white dark:bg-[#020617] p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Bahria University Islamabad
                </p>
                <h3 className="mt-3 text-2xl font-bold">BS Computer Science</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">2023 - Expected 2027</p>
              </div>
              <div className="rounded-xl bg-[color:var(--accent-10)] border border-[color:var(--accent-20)] px-5 py-4 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">CGPA</p>
                <p className="mt-2 text-2xl font-bold">3.44 / 4.00</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Artificial Intelligence", "Deep Learning", "Computer Vision", "Machine Learning", "Human-Centered AI", "Assistive Technologies", "Open Source", "Research"].map((interest) => (
                <span key={interest} className="rounded-full bg-[color:var(--accent-10)] border border-[color:var(--accent-20)] px-3 py-1 text-xs font-semibold text-[color:var(--accent-soft)]">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id={sections.contact} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I&apos;m open to AI internships, junior AI engineer roles, research collaboration, and computer vision projects with real-world impact.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {contactCards.map((card, i) => {
              const CardIcon = card.icon as IconType | null
              
              if (card.isDiv) {
                return (
                  <motion.div
                    key={`contact-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: card.delay }}
                    className="w-full p-6 rounded-lg bg-white dark:bg-[#020617] border border-[color:var(--accent-30)] shadow-lg"
                  >
                    <div className="text-3xl text-[color:var(--accent)] mb-3">{CardIcon ? <CardIcon /> : null}</div>
                    <h3 className="font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{card.text}</p>
                  </motion.div>
                )
              }
              
              return (
                <motion.a
                  key={`contact-${i}`}
                  href={card.href!}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full p-6 rounded-lg bg-white dark:bg-[#020617] border border-[color:var(--accent-30)] hover:border-[color:var(--accent)] transition shadow-lg"
                >
                  <div className="text-3xl text-[color:var(--accent)] mb-3">{CardIcon ? <CardIcon /> : null}</div>
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{card.text}</p>
                </motion.a>
              )
            })}
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex items-center justify-center gap-6">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[color:var(--accent-20)] flex items-center justify-center text-2xl text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white transition"
                    aria-label={social.name}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <motion.a
              href="mailto:wasayxd001@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] px-8 py-3 rounded-full shadow-lg font-semibold transition"
            >
              Send Email
            </motion.a>

            <motion.a
              href="https://wa.me/923175753036?text=Hello%20Abdul%20Wasay%21%20we%20want%20to%20collaborate%20with%20you."
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-full shadow-lg font-semibold transition text-white hover:brightness-110"
              style={{ backgroundImage: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
            >
              Contact on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black dark:bg-[#020617] border-t border-[color:var(--accent-20)] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-bold mb-4 text-[color:var(--accent)]">Portfolio</h3>
              <p className="text-sm text-gray-400">
                An aspiring AI Engineer and researcher focused on deep learning, computer vision, accessibility, and practical AI systems.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-[color:var(--accent)]">Quick Links</h3>
              <ul className="space-y-2">
                {Object.entries(sections).map(([key, ref]) => (
                  <li key={key}>
                    <button
                      onClick={() => scrollTo(ref)}
                      className="text-sm text-gray-400 hover:text-[color:var(--accent-soft)] transition capitalize"
                    >
                      {key}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6 text-[color:var(--accent)]">Follow</h3>
              <div className="space-y-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-[color:var(--accent-soft)] transition"
                      aria-label={social.name}
                    >
                      <div className="text-3xl">
                        <Icon />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{social.name}</span>
                        <span className="text-xs text-gray-500">{social.handle}</span>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-[color:var(--accent-10)] my-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-gray-500">
              Copyright {new Date().getFullYear()} Abdul Wasay. All rights reserved.
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={() => scrollTo(sections.home)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--accent-10)] hover:bg-[color:var(--accent-20)] text-[color:var(--accent-soft)] text-sm transition"
            >
              Back to Top
            </motion.button>
          </motion.div>
        </div>
      </footer>

        </>
      )}
    </div>
  )
}
