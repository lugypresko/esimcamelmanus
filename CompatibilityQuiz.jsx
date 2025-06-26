import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const CompatibilityQuiz = () => {
  const [step, setStep] = useState(0);
  const [phoneModel, setPhoneModel] = useState('');
  const [osVersion, setOsVersion] = useState('');
  const [result, setResult] = useState(null); // null, 'compatible', 'incompatible'

  const handleNext = () => {
    if (step === 0) {
      if (phoneModel.trim() === '') return;
      setStep(1);
    } else if (step === 1) {
      if (osVersion.trim() === '') return;
      checkCompatibility();
    }
  };

  const checkCompatibility = () => {
    const lowerModel = phoneModel.toLowerCase();
    const lowerOs = osVersion.toLowerCase();

    // Simplified compatibility logic for demonstration
    // In a real app, this would involve a more robust database lookup
    const compatibleModels = [
      'iphone xs', 'iphone xr', 'iphone 11', 'iphone 12', 'iphone 13', 'iphone 14', 'iphone 15',
      'google pixel 4', 'google pixel 5', 'google pixel 6', 'google pixel 7', 'google pixel 8',
      'samsung galaxy s20', 'samsung galaxy s21', 'samsung galaxy s22', 'samsung galaxy s23', 'samsung galaxy s24',
      'samsung galaxy fold', 'samsung galaxy flip'
    ];

    let isCompatible = false;

    for (const model of compatibleModels) {
      if (lowerModel.includes(model)) {
        isCompatible = true;
        break;
      }
    }

    // Further refine with OS version (simplified)
    if (isCompatible) {
      if (lowerModel.includes('iphone') && parseFloat(lowerOs) < 13) {
        isCompatible = false; // iOS 13+ generally required for eSIM
      } else if ((lowerModel.includes('pixel') || lowerModel.includes('galaxy')) && parseFloat(lowerOs) < 10) {
        isCompatible = false; // Android 10+ generally required for eSIM
      }
    }

    setResult(isCompatible ? 'compatible' : 'incompatible');
    setStep(2); // Move to result step
  };

  const handleReset = () => {
    setStep(0);
    setPhoneModel('');
    setOsVersion('');
    setResult(null);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md border-purple-200">
      <CardHeader className="text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white py-6">
        <CardTitle className="text-3xl font-bold">eSIM Compatibility Check</CardTitle>
        <CardDescription className="text-purple-100">Find out if your device supports eSIM in 5 seconds!</CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">What&apos;s your phone model?</h3>
              <Input
                type="text"
                placeholder="e.g., iPhone 14 Pro Max, Samsung Galaxy S23, Google Pixel 7"
                value={phoneModel}
                onChange={(e) => setPhoneModel(e.target.value)}
                className="mb-6 p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Button onClick={handleNext} className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg">
                Next
              </Button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">What&apos;s your iOS or Android version?</h3>
              <Input
                type="text"
                placeholder="e.g., iOS 16.5, Android 13"
                value={osVersion}
                onChange={(e) => setOsVersion(e.target.value)}
                className="mb-6 p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Button onClick={handleNext} className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg">
                Check Compatibility
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {result === 'compatible' ? (
                <div className="text-green-600">
                  <CheckCircle className="h-20 w-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Great news!</h3>
                  <p className="text-xl text-gray-700">Your device is eSIM compatible.</p>
                  <Button onClick={handleReset} className="mt-6 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl text-lg">
                    Start Over
                  </Button>
                </div>
              ) : (
                <div className="text-red-600">
                  <XCircle className="h-20 w-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Let&apos;s help you check with support.</h3>
                  <p className="text-xl text-gray-700">It seems your device might not be compatible or we need more info. Please contact our support for personalized assistance.</p>
                  <Button onClick={handleReset} className="mt-6 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl text-lg">
                    Start Over
                  </Button>
                  <Button onClick={() => window.location.href = '/#support'} className="mt-4 ml-4 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl text-lg">
                    Contact Support
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default CompatibilityQuiz;


