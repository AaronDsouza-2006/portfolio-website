import React, { useState, useEffect } from "react";
import { 
  Menu, X, Github, Linkedin, Mail, Phone, ArrowRight, ExternalLink, 
  Briefcase, GraduationCap, Award, BookOpen, Trophy, Star, ArrowLeft, Check, 
  Search, MapPin, Calendar, Code, Cpu, Sparkles, Compass, Lightbulb, Medal,
  Bot, Wrench
} from "lucide-react";

import { 
  personalInfo, skills, workExperience, projects, miniProjects, education, achievements, Project, MiniProject 
} from "./lib/resume-data";
import { courses, courseTags, Course, CourseTag } from "./lib/courses-data";
// @ts-ignore
import profilePic from "./assets/Images/Aaron_pfp.jpg";

// Dynamic asset globbing to ensure all portfolio assets in src/assets/ are compiled & resolved correctly in production
const globbedAssets = (import.meta as any).glob('/src/assets/**/*.{png,jpg,jpeg,svg,gif,mp4,webm}', { eager: true });

function resolveAssetPath(src: string): string {
  if (!src) return "";
  const normalizedKey = src.replace(/\\/g, '/');
  const key = normalizedKey.startsWith('/') ? normalizedKey : `/${normalizedKey}`;
  
  const matchKey = Object.keys(globbedAssets).find(
    (k) => k.toLowerCase() === key.toLowerCase()
  );

  if (matchKey) {
    const module = globbedAssets[matchKey] as any;
    return module?.default || src;
  }
  
  return src;
}

type ViewState = {
  page: 'main' | 'project' | 'courses';
  slug?: string;
  projectType?: 'major' | 'mini';
};

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>({ page: 'main' });
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const [activeNavSection, setActiveNavSection] = useState('home');
  
  // Courses filter/search states
  const [courseSearch, setCourseSearch] = useState('');
  const [selectedCourseTag, setSelectedCourseTag] = useState<CourseTag | 'All' | 'Starred'>('All');

  // Handle active navigation styling based on scroll position in Main Page
  useEffect(() => {
    if (currentView.page !== 'main') return;

    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'education', 'achievements'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNavSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Set dark theme on mount
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
  }, []);

  // Scroll to top when changing views
  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Nav scroll helper
  const scrollToSection = (id: string) => {
    if (currentView.page !== 'main') {
      navigateTo({ page: 'main' });
      // Wait for main page to load, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  // Render Section Header with Section Tag & Colored Title
  const renderSectionHeader = (tag: string, normalTitle: string, highlightTitle: string) => {
    return (
      <div className="text-center mb-12" id={`header-${tag.toLowerCase().replace(" ", "-")}`}>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[var(--text)]">
          {normalTitle} <span className="text-gradient-primary">{highlightTitle}</span>
        </h2>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-[var(--bg)] text-[var(--text)] selection:bg-brand-primary selection:text-white">
      
      {/* ───────────────── HEADER / NAVIGATION ───────────────── */}
      <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md transition-all duration-300" id="main-navigation">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-1 cursor-pointer group"
              onClick={() => navigateTo({ page: 'main' })}
              id="portfolio-logo"
            >
              <span className="text-xl font-bold text-brand-primary group-hover:scale-110 transition-transform">&lt;</span>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-purple-500 bg-clip-text text-transparent">
                Aaron Dsouza
              </span>
              <span className="text-xl font-bold text-brand-bracket text-brand-primary color-primary" style={{ color: "var(--primary)" }}>/&gt;</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {currentView.page === 'main' ? (
                <>
                  <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-sm font-medium transition-colors hover:text-indigo-400 ${activeNavSection === 'home' ? 'text-indigo-400' : 'text-slate-400'}`}
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-sm font-medium transition-colors hover:text-indigo-400 ${activeNavSection === 'projects' ? 'text-indigo-400' : 'text-slate-400'}`}
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-sm font-medium transition-colors hover:text-indigo-400 ${activeNavSection === 'experience' ? 'text-indigo-400' : 'text-slate-400'}`}
                  >
                    Experience
                  </button>
                  <button 
                    onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-sm font-medium transition-colors hover:text-indigo-400 ${activeNavSection === 'education' ? 'text-indigo-400' : 'text-slate-400'}`}
                  >
                    Education
                  </button>
                  <button 
                    onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-sm font-medium transition-colors hover:text-indigo-400 ${activeNavSection === 'achievements' ? 'text-indigo-400' : 'text-slate-400'}`}
                  >
                    Achievements
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setCurrentView({ page: 'main' })}
                  className="text-sm font-medium text-slate-400 hover:text-indigo-400 flex items-center gap-1 transition-colors"
                >
                  ← Back to Home
                </button>
              )}
            </div>

            {/* Navbar actions (empty or removed theme toggle) */}
            <div className="flex items-center gap-4">
            </div>

            {/* Mobile hamburger menu button */}
            <button 
              onClick={() => {
                const navLinks = document.getElementById('mobile-menu');
                navLinks?.classList.toggle('hidden');
              }}
              className="hamburger md:hidden p-2 rounded-md hover:bg-slate-800"
            >
              <div className="w-6 h-0.5 bg-slate-100 mb-1"></div>
              <div className="w-6 h-0.5 bg-slate-100 mb-1"></div>
              <div className="w-6 h-[2px] bg-slate-100"></div>
            </button>
          </div>
        </div>
      </nav>

    {/* ───────────────── MAIN CONTENT VIEW SWITCHER ───────────────── */}
    <main className="flex-grow pt-16" id="main-content">
      {currentView.page === 'main' && renderMainPage()}
      {currentView.page === 'project' && renderProjectDetailPage(currentView.slug, currentView.projectType)}
      {currentView.page === 'courses' && renderCoursesPage()}
    </main>

    </div>
  );

  // Helper helper function to return active navigation section style
  function activeTab(activeSec: string, current: string) {
    return activeSec === current ? "text-indigo-400" : "text-slate-400";
  }

  // ──────────────────────────────────────────────────────────
  // MAIN PORTFOLIO PAGE
  // ──────────────────────────────────────────────────────────
  function renderMainPage() {
    return (
      <div className="space-y-24 pb-20">
        
        {/* HERO SECTION */}
        <section id="home" className="relative overflow-hidden py-6 sm:py-10">
          {/* Background glowing gradients */}
          <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl animate-pulse"></div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              {/* Hero text */}
              <div className="md:col-span-7 space-y-6 text-left" id="hero-intro-text">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text)]">
                  Hi, I'm <br />
                  <span className="text-gradient-primary">{personalInfo.name}</span>
                </h1>
                <h3 className="text-2xl sm:text-3xl font-bold text-indigo-400/90 font-heading">
                  {personalInfo.title}
                </h3>
                <p className="text-lg text-[var(--text-muted)] max-w-xl leading-relaxed whitespace-pre-line">
                  {personalInfo.summary}
                </p>

                {/* Hero Social Links */}
                <div className="flex items-center gap-4 pt-2">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 border border-slate-700 hover:border-indigo-500 rounded-full text-slate-400 hover:text-white transition-all hover:-translate-y-1">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 border border-slate-700 hover:border-indigo-500 rounded-full text-slate-400 hover:text-white transition-all hover:-translate-y-1">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="p-3 bg-slate-800/50 border border-slate-700 hover:border-indigo-500 rounded-full text-slate-400 hover:text-white transition-all hover:-translate-y-1">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href={`tel:${personalInfo.phone}`} className="p-3 bg-slate-800/50 border border-slate-700 hover:border-indigo-500 rounded-full text-slate-400 hover:text-white transition-all hover:-translate-y-1">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

              </div>

              {/* Hero visual image card */}
              <div className="md:col-span-5 flex justify-center" id="hero-visual-card">
                <div className="relative w-72 h-80 sm:w-80 sm:h-96">
                  {/* Glowing backdrop circle */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-25"></div>
                  
                  {/* Outer running ring */}
                  <div className="absolute -inset-4 border border-dashed border-indigo-500/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
                  
                  {/* Image Frame */}
                  <div className="w-full h-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden relative group">
                    <img 
                      src={profilePic} 
                      alt="Aaron Chris Dsouza" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Core Technical Skills - Unified ASCII-Inspired Layout Grid */}
            <div className="mt-16 pt-12 border-t border-slate-800/80 space-y-6 text-left" id="skills-section">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-bold text-white font-heading tracking-tight">Core Technical Skills</h3>
              </div>
              
              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-indigo-500/10 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 shadow-xl" id="skills-unified-container">
                
                {/* Left Side: Robotics Stack */}
                <div className="lg:col-span-7 xl:col-span-8 p-6 md:p-8 space-y-6" id="skills-robotics-stack-pane">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/60">
                    <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
                      <Bot className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-extrabold text-white font-heading tracking-wider uppercase">Robotics Stack</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {skills.roboticsStack.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-2 text-left">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading block">{sub.category}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {sub.items.map((skill) => (
                            <div key={skill.name} className="relative group/skill">
                              <button className="px-2.5 py-1 bg-slate-800/40 border border-slate-700/40 hover:border-indigo-500 hover:bg-slate-800 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-all">
                                {skill.name}
                              </button>
                              {/* Hover Tooltip / Detail Box */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 p-3 bg-slate-950 border border-slate-800 text-[11px] text-slate-300 rounded-xl shadow-2xl opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all duration-200 z-50 pointer-events-none">
                                <p className="font-bold text-white mb-0.5">{skill.name}</p>
                                <p className="leading-relaxed text-slate-400">{skill.description}</p>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Programming Languages & Tools & Frameworks Stacked */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col divide-y divide-slate-800 border-t lg:border-t-0 lg:border-l border-slate-800" id="skills-right-pane">
                  
                  {/* Top Portion: Programming Languages */}
                  <div className="p-6 md:p-8 space-y-4" id="skills-programming-pane">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/60">
                      <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
                        <Code className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-white font-heading tracking-wider uppercase">Programming Languages</h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 text-left pt-1">
                      {skills.programmingLanguages.map((skill) => (
                        <div key={skill.name} className="relative group/skill">
                          <button className="px-3 py-1.5 bg-slate-800/40 border border-slate-700/40 hover:border-indigo-500 hover:bg-slate-800 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-all">
                            {skill.name}
                          </button>
                          {/* Hover Tooltip / Detail Box */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 p-3 bg-slate-950 border border-slate-800 text-[11px] text-slate-300 rounded-xl shadow-2xl opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all duration-200 z-50 pointer-events-none">
                            <p className="font-bold text-white mb-0.5">{skill.name}</p>
                            <p className="leading-relaxed text-slate-400">{skill.description}</p>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Portion: Tools & Frameworks */}
                  <div className="p-6 md:p-8 space-y-4" id="skills-tools-pane">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/60">
                      <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-white font-heading tracking-wider uppercase">Tools & Frameworks</h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 text-left pt-1">
                      {skills.otherTools.map((skill) => (
                        <div key={skill.name} className="relative group/skill">
                          <button className="px-3 py-1.5 bg-slate-800/40 border border-slate-700/40 hover:border-indigo-500 hover:bg-slate-800 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-all">
                            {skill.name}
                          </button>
                          {/* Hover Tooltip / Detail Box */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 p-3 bg-slate-950 border border-slate-800 text-[11px] text-slate-300 rounded-xl shadow-2xl opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all duration-200 z-50 pointer-events-none">
                            <p className="font-bold text-white mb-0.5">{skill.name}</p>
                            <p className="leading-relaxed text-slate-400">{skill.description}</p>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Hover guidance footnote */}
              <div className="pt-2 text-left">
                <p className="text-xs text-slate-500 flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
                  Hover over a skill to see related projects
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {renderSectionHeader("Portfolio", "Projects", "")}

          {/* Major Projects Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-slate-400 tracking-wider uppercase font-heading">Major Projects</h3>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
                Click 'View details' to see more information, images, and videos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="major-projects-grid">
              {projects.map((project) => (
                <div 
                  key={project.slug}
                  onClick={() => navigateTo({ page: 'project', slug: project.slug, projectType: 'major' })}
                  className="bg-slate-900/40 border border-slate-800 hover:border-indigo-500/80 rounded-xl p-6 cursor-pointer transition-all hover:-translate-y-1 flex flex-col justify-between group"
                  id={`major-project-${project.slug}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Cpu className="w-5 h-5 text-indigo-400" />
                    </div>
                    
                    <h4 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors font-heading">
                      {project.title}
                    </h4>
                    
                    <p className="text-[15px] text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center justify-between text-sm text-indigo-400 font-semibold uppercase tracking-wider font-heading">
                      <span>View details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-slate-800/40 flex flex-wrap gap-1.5">
                      {project.tags.map(t => (
                        <span key={t} className="bg-slate-800 text-xs text-slate-300 px-2.5 py-1 rounded font-heading font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Projects Section */}
          <div className="space-y-8 mt-16">
            <h3 className="text-lg font-bold text-slate-400 tracking-wider uppercase font-heading">Mini projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="mini-projects-grid">
              {miniProjects.map((project) => (
                <div 
                  key={project.slug}
                  onClick={() => navigateTo({ page: 'project', slug: project.slug, projectType: 'mini' })}
                  className="bg-slate-900/40 border border-slate-800 hover:border-indigo-500/80 rounded-xl p-6 cursor-pointer transition-all hover:-translate-y-1 flex flex-col justify-between group"
                  id={`mini-project-${project.slug}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Code className="w-5 h-5 text-indigo-400" />
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()} 
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    <h4 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors font-heading">
                      {project.title}
                    </h4>
                    
                    <p className="text-[15px] text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {(project.slug === "robotic-hand" || project.fullDescription) && (
                      <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center justify-between text-sm text-indigo-400 font-semibold uppercase tracking-wider font-heading">
                        <span>View details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                    
                    <div className="pt-4 mt-4 border-t border-slate-800/40 flex flex-wrap gap-1.5">
                      {project.tags.map(t => (
                        <span key={t} className="bg-slate-800 text-xs text-slate-300 px-2.5 py-1 rounded font-heading font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {renderSectionHeader("Timeline", "Professional", "Experience")}

          <div className="space-y-12">
            {workExperience.map((job, idx) => (
              <div 
                key={job.slug}
                className="relative pl-8 sm:pl-10 before:content-[''] before:absolute before:left-3.5 before:top-0 before:bottom-0 before:w-[2px] before:bg-slate-800 before:last:hidden"
                id={`experience-timeline-item-${job.slug}`}
              >
                {/* Custom dot indicator */}
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 flex items-center justify-center shadow-[0_0_0_4px_rgba(99,102,241,0.2)]"></div>

                <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
                  {/* Job Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">{job.title}</h3>
                      <p className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 mt-0.5">
                        <Briefcase className="w-4 h-4" /> {job.company}
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-slate-400 bg-slate-800 border border-slate-700/60 px-3 py-1.5 rounded-full flex items-center gap-1.5 sm:self-start w-fit">
                      <Calendar className="w-4 h-4 text-indigo-400" /> {job.period}
                    </div>
                  </div>

                  {/* Description summary */}
                  <p className="text-[15px] text-slate-400 font-medium leading-relaxed italic">
                    {job.description}
                  </p>

                  {/* Bullet list items */}
                  <ul className="space-y-2 text-[15px] text-slate-400 leading-relaxed">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-indigo-400 text-sm mt-1 flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  {job.skills && (
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span key={skill} className="bg-slate-800/80 text-sm text-slate-200 px-3.5 py-1.5 rounded-full font-heading font-medium border border-slate-700/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & COURSES CTAs */}
        <section id="education" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {renderSectionHeader("Education", "Education", "")}

          <div className="grid grid-cols-1 gap-8">
            {education.map((edu, idx) => (
              <div 
                key={edu.degree}
                className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start justify-between relative overflow-hidden group hover:border-indigo-500/60 transition-colors"
                id={`education-card-${idx}`}
              >
                {/* Decorative layout circle */}
                <div className="absolute top-1/2 right-0 -z-10 w-48 h-48 rounded-full bg-indigo-500/5 blur-2xl"></div>

                <div className="space-y-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl w-fit">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white font-heading">{edu.degree}</h3>
                    <p className="text-base font-semibold text-indigo-400/90">{edu.institution}</p>
                    <p className="text-sm text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" /> {edu.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:items-end justify-between h-full gap-4 md:text-right">
                  <span className="text-sm font-semibold text-slate-400 bg-slate-800 border border-slate-700/60 px-3 py-1.5 rounded-full">
                    {edu.period}
                  </span>
                  <div>
                    {idx === 0 && <span className="block text-xs text-slate-400 uppercase tracking-wider font-bold animate-pulse">Academics</span>}
                    <span className="text-base font-extrabold text-white font-heading">{edu.grade}</span>
                  </div>

                  {/* Custom button only for University of Hong Kong degree (index 0) */}
                  {idx === 0 && (
                    <button 
                      onClick={() => navigateTo({ page: 'courses' })}
                      className="portfolio-btn portfolio-btn-primary py-2 px-4 text-sm font-semibold mt-2"
                      id="view-hku-courses-btn"
                    >
                      <BookOpen className="w-4 h-4" />
                      View Academic Courses
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {renderSectionHeader("Recognitions", "Major Achievements", "& Awards")}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" id="achievements-cards-grid">
            {achievements.map((achievement, idx) => (
              <div 
                key={achievement.title}
                className="bg-slate-900/30 border border-slate-800 hover:border-indigo-500/60 rounded-xl p-6 space-y-4 transition-all hover:-translate-y-1"
                id={`achievement-card-${idx}`}
              >
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg w-fit">
                  {achievement.icon === 'scholarship' && <GraduationCap className="w-5 h-5 text-indigo-400" />}
                  {achievement.icon === 'trophy' && <Trophy className="w-5 h-5 text-indigo-400" />}
                  {achievement.icon === 'certificate' && <Award className="w-5 h-5 text-indigo-400" />}
                  {achievement.icon === 'award' && <Award className="w-5 h-5 text-indigo-400" />}
                  {achievement.icon === 'leadership' && <Compass className="w-5 h-5 text-indigo-400" />}
                  {achievement.icon === 'lightbulb' && <Lightbulb className="w-5 h-5 text-indigo-400" />}
                  {achievement.icon === 'medal' && <Medal className="w-5 h-5 text-indigo-400" />}
                  {achievement.icon === 'training' && <BookOpen className="w-5 h-5 text-indigo-400" />}
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white font-heading text-base">{achievement.title}</h4>
                  <p className="text-[15px] text-slate-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    );
  }

  // ──────────────────────────────────────────────────────────
  // PROJECT DETAIL VIEW (SEPARATE PAGE STATE)
  // ──────────────────────────────────────────────────────────
  function renderProjectDetailPage(slug?: string, type?: 'major' | 'mini') {
    if (!slug) return null;

    let proj: Project | MiniProject | undefined;
    if (type === 'major') {
      proj = projects.find(p => p.slug === slug);
    } else {
      proj = miniProjects.find(p => p.slug === slug);
    }

    if (!proj) return (
      <div className="py-20 text-center space-y-4">
        <p className="text-slate-400">Project not found.</p>
        <button onClick={() => navigateTo({ page: 'main' })} className="portfolio-btn portfolio-btn-primary">
          Return to Home
        </button>
      </div>
    );

    const isMajor = type === 'major';
    const majorProj = proj as Project;

    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-8" id="project-detail-view-container">
        
        {/* Back Button */}
        <button 
          onClick={() => navigateTo({ page: 'main' })}
          className="portfolio-btn portfolio-btn-secondary text-xs flex items-center gap-1.5 py-2 px-4"
          id="back-to-home-btn"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </button>

        {/* Project Header */}
        <div className="space-y-4">
          <span className="section-tag">{isMajor ? "Major Project" : "Mini Project / Experiment"}</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            {proj.title}
          </h1>

          <div className="flex flex-wrap gap-2 pt-1">
            {proj.tags.map(t => (
              <span key={t} className="bg-slate-800 text-sm text-indigo-400 px-3.5 py-1.5 rounded-full font-heading font-medium border border-slate-700/30">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4" id="project-media-links">
          {proj.github && (
            <a 
              href={proj.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="portfolio-btn portfolio-btn-primary flex items-center gap-2"
              id="github-repo-link"
            >
              <Github className="w-5 h-5" /> Code Repository
            </a>
          )}
          {isMajor && majorProj.demo && (
            <a 
              href={majorProj.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="portfolio-btn portfolio-btn-secondary flex items-center gap-2"
              id="live-demo-link"
            >
              <ExternalLink className="w-5 h-5" /> Live Demo
            </a>
          )}
        </div>

        {/* Project Description & Bullets */}
        <div className="space-y-6 text-left pt-4">
          
          {/* Main paragraphs */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-bold text-white font-heading">Project Overview</h3>
            <p className="text-base text-slate-400 leading-relaxed font-sans font-normal">
              {isMajor ? majorProj.fullDescription : (proj.fullDescription || proj.description)}
            </p>

            {proj.bullets && proj.bullets.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 font-heading">Key Accomplishments</h4>
                <ul className="space-y-3 text-[15px] text-slate-400 leading-relaxed">
                  {proj.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="p-0.5 bg-indigo-500/10 text-indigo-400 rounded-full mt-1 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Project Media / Cover */}
        {proj.media && proj.media.length > 0 ? (
          <div className="space-y-6 pt-6 border-t border-slate-800/60 text-left">
            <h3 className="text-xl font-bold text-white font-heading">Media & Demonstration</h3>
            <div className="w-full rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-950 flex flex-col divide-y divide-slate-800/60" id="project-media-container">
              {proj.media.map((item, idx) => {
                if (item.type === 'image') {
                  return (
                    <div key={idx} className="relative group flex flex-col items-center bg-slate-950 p-4">
                      <img 
                        src={resolveAssetPath(item.src)} 
                        alt={item.alt || proj.title} 
                        className="max-w-full h-auto max-h-[600px] object-contain mx-auto rounded-xl shadow-lg border border-slate-800"
                        referrerPolicy="no-referrer"
                      />
                      {item.caption && (
                        <div className="w-full mt-3 text-sm text-slate-400 text-center font-sans">
                          {item.caption}
                        </div>
                      )}
                    </div>
                  );
                } else if (item.type === 'video') {
                  return (
                    <div key={idx} className="relative group flex flex-col items-center bg-slate-950 p-4">
                      <video 
                        controls
                        playsInline
                        poster={item.poster ? resolveAssetPath(item.poster) : undefined}
                        className="max-w-full h-auto max-h-[600px] object-contain mx-auto focus:outline-none rounded-xl shadow-lg border border-slate-800 bg-slate-900"
                      >
                        <source src={resolveAssetPath(item.src)} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {item.caption && (
                        <div className="w-full mt-3 text-sm text-slate-400 text-center font-sans">
                          {item.caption}
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ) : null}

      </div>
    );
  }

  // ──────────────────────────────────────────────────────────
  // HKU COURSES DETAIL VIEW (SEPARATE PAGE STATE)
  // ──────────────────────────────────────────────────────────
  function renderCoursesPage() {
    // Filter and search courses logic
    const filteredCourses = courses.filter((course) => {
      const matchSearch = 
        course.name.toLowerCase().includes(courseSearch.toLowerCase()) || 
        course.code.toLowerCase().includes(courseSearch.toLowerCase());
      
      let matchTag = false;
      if (selectedCourseTag === 'All') {
        matchTag = true;
      } else if (selectedCourseTag === 'Starred') {
        matchTag = !!course.important;
      } else {
        matchTag = course.tag === selectedCourseTag;
      }

      return matchSearch && matchTag;
    });

    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-8" id="courses-view-container">
        
        {/* Back Button */}
        <button 
          onClick={() => navigateTo({ page: 'main' })}
          className="portfolio-btn portfolio-btn-secondary text-xs flex items-center gap-1.5 py-2 px-4"
          id="back-to-education-btn"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </button>

        {/* Header Title */}
        <div className="space-y-2 text-left">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            HKU <span className="text-gradient-primary">Courses</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-xl">
            A comprehensive list of academic courses undertaken during my Bachelor of Engineering (Computer Science) studies at the University of Hong Kong.
          </p>
        </div>

        {/* Filters and search panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm" id="course-filter-controls">
          
          {/* Search Input */}
          <div className="md:col-span-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
            <input 
              type="text"
              value={courseSearch}
              onChange={(e) => setCourseSearch(e.target.value)}
              placeholder="Search code or course name..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
              id="course-search-field"
            />
          </div>

          {/* Tags cloud selection */}
          <div className="md:col-span-8 flex flex-wrap gap-2" id="course-filter-tags">
            <button 
              onClick={() => setSelectedCourseTag('All')}
              className={`px-3.5 py-1.5 text-sm font-semibold rounded-full border transition-all ${
                selectedCourseTag === 'All' 
                  ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' 
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Courses
            </button>
            <button 
              onClick={() => setSelectedCourseTag('Starred')}
              className={`px-3.5 py-1.5 text-sm font-semibold rounded-full border transition-all flex items-center gap-1.5 ${
                selectedCourseTag === 'Starred' 
                  ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' 
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              Starred Courses
            </button>
            {courseTags.map((tag) => (
              <button 
                key={tag}
                onClick={() => setSelectedCourseTag(tag)}
                className={`px-3.5 py-1.5 text-sm font-semibold rounded-full border transition-all ${
                  selectedCourseTag === tag 
                    ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' 
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>

        {/* Courses listing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="courses-cards-grid">
          {filteredCourses.map((course) => (
            <div 
              key={course.code}
              className="bg-slate-900/30 border border-slate-800 hover:border-indigo-500/50 p-4 rounded-xl space-y-3 transition-all duration-200 flex flex-col justify-between text-left shadow-sm hover:shadow-indigo-500/5"
              id={`course-card-${course.code.replace(" ", "-")}`}
            >
              <div className="space-y-2.5">
                {/* Semester and Code */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold text-indigo-400 font-heading uppercase tracking-wider">{course.code}</span>
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full">{course.semester}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading flex items-center gap-1.5 leading-snug">
                    {course.name}
                    {course.important && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 flex-shrink-0" />}
                  </h3>
                  {course.description && (
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {course.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-slate-800/40">
                <span className="bg-slate-800/60 text-[10px] text-slate-300 px-2 py-0.5 rounded font-heading font-medium">
                  {course.tag}
                </span>
              </div>
            </div>
          ))}
          {filteredCourses.length === 0 && (
            <div className="col-span-full text-center py-16 text-slate-500 border border-dashed border-slate-800 rounded-xl">
              No academic courses match your search or filter tags.
            </div>
          )}
        </div>

      </div>
    );
  }
}
