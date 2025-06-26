import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, Smartphone, Wifi, Globe, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import camelGuideImage from '../assets/esimcamel-guide.jpeg';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      category: "Getting Started",
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          question: "What is an eSIM?",
          answer: "An eSIM (embedded SIM) is a digital version of a SIM card that is built directly into your phone. You don't need to insert anything physically. With eSIM, you can activate a mobile plan by simply scanning a QR code or entering an activation code, making it easy to switch plans or add new ones without changing physical cards."
        },
        {
          question: "How do I know if my phone supports eSIM?",
          answer: "You can check in your phone settings: On iPhone: Go to Settings > Mobile Data > Add eSIM. On Android: Go to Settings > Connections > SIM Manager. If you see the option to add an eSIM, your device is compatible. You can also check your device model against our compatibility list."
        },
        {
          question: "Do I need an internet connection to install the eSIM?",
          answer: "Yes, you must have Wi-Fi or mobile data active to download the eSIM profile to your phone. We recommend being connected to a stable Wi-Fi network during installation."
        }
      ]
    },
    {
      category: "Installation & Setup",
      icon: <Smartphone className="h-6 w-6" />,
      questions: [
        {
          question: "How do I install the eSIM?",
          answer: "You can install the eSIM by scanning the QR code we send you or by manually entering the provided activation details. Option 1: Go to Settings > Add eSIM > Use QR Code and scan. Option 2: Go to Settings > Add eSIM > Enter Details Manually and input the SM-DP+ address and activation code from your email."
        },
        {
          question: "How long does it take to activate the eSIM?",
          answer: "Activation is usually instant after you install the eSIM. Sometimes it can take a few minutes for the network to recognize the new profile. If it takes longer than 15 minutes, try restarting your phone or contact support."
        },
        {
          question: "What should I do if my eSIM isn't working?",
          answer: "First, make sure the eSIM is selected as the active data SIM in your settings. Check that mobile data is turned on and that roaming is enabled. Try restarting your phone. If you still can't connect, try manually selecting a network. If the problem continues, contact our support team."
        }
      ]
    },
    {
      category: "Usage & Features",
      icon: <Wifi className="h-6 w-6" />,
      questions: [
        {
          question: "Can I use eSIM and my physical SIM at the same time?",
          answer: "Yes. Most modern phones support Dual SIM mode, where you can have one physical SIM and one eSIM active at the same time. This is useful if you want to keep your local number while using the eSIM for data when traveling."
        },
        {
          question: "Can I make phone calls with my eSIM?",
          answer: "Most eSIMs we offer are data-only, meaning they don't provide a traditional phone number for voice calls or SMS. You can use internet-based apps like WhatsApp, FaceTime, or Skype for calling and messaging."
        },
        {
          question: "Can I share my eSIM data with other devices (hotspot)?",
          answer: "Yes. Most of our eSIM packages allow you to share your internet connection via hotspot or tethering, just like a regular SIM card. Check your plan details to confirm this feature."
        },
        {
          question: "How do I switch between my eSIM and my local SIM?",
          answer: "You can easily switch by going to your phone settings: iPhone: Settings > Mobile Data > Mobile Data Switching. Android: Settings > SIM Manager > Preferred SIM for Data/Calls. Choose which SIM you want to use for mobile data and calls at any time."
        }
      ]
    },
    {
      category: "Coverage & Plans",
      icon: <Globe className="h-6 w-6" />,
      questions: [
        {
          question: "Will my eSIM work in multiple countries?",
          answer: "Some of our eSIMs are country-specific, while others cover entire regions or even offer global plans. Our Europe plan covers 35+ countries, Asia Pacific covers 25+ countries, and Global covers 150+ countries. Always check your plan's coverage before you buy to ensure it works in all your planned destinations."
        },
        {
          question: "Does the eSIM come with a phone number?",
          answer: "Usually, our travel eSIMs are data-only and don't come with a phone number for voice calls or SMS. If you need voice services, you'll need to use apps like WhatsApp or choose a specific plan that includes calling."
        },
        {
          question: "Can I reuse my eSIM for my next trip?",
          answer: "No. Most travel eSIMs are for single use and expire once you finish your data package or reach the expiration date. For your next trip, you will need to purchase a new eSIM package."
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          question: "What happens if I delete my eSIM by mistake?",
          answer: "In most cases, eSIM profiles cannot be re-downloaded. If you delete it, you will likely need to purchase a new eSIM. Contact our support team to check if there's a possibility to recover your profile."
        },
        {
          question: "Do I need to remove my eSIM after my trip?",
          answer: "You can either delete the eSIM from your phone or simply disable it in your settings. Leaving it installed will not affect your device or your local SIM. If you plan to travel again soon, you can keep it for reference."
        }
      ]
    }
  ];

  const compatibleDevices = {
    iPhone: [
      "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
      "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
      "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini",
      "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini",
      "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
      "iPhone XS Max", "iPhone XS", "iPhone XR",
      "iPhone SE (2020 and newer)"
    ],
    Android: [
      "Samsung Galaxy S24 Ultra", "Samsung Galaxy S24+", "Samsung Galaxy S24",
      "Samsung Galaxy S23 Ultra", "Samsung Galaxy S23+", "Samsung Galaxy S23",
      "Samsung Galaxy Z Fold 5", "Samsung Galaxy Z Flip 5",
      "Samsung Galaxy Z Fold 4", "Samsung Galaxy Z Flip 4",
      "Google Pixel 8 Pro", "Google Pixel 8", "Google Pixel 7 Pro", "Google Pixel 7",
      "Google Pixel 6 Pro", "Google Pixel 6", "Google Pixel 5",
      "Google Pixel 4a (5G)", "Google Pixel 4 XL", "Google Pixel 4",
      "Huawei P40 (non-Chinese version)", "Huawei P40 Pro (non-Chinese version)",
      "Motorola Razr (2022)", "Motorola Edge 40 Pro",
      "Oppo Find X3 Pro", "Oppo Find N2 Flip",
      "Sony Xperia 10 IV"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-purple-600" />
              <span className="text-purple-600 font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🐪</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                eSIMCamel
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-3xl overflow-hidden border-4 border-purple-200 shadow-lg">
              <img 
                src={camelGuideImage} 
                alt="eSIMCamel Guide" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
            eSIM Setup Guide & FAQ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about setting up and using your eSIM. 
            Your friendly eSIMCamel guide is here to help you every step of the way!
          </p>
        </div>

        {/* Quick Setup Guide */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            🚀 Quick Setup Guide - Get Connected in 3 Steps
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">📤 Install Your eSIM</h3>
              <p className="text-gray-600">
                Scan the QR code we send you or enter details manually. 
                Go to Settings &gt; Add eSIM and follow the prompts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-600">⚙️ Activate Your eSIM</h3>
              <p className="text-gray-600">
                Set as secondary line to keep your main number active. 
                Enable data for the eSIM when prompted.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">🌍 Connect and Go!</h3>
              <p className="text-gray-600">
                Open your browser to test connection. 
                If needed, manually select network in Settings.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
                <div className="flex items-center space-x-3">
                  {category.icon}
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
              </div>
              
              <div className="p-6">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div key={faqIndex} className="border-b border-gray-200 last:border-b-0">
                      <button
                        className="w-full py-4 px-2 text-left flex items-center justify-between hover:bg-purple-50 rounded-lg transition-colors"
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                        {openFAQ === globalIndex ? (
                          <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        )}
                      </button>
                      
                      {openFAQ === globalIndex && (
                        <div className="pb-4 px-2">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Compatible Devices Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            📱 Compatible Devices
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 flex items-center">
                <Smartphone className="h-5 w-5 mr-2" />
                iPhone Models
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {compatibleDevices.iPhone.map((device, index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                    {device}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
                <Smartphone className="h-5 w-5 mr-2" />
                Android Models
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {compatibleDevices.Android.map((device, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                    {device}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl shadow-xl p-8 mt-12 text-white text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-4 border-white/30">
              <img 
                src={camelGuideImage} 
                alt="eSIMCamel Guide" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-6 opacity-90">
            Your friendly eSIMCamel guide is always here to help! 
            Contact our support team for personalized assistance.
          </p>
          <Link 
            to="/"
            className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Chat with eSIMCamel Guide 🐪
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

