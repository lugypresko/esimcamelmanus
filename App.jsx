import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  Smartphone,
  Globe,
  Zap,
  Shield,
  MessageCircle,
  Check,
  Star,
  Menu,
  X,
  Send,
  Bot,
  User,
  Wifi,
  MapPin,
  Clock,
  CreditCard,
  Headphones,
  Map,
  Layers,
  Users,
  TrendingUp,
  Award,
  Heart
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import heroImage from './assets/hero-esim.jpg'
import travelImage from './assets/travel-connectivity.jpg'
import esimTechImage from './assets/esim-tech.webp'
import camelGuideImage from './assets/esimcamel-guide.jpeg'
import './App.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import CompatibilityQuiz from './components/CompatibilityQuiz';
import Ecom from './Ecom';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hi! I\'m your friendly eSIMCamel guide 🐪 How can I help you with your eSIM journey today?' }
  ])
  const [currentMessage, setCurrentMessage] = useState('')
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const plans = [
    {
      region: 'Europe',
      price: '$15',
      data: '5GB',
      validity: '30 days',
      countries: '35+ countries',
      popular: true,
      features: [
        'High-speed data',
        'Instant activation',
        '24/7 support',
        'Flexible top-ups'
      ]
    },
    {
      region: 'Asia Pacific',
      price: '$20',
      data: '8GB',
      validity: '30 days',
      countries: '25+ countries',
      popular: false,
      features: [
        'High-speed data',
        'Instant activation',
        '24/7 support',
        'Flexible top-ups'
      ]
    },
    {
      region: 'Global',
      price: '$35',
      data: '10GB',
      validity: '30 days',
      countries: '150+ countries',
      popular: false,
      features: [
        'High-speed data',
        'Instant activation',
        '24/7 support',
        'Flexible top-ups'
      ]
    }
  ]

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Activation',
      description: 'Get connected in minutes with QR code activation. No physical SIM cards needed. Your journey begins the moment you land.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Coverage',
      description: 'Stay connected in 200+ countries and regions worldwide with local data rates. From bustling cities to remote landscapes, we\'ve got you covered.'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Pay-as-you-go',
      description: 'No contracts, no hidden fees, and no surprises. Pay only for the data you need, when you need it, giving you complete control over your spending.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '24/7 Dedicated Support',
      description: 'Get help anytime, anywhere with our AI-powered support bot and a team of expert technical specialists ready to assist you around the clock.'
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: 'Reliable High-Speed Data',
      description: 'Experience seamless browsing, streaming, and communication with our robust network partners, ensuring you always have a fast and stable connection.'
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'Flexible Plans',
      description: 'Choose from a variety of data packages and validity periods to perfectly match your travel needs, whether it\'s a short weekend getaway or an extended adventure.'
    }
  ]

  const botResponses = {
    'device compatibility': '🐪 I can help you check if your device supports eSIM! Compatible devices include iPhone XS and newer, Google Pixel 4 and newer, Samsung Galaxy S20 and newer. You can check by going to Settings > Mobile Data > Add eSIM (iPhone) or Settings > Connections > SIM Manager (Android). What device do you have?',
    'compatible devices': '🐪 Here are some popular eSIM-compatible devices: iPhone 15/14/13/12/11 series, iPhone XS/XR, Samsung Galaxy S24/S23/S22 series, Google Pixel 8/7/6/5/4 series, Samsung Z Fold/Flip series, and many more! Want me to check a specific device?',
    'plans': '🐪 We offer flexible eSIM plans for different regions: Europe (5GB for $15), Asia Pacific (8GB for $20), and Global (10GB for $35). All plans are valid for 30 days with instant activation and 24/7 support. Which destination are you traveling to?',
    'setup': '🐪 Setting up your eSIM is easy! Step 1: Install via QR code (Settings > Add eSIM > Scan QR). Step 2: Activate and set as secondary line. Step 3: Enable data and connect! You need Wi-Fi for installation. The whole process takes less than 5 minutes!',
    'installation': '🐪 To install your eSIM: Option 1 - Scan the QR code we send you (go to Settings > Add eSIM > Use QR Code). Option 2 - Enter details manually using the SM-DP+ address and activation code from your email. Make sure you have Wi-Fi connection!',
    'activation': '🐪 After installation, your phone will ask to set it as Primary/Secondary line (choose Secondary to keep your main line active) and enable data (select Yes). If it doesn\'t connect immediately, restart your phone or manually select the network in Settings.',
    'troubleshooting': '🐪 If your eSIM isn\'t working: 1) Check it\'s selected as active data SIM, 2) Enable mobile data and roaming, 3) Restart your phone, 4) Try manual network selection. Activation usually takes under 15 minutes. Still having issues?',
    'dual sim': '🐪 Yes! You can use eSIM and physical SIM simultaneously. Most phones support Dual SIM mode - perfect for keeping your local number while using eSIM for travel data. You can switch between them anytime in Settings > Mobile Data.',
    'delete esim': '🐪 Important: If you delete your eSIM by mistake, it usually cannot be re-downloaded and you\'ll need to purchase a new one. Contact our support team immediately if this happens - we might be able to help recover it.',
    'reuse esim': '🐪 Unfortunately, travel eSIMs are single-use and expire after your data package or validity period ends. For your next trip, you\'ll need a new eSIM. But the setup process will be just as easy!',
    'phone calls': '🐪 Our eSIMs are data-only, so no traditional phone number for calls/SMS. But you can use WhatsApp, FaceTime, Skype, or other internet-based apps for calling and messaging. Perfect for staying connected!',
    'hotspot': '🐪 Yes! Most of our eSIM packages allow hotspot/tethering to share your connection with other devices, just like a regular SIM. Check your specific plan details to confirm this feature is included.',
    'multiple countries': '🐪 We offer both country-specific and regional/global plans. Our Europe plan covers 35+ countries, Asia Pacific covers 25+ countries, and Global covers 150+ countries. Always check coverage before purchasing!',
    'support': '🐪 I\'m here to help 24/7! I can assist with device compatibility, plan recommendations, setup instructions, and troubleshooting. For complex technical issues, I can connect you with our human support team.',
    'hello': '🐪 Hello! Welcome to eSIMCamel. I\'m your friendly guide here to help you find the perfect eSIM plan for your travels. What would you like to know?',
    'convert physical sim': '🐪 To convert a physical SIM to an eSIM on iPhone: Go to Settings > Cellular > Convert to eSIM. Tap Convert Cellular Plan, then Convert to eSIM. Wait for activation, then remove the physical SIM.',
    'android esim setup': '🐪 To set up an eSIM on Android: Check if your phone supports eSIM. Open Settings > Network & Internet (or Connections) > Mobile network (or SIM card manager). Find and select the option to add an eSIM. Choose between scanning a QR code or entering an activation code. Follow on-screen instructions.',
    'what is esim': '🐪 An eSIM is a digital SIM card built into your phone - no physical card needed! You activate it by scanning a QR code or entering an activation code. It\'s perfect for travel as you can switch plans instantly without changing physical cards.',
    'internet required': '🐪 Yes, you need Wi-Fi or mobile data to download the eSIM profile to your phone. I recommend using a stable Wi-Fi connection during installation for the best experience.',
    'how long activate': '🐪 Activation is usually instant after installation! Sometimes it takes a few minutes for the network to recognize the profile. If it takes longer than 15 minutes, try restarting your phone or contact our support.',
    'remove esim': '🐪 After your trip, you can either delete the eSIM from your phone or simply disable it in settings. Leaving it installed won\'t affect your device or local SIM. You can keep it for reference if traveling again soon.',
    'default': '🐪 I\'d be happy to help! I can assist with device compatibility, plan recommendations, setup instructions, troubleshooting, and general eSIM questions. What specific question do you have?'
  }

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return

    const userMessage = { type: 'user', message: currentMessage }
    setChatMessages(prev => [...prev, userMessage])

    // Simple bot response logic
    setTimeout(() => {
      const lowerMessage = currentMessage.toLowerCase()
      let response = botResponses.default

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerMessage.includes(key)) {
          response = value
          break
        }
      }

      const botMessage = { type: 'bot', message: response }
      setChatMessages(prev => [...prev, botMessage])
    }, 1000)

    setCurrentMessage('')
  }

  const quickQuestions = [
    'Is my device compatible?',
    'What is an eSIM?',
    'How do I install eSIM?',
    'Can I use dual SIM?',
    'Troubleshooting help',
    'Can I make phone calls?',
    'How long to activate?',
    'Multiple countries coverage?'
  ]

  // Cart handlers
  const handleAddToCart = (product) => setCart((prev) => [...prev, product]);
  const handleRemoveFromCart = (idx) => setCart((prev) => prev.filter((_, i) => i !== idx));
  const handleViewCart = () => setShowCart(true);
  const handleBackToShop = () => { setShowCart(false); setShowCheckout(false); };
  const handleCheckout = () => { setShowCart(false); setShowCheckout(true); };
  const handleBackToCart = () => { setShowCheckout(false); setShowCart(true); };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white relative overflow-hidden">
        {/* Background Organic Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 right-1/4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <header className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-40 relative">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">🐪</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  eSIMCamel
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="/#plans" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Plans</Link>
                <Link to="/#coverage" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Coverage</Link>
                <Link to="/faq" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">FAQ</Link>
                <Link to="/#support" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Support</Link>
                <Link to="/#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</Link>
                <Link to="/shop" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Shop</Link>
              </nav>

              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                  className="hidden md:flex items-center space-x-2 border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat Support</span>
                </Button>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl shadow-lg">
                  Get Started
                </Button>
                
                {/* Mobile Menu Button */}
                <button 
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-4 pb-4 border-t border-purple-100"
                >
                  <div className="flex flex-col space-y-4 pt-4">
                    <Link to="/#plans" className="text-gray-700 hover:text-purple-600 transition-colors">Plans</Link>
                    <Link to="/#coverage" className="text-gray-700 hover:text-purple-600 transition-colors">Coverage</Link>
                    <Link to="/#support" className="text-gray-700 hover:text-purple-600 transition-colors">Support</Link>
                    <Link to="/#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsChatOpen(true)}
                      className="flex items-center space-x-2 w-fit border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat Support</span>
                    </Button>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section id="home" className="relative py-20 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Badge className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 rounded-full px-4 py-2 text-sm font-medium">
                        🌍 Global Connectivity
                      </Badge>
                      <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                        Stop Wasting €150
                        <span className="block bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                          on Roaming Fees Per Trip.
                        </span>
                      </h1>
                      <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Get connected in 2 minutes with instant eSIM activation – no contracts, no hassle.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-10 py-7 rounded-2xl shadow-xl"
                        >
                          Get My eSIM Now
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                          onClick={() => window.location.href = 
                            "/faq#compatibility"}
                          className="text-lg px-10 py-7 border-2 border-purple-200 text-purple-600 hover:bg-purple-50 rounded-2xl"
                        >
                          Is My Phone Compatible?
                        </Button>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative flex justify-center lg:justify-end"
                    >
                      <img 
                        src={heroImage} 
                        alt="eSIM Setup on Smartphone" 
                        className="rounded-3xl shadow-2xl w-full max-w-lg transform rotate-3 hover:rotate-0 transition-transform duration-500"
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg flex items-center space-x-3"
                      >
                        <MapPin className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold text-gray-800">200+ Countries</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Compatibility Quiz Section */}
              <section id="compatibility-quiz" className="py-16 bg-purple-50">
                <div className="container mx-auto px-4">
                  <CompatibilityQuiz />
                </div>
              </section>

              {/* Features Section */}
              <section id="features" className="py-20 bg-purple-50">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                    Why Choose eSIMCamel?
                  </h2>
                  <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                    Unlock seamless global connectivity with eSIMCamel. We offer unparalleled convenience, flexibility, and reliability for all your travel data needs.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                          {feature.icon}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-purple-800">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* How It Works Section */}
              <section id="how-it-works" className="py-20">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                    How eSIMCamel Works
                  </h2>
                  <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                    Getting started with eSIMCamel is as easy as 1-2-3. Follow these simple steps to activate your global connectivity.
                  </p>
                  <div className="grid md:grid-cols-3 gap-10">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-white p-8 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                        <span className="text-white font-bold text-2xl">1</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-purple-800">Choose Your Plan</h3>
                      <p className="text-gray-600">Select from our diverse range of eSIM plans tailored for different regions and data needs. Whether it's a short trip or an extended stay, we have a plan for you.</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white p-8 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                        <span className="text-white font-bold text-2xl">2</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-purple-800">Install Your eSIM</h3>
                      <p className="text-gray-600">Receive your eSIM QR code instantly via email. Simply scan it with your compatible device, and your eSIM profile will be installed in minutes. No physical SIM cards, no waiting.</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-white p-8 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                        <span className="text-white font-bold text-2xl">3</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-purple-800">Connect & Explore</h3>
                      <p className="text-gray-600">Once installed, activate your eSIM and enjoy seamless high-speed data connectivity in your destination. Stay connected with loved ones, navigate with ease, and share your travel moments instantly.</p>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Plans Section */}
              <section id="plans" className="py-20 bg-purple-50">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                    Our Flexible eSIM Plans
                  </h2>
                  <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                    Discover the perfect eSIM plan for your next adventure. We offer a variety of options to suit every traveler's needs, ensuring you always have reliable and affordable connectivity.
                  </p>
                  <div className="grid md:grid-cols-3 gap-10">
                    {plans.map((plan, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-3xl shadow-lg flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300"
                      >
                        <div>
                          <h3 className="text-3xl font-bold mb-4 text-purple-800">{plan.region}</h3>
                          <p className="text-5xl font-bold text-green-600 mb-6">{plan.price}</p>
                          <p className="text-gray-600 text-lg mb-2">{plan.data} Data</p>
                          <p className="text-gray-600 text-lg mb-6">{plan.validity} Validity</p>
                          <ul className="text-left space-y-2 mb-8">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <Check className="h-5 w-5 text-green-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                            <li className="flex items-center text-gray-700">
                              <MapPin className="h-5 w-5 text-purple-500 mr-2" />
                              {plan.countries}
                            </li>
                          </ul>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-lg py-6 rounded-2xl shadow-md">
                          Get {plan.region} Plan
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Coverage Section */}
              <section id="coverage" className="py-20">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
                    Where Can You Go?
                  </h2>
                  <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                    eSIMCamel provides seamless connectivity in over 200 countries and regions worldwide. Explore our extensive coverage map and travel with confidence.
                  </p>
                  <div className="relative w-full max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden">
                    <img 
                      src={travelImage} 
                      alt="Global Coverage Map" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Globe className="h-20 w-20 mx-auto mb-4 text-white" />
                        <h3 className="text-4xl font-bold mb-2">Connect in 200+ Destinations</h3>
                        <p className="text-lg">From bustling metropolises to serene natural wonders, your eSIMCamel keeps you connected.</p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="mt-12 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-lg px-10 py-7 rounded-2xl shadow-xl"
                  >
                    View All Covered Countries
                  </Button>
                </div>
              </section>

              {/* Testimonials Section */}
              <section id="testimonials" className="py-20 bg-purple-50">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
                    What Our Travelers Say
                  </h2>
                  <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                    Don't just take our word for it. Hear from happy customers who have experienced seamless connectivity with eSIMCamel on their global adventures.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-white p-8 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 text-left"
                    >
                      <Star className="h-6 w-6 text-yellow-500 mb-4" fill="currentColor" />
                      <p className="text-gray-700 mb-6">"eSIMCamel made my trip to Europe so much easier! Instant activation and reliable data everywhere I went. Highly recommend!"</p>
                      <p className="font-semibold text-purple-800">- Sarah L., Adventure Traveler</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white p-8 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 text-left"
                    >
                      <Star className="h-6 w-6 text-yellow-500 mb-4" fill="currentColor" />
                      <p className="text-gray-700 mb-6">"No more swapping SIM cards! eSIMCamel is a game-changer for international travel. The global plan kept me connected across multiple continents."</p>
                      <p className="font-semibold text-purple-800">- Mark T., Digital Nomad</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-white p-8 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 text-left"
                    >
                      <Star className="h-6 w-6 text-yellow-500 mb-4" fill="currentColor" />
                      <p className="text-gray-700 mb-6">"The 24/7 support was fantastic. Had a minor issue, and the eSIMCamel guide bot resolved it instantly. Best customer service experience!"</p>
                      <p className="font-semibold text-purple-800">- Emily R., Business Traveler</p>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Support Section */}
              <section id="support" className="py-20">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                    Meet Your Personal eSIMCamel Guide 🐪
                  </h2>
                  <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                    Our AI-powered eSIMCamel Guide is here to provide instant assistance for all your eSIM needs. From setup to troubleshooting, get answers 24/7.
                  </p>
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="relative flex justify-center md:justify-start"
                    >
                      <img 
                        src={camelGuideImage} 
                        alt="eSIMCamel Guide" 
                        className="rounded-3xl shadow-2xl w-full max-w-sm transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute top-8 right-8 bg-white/90 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg flex items-center space-x-3"
                      >
                        <Headphones className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-gray-800">24/7 Assistance</span>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-left"
                    >
                      <h3 className="text-3xl font-bold mb-4 text-purple-800">Instant Answers, Anytime, Anywhere</h3>
                      <p className="text-gray-600 mb-6">Our intelligent eSIMCamel Guide is always ready to assist you. Get immediate answers to common questions about device compatibility, plan recommendations, setup instructions, and troubleshooting.</p>
                      <div className="bg-purple-50 p-6 rounded-2xl shadow-inner mb-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img src={camelGuideImage} alt="Bot Avatar" className="w-full h-full object-cover" />
                          </div>
                          <div className="bg-white p-4 rounded-xl shadow-sm max-w-xs">
                            <p className="text-gray-800">Hi! I'm your friendly eSIMCamel guide 🐪 How can I help you with your eSIM journey today?</p>
                          </div>
                        </div>
                        <div className="flex items-end justify-end space-x-4">
                          <div className="bg-green-100 p-4 rounded-xl shadow-sm max-w-xs">
                            <p className="text-gray-800">Is my device compatible?</p>
                          </div>
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <User className="h-full w-full text-gray-500" />
                          </div>
                        </div>
                      </div>
                      <Button 
                        size="lg" 
                        onClick={() => setIsChatOpen(true)}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-10 py-7 rounded-2xl shadow-xl"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat with Guide Now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* About Us Section */}
              <section id="about" className="py-20 bg-purple-50">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
                    About eSIMCamel
                  </h2>
                  <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                    eSIMCamel is dedicated to revolutionizing global connectivity for travelers. Learn about our mission, values, and what drives us to provide the best eSIM experience.
                  </p>
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-left"
                    >
                      <h3 className="text-3xl font-bold mb-4 text-purple-800">Our Mission: Seamless Connectivity, Global Freedom</h3>
                      <p className="text-gray-600 mb-6">At eSIMCamel, our mission is to empower travelers with effortless and reliable global connectivity. We believe that staying connected should be simple, affordable, and accessible, no matter where your adventures take you. We are committed to providing innovative eSIM solutions that eliminate roaming fees and the hassle of physical SIM cards.</p>
                      <h3 className="text-3xl font-bold mb-4 text-purple-800">Why the Camel?</h3>
                      <p className="text-gray-600 mb-6">The camel symbolizes resilience, reliability, and the ability to navigate vast distances – qualities that perfectly embody our commitment to global connectivity. Just as a camel guides travelers through the desert, eSIMCamel guides you through the world of international data, ensuring you're always connected and never lost.</p>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          Innovation in Connectivity
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          Customer-Centric Approach
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          Global Accessibility
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          Transparent Pricing
                        </li>
                      </ul>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative flex justify-center md:justify-end"
                    >
                      <img 
                        src={esimTechImage} 
                        alt="eSIM Technology" 
                        className="rounded-3xl shadow-2xl w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500"
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg flex items-center space-x-3"
                      >
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold text-gray-800">Future of Travel</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Call to Action Section */}
              <section className="py-20 bg-gradient-to-r from-purple-600 to-green-500 text-white text-center">
                <div className="container mx-auto px-4">
                  <h2 className="text-5xl font-bold mb-6">
                    Ready for Seamless Global Connectivity?
                  </h2>
                  <p className="text-xl mb-10 max-w-3xl mx-auto">
                    Join thousands of happy travelers who trust eSIMCamel for their international data needs. Get your eSIM today and experience true freedom.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                  >
                    Get Your eSIM Now!
                  </Button>
                </div>
              </section>
            </>
          } />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shop" element={<Ecom onViewCart={() => setShowCart(true)} />} />
          <Route path="/cart" element={<Cart cart={cart} onRemove={handleRemoveFromCart} onCheckout={handleCheckout} onBack={handleBackToShop} />} />
          <Route path="/checkout" element={<Checkout cart={cart} onBack={handleBackToCart} />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-purple-900 text-white py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">🐪</span>
                  </div>
                  <span className="text-2xl font-bold">eSIMCamel</span>
                </div>
                <p className="text-purple-200 text-sm">Your trusted partner for global eSIM connectivity.</p>
                <div className="flex space-x-4 mt-6">
                  {/* Social Media Icons */}
                  <a href="#" className="text-purple-200 hover:text-white transition-colors"><Globe className="h-6 w-6" /></a>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors"><MessageCircle className="h-6 w-6" /></a>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors"><Users className="h-6 w-6" /></a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/#plans" className="text-purple-200 hover:text-white transition-colors">Plans</Link></li>
                  <li><Link to="/#coverage" className="text-purple-200 hover:text-white transition-colors">Coverage</Link></li>
                  <li><Link to="/faq" className="text-purple-200 hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link to="/#how-it-works" className="text-purple-200 hover:text-white transition-colors">How It Works</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link to="/#support" className="text-purple-200 hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link to="/terms-of-service" className="text-purple-200 hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link to="/privacy-policy" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><a href="#" onClick={() => setIsChatOpen(true)} className="text-purple-200 hover:text-white transition-colors">Chat Support</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-purple-200">Email: support@esimcamel.com</p>
                <p className="text-purple-200">Phone: +1 (800) 123-4567</p>
                <p className="text-purple-200 mt-4">© {new Date().getFullYear()} eSIMCamel. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Chat Widget */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden"
              style={{ height: '500px' }}
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-t-3xl flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <img src={camelGuideImage} alt="eSIMCamel Guide" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">eSIMCamel Guide 🐪</h3>
                    <p className="text-sm text-purple-200">Your friendly travel companion</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-purple-200 transition-colors">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4" style={{ scrollBehavior: 'smooth' }}>
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} items-start space-x-2`}
                  >
                    {msg.type === 'bot' && (
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-purple-300">
                        <img src={camelGuideImage} alt="Bot Avatar" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-xl max-w-[75%] ${msg.type === 'user' ? 'bg-green-100 text-gray-800 rounded-br-none' : 'bg-purple-100 text-gray-800 rounded-bl-none'}`}
                    >
                      {msg.message}
                    </div>
                    {msg.type === 'user' && (
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-green-300">
                        <User className="h-full w-full text-gray-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="p-4 border-t border-gray-200 flex flex-wrap gap-2">
                {quickQuestions.map((q, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-purple-100 transition-colors text-purple-700 border-purple-300"
                    onClick={() => setCurrentMessage(q)}
                  >
                    {q}
                  </Badge>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage()
                    }
                  }}
                />
                <Button 
                  size="icon" 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl shadow-md"
                  onClick={handleSendMessage}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isChatOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl shadow-xl flex items-center justify-center z-40 hover:shadow-2xl transition-shadow"
          >
            <MessageCircle className="h-7 w-7" />
          </motion.button>
        )}
      </div>
    </Router>
  )
}

export default App


