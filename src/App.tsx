import React from 'react';
import { 
  UserPlus, 
  QrCode, 
  TrendingUp, 
  Calendar, 
  MessageSquare, 
  Bell, 
  FileText, 
  LayoutDashboard,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Scene } from './components/Scene';

const features = [
  {
    title: "Youth Registration",
    description: "Easy digital signup with detailed profiles, demographics, and interest tracking.",
    icon: UserPlus,
  },
  {
    title: "QR Youth ID Generation",
    description: "Instant digital IDs for fast event check-ins and member verification.",
    icon: QrCode,
  },
  {
    title: "Engagement Scoring",
    description: "Automated participation rating based on attendance and activity history.",
    icon: TrendingUp,
  },
  {
    title: "Event & Attendance",
    description: "Post events, manage sign-ups, and record attendance via QR scans.",
    icon: Calendar,
  },
  {
    title: "Chatbot Assistant",
    description: "NLP-powered AI assistant to answer FAQs and guide users through the platform.",
    icon: MessageSquare,
  },
  {
    title: "Targeted Notifications",
    description: "Smart alerts sent to members based on their specific interests and likelihood of engagement.",
    icon: Bell,
  },
  {
    title: "Auto Report Generation",
    description: "Automatic documentation with charts and summaries for barangay monitoring.",
    icon: FileText,
  },
  {
    title: "Directory & Dashboard",
    description: "Comprehensive view of all registered users with advanced sorting and search.",
    icon: LayoutDashboard,
  },
];

const objectives = [
  "Present comparative engagement across SK activities through dashboard visualizations.",
  "Develop a smart application that helps Sangguniang Kabataan leaders engage with the youth using Chatbot.",
  "Evaluate acceptance and effectiveness based on the UTAUT model (Performance, Effort, Social Influence)."
];

const highlights = [
  {
    url: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.15752-9/598785099_1906410523290419_2376670939581706112_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEg4k_S3BtP1BeKarqMm1cvftJ1srN1v1J-0nWys3W_UjM60hyoI68xW8dEJ61uiMBjjqv7Aljt5M5iToDLe0Xy&_nc_ohc=e6MBcVDZP40Q7kNvwHCgnni&_nc_oc=AdlFjOX33kBgGst6CbkQvW6-tgNZKnY8Pq4vM2OUKT3bXY4_Kxu_NqoJ5apzAopKANs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_ss=8&oh=03_Q7cD4wETQn70lXkNKfy5GCEhIgDAUUnU9dHYF-TeeBgVXd6ERg&oe=69DF20DD",
    caption: "Digital QR Verification in Action"
  },
  {
    url: "https://scontent.fcgy2-4.fna.fbcdn.net/v/t1.15752-9/611201158_1431444001659228_7241598378663434560_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGmFPtL1vXYJKELom8fqJWRSL798-XOzB9Ivv3z5c7MH16Np8cULKngKnb8MS9HilqPbv3ka78GwQTkSy0kpcX5&_nc_ohc=zlH1jsDfmycQ7kNvwGtVwKL&_nc_oc=AdlkbGBTlOLJssw210Ud4g8aZ8KbQlookcy2GHVoc1d3MXRTCgtMpQQF78IyexhIv2I&_nc_zt=23&_nc_ht=scontent.fcgy2-4.fna&_nc_ss=8&oh=03_Q7cD4wH6qiyRDJZxeeMfmAyW6ew3wGGkI8rRkPAwzkQXXiyJpA&oe=69DF2E64",
    caption: "Seamless Event Check-ins"
  },
  {
    url: "https://scontent.fcgy2-4.fna.fbcdn.net/v/t1.15752-9/598698202_1891284968150611_6558639273960231269_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHevN3YXBycjcPzwCW7vXPv0AV8uBSVw83QBXy4FJXDzbAS7pRq-M5K6LlyRVa1e1LT4R1faKqSksPXTDH9XNYe&_nc_ohc=aeqR8CXuYNkQ7kNvwHePAqK&_nc_oc=Adk2HcNvF18dM--R0hVtDjedDJ2bJlwQcSd1wvmne4M9e64_5ojNapbFZDXdxFUg3rg&_nc_zt=23&_nc_ht=scontent.fcgy2-4.fna&_nc_ss=8&oh=03_Q7cD4wERbavW-SkOYjw92ovYfgXyOkDHe3ESKW0jcPcBYO8tMw&oe=69DF26AB",
    caption: "Youth General Assembly 2025"
  },
  {
    url: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.15752-9/610777013_1586949222330280_7038115126116895149_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEN36Z2X5qCwrRi-BApNvwgDTzyZucwWsYNPPJm5zBaxlcEGVzLK2jnqzYdkwYqcABMkjAnHT24Whjh_sUDRYTR&_nc_ohc=bKOGTw9TzTgQ7kNvwHBK4kc&_nc_oc=Adl5Hv5rUg_0yFpwdOT_8disO9tWXeoukNy59wNJE-_5olc9HO6S4tqlnPMUbJIjUmU&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_ss=8&oh=03_Q7cD4wGfLlzinDtiuKo0g-Ox0Dzv3aipYAKXP6eDocOAo078ig&oe=69DF1736",
    caption: "Official Platform Certification"
  }
];

const programmers = [
  {
    name: "Vynce Ian Oani",
    role: "Lead Developer",
    image: "https://picsum.photos/seed/vynce/400/400",
    bio: "Specializing in NLP and Full-stack development."
  },
  {
    name: "Team Member 1",
    role: "UI/UX Designer",
    image: "https://picsum.photos/seed/member1/400/400",
    bio: "Crafting intuitive experiences for youth engagement."
  },
  {
    name: "Team Member 2",
    role: "Backend Engineer",
    image: "https://picsum.photos/seed/member2/400/400",
    bio: "Building robust systems for real-time analytics."
  }
];

export default function App() {
  const [currentHighlight, setCurrentHighlight] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Scene />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
            <span className="font-display font-bold text-2xl tracking-tight">SKonnect</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#objectives" className="hover:text-blue-600 transition-colors">Objectives</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#highlights" className="hover:text-blue-600 transition-colors">Highlights</a>
            <a href="#programmers" className="hover:text-blue-600 transition-colors">Programmers</a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              Smart Youth Engagement Platform
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Empowering <span className="text-gradient">Barangay Leadership</span> through NLP
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              SKonnect bridges the gap between Sangguniang Kabataan leaders and the youth using advanced machine learning, real-time analytics, and interactive engagement tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group">
                Explore Platform <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                View Case Study
              </button>
            </div>
          </motion.div>
          
          <div className="relative hidden lg:block">
            {/* The 3D models from Scene.tsx will be visible here */}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-8">Project Objectives</h2>
              <div className="space-y-6">
                {objectives.map((obj, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1 bg-blue-500/20 p-1 rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">{obj}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
              <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center">
                <span className="text-slate-500 font-mono text-sm">UTAUT Model Framework</span>
              </div>
              <p className="mt-6 text-slate-400 text-sm italic">
                Evaluating performance expectancy, effort expectancy, social influence, and facilitating conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl font-bold mb-4">Core Functions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive suite of tools designed to modernize youth governance and maximize participation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section - Scroll Carousel */}
      <section id="highlights" className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">Platform Highlights</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Real-world implementation of SKonnect in local barangay communities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-black/20 border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentHighlight}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center p-6"
                >
                  <img 
                    src={highlights[currentHighlight].url} 
                    alt={highlights[currentHighlight].caption}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 pt-16">
                    <p className="text-white font-bold text-lg md:text-xl text-center">
                      {highlights[currentHighlight].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {highlights.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentHighlight(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === currentHighlight ? 'bg-white w-8' : 'bg-white/20 w-2.5 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programmers Section */}
      <section id="programmers" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl font-bold mb-4">The Development Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the brilliant minds behind SKonnect, dedicated to transforming youth governance through technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {programmers.map((dev, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
                  <img 
                    src={dev.image} 
                    alt={dev.name}
                    className="relative w-48 h-48 object-cover rounded-3xl border-2 border-white shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{dev.name}</h3>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">{dev.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{dev.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                <span className="font-display font-bold text-xl tracking-tight">SKonnect</span>
              </div>
              <p className="text-slate-500 max-w-md leading-relaxed">
                A Smart Youth Engagement Platform Using NLP for Barangay Leadership. Bridging technology and governance for the next generation of leaders.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#objectives" className="hover:text-blue-600 transition-colors">Objectives</a></li>
                <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#highlights" className="hover:text-blue-600 transition-colors">Highlights</a></li>
                <li><a href="#programmers" className="hover:text-blue-600 transition-colors">Programmers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>Barangay Leadership Center</li>
                <li>skonnect.support@gov.ph</li>
                <li>+63 (02) 8888-9999</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs uppercase tracking-widest font-bold">
            <p>© 2026 SKonnect Platform. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
